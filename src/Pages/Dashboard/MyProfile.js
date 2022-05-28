import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner/Spinner';
import './MyProfile.css';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [agree, setAgree] = useState(false);
    const [agree2, setAgree2] = useState(false);
    const addressRef = useRef('');
    const cityRef = useRef('');
    const phoneRef = useRef('');


    const { data: info, isLoading, refetch } = useQuery(('infos', user.email), () => fetch(`http://localhost:5000/profile/${user.email}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    }).then(res => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    }


    const onSubmit = () => {
        const name = user.displayName;
        const email = user.email;
        const address = addressRef.current.value;
        const city = cityRef.current.value;
        const phone = phoneRef.current.value;
        const info = { name, email, address, city, phone }

        fetch('http://localhost:5000/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        }).then(res=>res.json())
        .then(data=> {
            console.log(data)
            refetch()
        })

    }

    const updateProcess = () => {
        const address = addressRef.current.value;
        const city = cityRef.current.value;
        const phone = phoneRef.current.value;
        const updatedItem = { address, city, phone };
        fetch(`http://localhost:5000/profile/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        }).then(res=>res.json())
        .then(data=> {
            console.log(data)
            refetch()
        })
    }


    return (

        <div class="mr-5  grid xl:grid-cols-2 lg:grid-cols-1 mb-5 rounded-3xl bg-base-100 shadow-xl mt-10 border-2">
            <div className='pl-5'>
                <h1 className='md:text-5xl sm:text-xl text-purple-500 md:text-center sm:text-left font-bold'>Users Information</h1>
                <h1 class="h1 md:text-2xl sm:text-lg font-bold text-left w-full">Name : {user.displayName}</h1>
                <h1 class="h1 md:text-2xl sm:text-lg font-bold text-left w-full">Email : {user.email}</h1>
                <h1 class="h1 md:text-2xl sm:text-lg font-bold text-left w-full">Address : {info?.address}</h1>
                <h1 class="h1 md:text-2xl sm:text-lg font-bold text-left w-full">City : {info?.city}</h1>
                <h1 class="h1 md:text-2xl sm:text-lg font-bold text-left w-full">Phone : {info?.phone}</h1>
            </div>
            <div className='ml-auto md:w-2/4  sm:w-9/12'>
                <div className="w-auto mx-auto bg-base-100 shadow-xl rounded-r-2xl">
                    <div className="card-body">
                        <h2 className="text-center font-semibold text-3xl">Information</h2>
                        <form className='text-center'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Address</span>
                                </label>
                                <input
                                    ref={addressRef}
                                    type="text"
                                    placeholder="Address"
                                    name='address'
                                    className="input input-bordered w-full max-w-xs rounded-3xl" />
                                <label className="label">

                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">City</span>
                                </label>
                                <input
                                    ref={cityRef}
                                    type="text"
                                    placeholder="City"
                                    name='city'
                                    className="input input-bordered w-full max-w-xs rounded-3xl" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Phone</span>
                                </label>
                                <input
                                    ref={phoneRef}
                                    type="number"
                                    placeholder="Phone"
                                    name='phone'
                                    className="input input-bordered w-full max-w-xs rounded-3xl" />
                            </div>
                            <input disabled={agree2} onClick={() => setAgree(!agree)} type="checkbox" class="checkbox checkbox-primary mr-5 text-white" />
                            <input onClick={onSubmit} disabled={!agree} className='btn btn-primary w-3/5 rounded-3xl text-white mb-3 mt-5' value='Submit' type="submit" /><br />
                            <input disabled={agree} onClick={() => setAgree2(!agree2)} type="checkbox" class="checkbox checkbox-primary mr-5 text-white" />
                            <input onClick={updateProcess} disabled={!agree2} className='btn btn-primary w-3/5 rounded-3xl text-white' value='Update' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;