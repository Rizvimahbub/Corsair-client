import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Spinner from '../Spinner/Spinner';

const PasswordReset = () => {

    let resetError;

    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [sendPasswordResetEmail, sending, pResetError] = useSendPasswordResetEmail(
        auth
      );




    const onSubmit = data => {
        sendPasswordResetEmail(data.email);
        toast.info('Please check your email sir !');
        navigate('/login');
    };


    if (pResetError) {
        resetError = <p className='text-red-500 mb-2 font-bold'>{pResetError?.message.slice(-21,-2)}</p>
    }

    if(sending){
        return <Spinner></Spinner>
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-semibold text-2xl">Give your email</h2>
                    <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs rounded-3xl" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {resetError}
                            </label>
                        </div>
                        <input className='btn btn-primary w-3/5 rounded-3xl text-white' value='Submit' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PasswordReset;