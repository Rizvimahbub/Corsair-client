import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner/Spinner';
import AdminMakingPage from './AdminMakingPage';

const MakeAdmin = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://tranquil-crag-79449.herokuapp.com/users', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    }).then(res => res.json()))


    if (isLoading) {
        return <Spinner></Spinner>
    }

    
    return (
        <div>
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
                            users.map((user, index) => <AdminMakingPage
                                key={index}
                                user={user}
                                refetch={refetch}
                                index={index}
                            ></AdminMakingPage>
                            )    
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;