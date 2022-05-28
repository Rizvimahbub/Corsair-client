import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../Shared/Spinner/Spinner';

const Users = () => {
    const { data: users, isLoading,refetch } = useQuery('users', () => fetch('https://tranquil-crag-79449.herokuapp.com/users', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    }).then(res=>res.json()))


    if (isLoading) {
        return <Spinner></Spinner>
    }

    const deleteProcess = _id =>{
        fetch(`https://tranquil-crag-79449.herokuapp.com/users/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`User is deleted.`)
                    refetch();
                }
            })
    }


    return (
        <div>
            <h1 className='text-5xl font-bold text-purple-500 text-center'>All Users</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th className='text-base font-bold'>Serial</th>
                            <th className='text-base font-bold'>Name</th>
                            <th className='text-base font-bold'>Email</th>
                            <th className='text-base font-bold'>Contact Number</th>
                            <th className='text-base font-bold'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr class="hover">
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td><button onClick={() => deleteProcess(user._id)} class="btn btn-sm bg-red-500 text-white border-0">Remove</button></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;