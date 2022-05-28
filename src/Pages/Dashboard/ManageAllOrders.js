import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner/Spinner';

const ManageAllOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://tranquil-crag-79449.herokuapp.com/order', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    }



    return (
        
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-2xl text-center">Are you sure to delete this order?</h3>
                    <div class="modal-action">
                        <label  class="btn btn-sm">Remove</label>
                        <label for="my-modal-6" class="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th className='text-lg font-bold'>Serial</th>
                            <th className='text-lg font-bold'>order Image</th>
                            <th className='text-lg font-bold'>order Name</th>
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
                                <td className='text-lg font-bold'>{order.orderName}</td>
                                <td className='text-lg font-bold'>{order.order}</td>
                                <td className='text-lg font-bold'>{order.totalPrice}</td>
                                <td className='text-lg font-bold'>{order.phone}</td>
                                <td className='text-lg font-bold'>{order.paid === true ? 'Paid' : 'Not Paid'}</td>
                                <td className='text-lg font-bold text-center'>{order.paid === true ? <button class="btn btn-sm p-2 bg-blue-500 border-0 text-white px-5">Shipped</button> : <label for="my-modal-6" class="btn btn-sm modal-button bg-red-500 border-0 text-white">Remove</label>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;