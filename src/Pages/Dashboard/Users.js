import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner/Spinner';

const Users = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    }).then(res=>res.json()))


    if (isLoading) {
        return <Spinner></Spinner>
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
                                    <td></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;