import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner/Spinner';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/order/${user.email}`).then(res => res.json()))
    console.log(orders)
    if(isLoading){
        return <Spinner></Spinner>
    }

    const handleDelete = () => {
        fetch(`http://localhost:5000/order/${user.email}`, {
            method: 'DELETE',
            
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    console.log(data)
                    refetch();
                    toast.success(`Order is is removed`)  
                }
            })
    }


    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th className='text-lg font-bold'>Serial</th>
                            <th className='text-lg font-bold'>Product Image</th>
                            <th className='text-lg font-bold'>Product Name</th>
                            <th className='text-lg font-bold'>Order Quantity</th>
                            <th className='text-lg font-bold'>Total Price</th>
                            <th className='text-lg font-bold'>Contact Number</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr class="hover">
                                <th className='text-lg font-bold'>{index + 1}</th>
                                <td><div class="avatar">
                                    <div class="w-20 rounded">
                                        <img src={order.img} />
                                    </div>
                                </div></td>
                                <td className='text-lg font-bold'>{order.productName}</td>
                                <td className='text-lg font-bold'>{order.order}</td>
                                <td className='text-lg font-bold'>{order.totalPrice}</td>
                                <td className='text-lg font-bold'>{order.phone}</td>
                                <td className='text-lg font-bold'>{order.paid === true ? 'Paid' : <Link to={`/dashboard/payment/${order._id}`}><button class="btn btn-sm p-2 bg-blue-700 border-0 text-white px-5">Pay</button></Link>}</td>
                                <td className='text-lg font-bold text-center'>{order.paid === true ? <p className='text-orange-500'>{order.transactionId}</p> :  <button onClick={handleDelete} class="btn btn-sm p-2 bg-red-700 border-0 text-white px-5">Remove</button>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div> 
        </div>
    );
};

export default MyOrders;