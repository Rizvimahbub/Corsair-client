import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import './ToolInfo.css';

const ToolInfo = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/tool/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id])


    const onSubmit = data => {
        console.log(data);

    };
    const { register, formState: { errors }, handleSubmit } = useForm();
    return (
        <div className='flex justify-center align-center w-full'>
            <div className='form-container w-2/4 border-2 rounded-3xl shadow-lg'>
                <img className='w-full rounded-t-3xl' src={tool.image}/>
                <h1 className='name pl-5 lg:text-5xl md:text-4xl sm:text-3xl'>{tool.name}</h1>
                <p className='des pl-5 lg:text-xl md:text-lg sm:text-base'>{tool.description}</p>
                <form className='p-5 form justify-center' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
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
                            className="input input-bordered" />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control">
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
                            className="input input-bordered" />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    <input className='button btn text-white w-full' value='Login' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default ToolInfo;