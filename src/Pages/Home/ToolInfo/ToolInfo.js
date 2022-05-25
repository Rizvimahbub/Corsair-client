import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

import { useAuthState } from 'react-firebase-hooks/auth';
import './ToolInfo.css';
import { current } from 'daisyui/src/colors';

const ToolInfo = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const [inputValue, setInputValue] = useState();
    const [quantity, setQuantity] = useState();
    const [error, setError] = useState();
    const [user] = useAuthState(auth);
    const emailRef = useRef('');
    const nameRef = useRef('');
    const addressRef = useRef('');
    const orderRef = useRef('');
    const phoneRef = useRef('');
    useEffect(() => {
        fetch(`http://localhost:5000/tool/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id])

    const getValue = event => {
        setInputValue(event.target.value);
        if(inputValue < 10){
            setError('Order minimum 10 units')
        }else if(inputValue > tool.quantity){
            setError('Unavailable quantity')
        }else if(inputValue >= 10){
            setError('')
        }
    }

    

    


    const inputProcess = event => {
        event.preventDefault();
        const productName = tool.name;
        const name = event.target.name.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const order = orderRef.current.value;
        const phone = phoneRef.current.value;
        const chart = {productName, name, email, address, order, phone}
        
        
        fetch(`http://localhost:5000/order`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(chart)
        }, [])
            .then(res => res.json())
            .then(data => console.log(data))

        
        
    };

    


    return (
        <div className='flex justify-center align-center w-full mt-10'>
            <div className='form-container-1 w-2/4 border-2 rounded-3xl shadow-lg'>
                <img className='w-full rounded-t-3xl' src={tool.image}/>
                <h1 className='name pl-5 lg:text-5xl md:text-4xl sm:text-3xl font-bold'>{tool.name}</h1>
                <h3 className='pl-5 lg:text-2xl md:text-xl sm:text-xl font-semibold mb-2'>Price : ${tool.price} (per unit)</h3>
                <h3 className='pl-5 lg:text-2xl md:text-xl sm:text-xl font-semibold mb-2'>Available Quantity : {tool.quantity}</h3>
                <p className='des px-5 lg:text-xl md:text-lg sm:text-base'>{tool.description}</p>

                <form className='p-5 form mx-auto text-center' onSubmit={inputProcess}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input
                        ref={nameRef} 
                        name="name"
                        type="text" 
                        className="input input-bordered rounded-3xl"
                        // value={user.displayName} 
                        ></input>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input 
                        ref={emailRef}
                        name="email"
                        type="email" 
                        className="input input-bordered rounded-3xl"
                        // value={user.email} 
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Address</span>
                        </label>
                        <input
                            ref={addressRef}
                            name='address'
                            type="text"
                            placeholder="Address"
                            className="input input-bordered rounded-3xl" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Order Quantity ( <span className='text-red-500 '>Order at least 10 units</span> )</span>
                        </label>
                        <input
                            ref={orderRef}
                            onKeyUp={getValue}
                            type="number"
                            placeholder="Order"
                            className="input input-bordered rounded-3xl"
                            name='order'
                             />
                        <label className="label">
                            <p className='text-red-500'>{error}</p>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Contact Number</span>
                        </label>
                        <input
                            ref={phoneRef}
                            type="number"
                            placeholder="Contact Number"
                            className="input input-bordered rounded-3xl"
                            name='phone'
                             />
                        <label className="label">
                        </label>
                    </div>
                    <input onClick={inputProcess} disabled={inputValue < 10 || inputValue > tool.quantity} className='button btn text-white w-full bg-primary border-0 rounded-3xl md:w-3/4' value='Book' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default ToolInfo;