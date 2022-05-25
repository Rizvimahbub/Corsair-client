import React, { useEffect } from 'react';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Spinner from '../Spinner/Spinner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import useToken from '../../../Hooks/useToken';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    let loginError;
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    };



    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // const [token] = useToken(user || gUser)

    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user || gUser, from, navigate])

    if (loading || gLoading) {
        return <Spinner />;
    }





    if (error || gError) {
        loginError = <p className='text-red-500 mb-2'>{error?.message || gError?.message}</p>
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-semibold text-2xl">Login</h2>
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
                        {loginError}
                        <input className='btn btn-primary w-3/5 rounded-3xl text-white' value='Sign In' type="submit" />
                    </form>
                    <p className='text-center'><small>New to Corsair website ? <Link className='text-primary font-semibold' to='/registration'>Create new account</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-primary text-white  rounded-3xl w-4/5 mx-auto"
                    >Sign In with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;