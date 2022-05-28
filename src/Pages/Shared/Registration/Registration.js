import React from 'react';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
// import useToken from '../../../Hooks/useToken';
import Spinner from '../Spinner/Spinner';
import Footer from '../../Footer/Footer';


const Registration = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let signInError;
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        const name = data.name;
        const email = data.email;
        const phone = data.phone;
        const role = 'user';
        const userItems = { name, email, phone, role };
        
        fetch('http://localhost:5000/users', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(userItems)
        })
    };

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    //   const [token] = useToken(user || gUser)


    if (loading || gLoading || updating) {
        return <Spinner />;
    }

    if (user || gUser) {
        navigate('/');
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-500 mb-2'>{error?.message || gError?.message}</p>
    }
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center font-semibold text-2xl">Sign Up</h2>
                        <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        }
                                    })}
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered w-full max-w-xs rounded-3xl" />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
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
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        minLength: {
                                            value: 8,
                                            message: 'Password must be contain 8 characters'
                                        },
                                        pattern: {
                                            value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/,
                                            message: 'Password must be contain at least one uppercase,lowercase and number'
                                        }
                                    })}
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs rounded-3xl" />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Phone</span>
                                </label>
                                <input
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone number is required'
                                        },
                                    })}
                                    type="number"
                                    placeholder="Phone Number"
                                    className="input input-bordered w-full max-w-xs rounded-3xl" />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            {signInError}
                            <input className='btn btn-primary w-3/5 rounded-3xl text-white' value='SIGN UP' type="submit" />
                        </form>
                        <p className='text-center'><small>Already have an account ? <Link className='text-primary font-semibold' to='/login'>Please login</Link></small></p>
                        <div className="divider">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-primary text-white  rounded-3xl w-4/5 mx-auto"
                        >Sign In with Google</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Registration;