import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../Shared/Spinner/Spinner';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L4JBiKulUBEIW5Lj8Zf0l5FBPuEhuryA1F12qFaxJhI1wkcKqVbMXAl49HsLd1V8OZu5uC3zThzqWmTzVVs1hNE00xwH8nUc9');

const Payment = () => {
    const { id } = useParams();

    const { data: order, isLoading } = useQuery(('order', id), () => fetch(`https://tranquil-crag-79449.herokuapp.com/orders/order/${id}`).then(res => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    }

    console.log(order.price)
    return (
        <div className='grid lg:grid-cols-1 xl:grid-cols-2 md:grid-cols-2 m-5 md:m-0'>
            <div class="card lg:mx-auto mt-5 w-96 border mb-5 bg-base-100 shadow-xl">
                <figure><img src={order.img} /></figure>
                <div class="card-body">
                    <h1 className='text-5xl font-bold text-center'>Detail</h1>
                    <h2 class="card-title mb-2">Product Name : {order.productName}</h2>
                    <h2 class="card-title mb-2">Customer : {order.name}</h2>
                    <h2 class="card-title mb-2">Quantity : {order.order} units</h2>
                    <h2 class="card-title mb-2">Total Price : ${order.totalPrice}</h2>
                    <h2 class="card-title mb-2">Address : {order.address}</h2>
                    <h2 class="card-title mb-2">Phone : {order.phone}</h2>
                </div>
                
            </div>

            <div class="md:mt-96  xl:mt-96 w-96 bg-base-100 h-64 shadow-xl border rounded-2xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;