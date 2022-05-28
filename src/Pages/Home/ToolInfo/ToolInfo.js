import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import './ToolInfo.css';


const ToolInfo = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const [inputValue, setInputValue] = useState();
    const [error, setError] = useState();
    const [user] = useAuthState(auth);
    const emailRef = useRef('');
    const nameRef = useRef('');
    const addressRef = useRef('');
    const orderRef = useRef('');
    const phoneRef = useRef('');
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://tranquil-crag-79449.herokuapp.com/tool/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id])

    const getValue = event => {
        setInputValue(event.target.value);
        if (inputValue < 10) {
            setError('Order minimum 10 units')
        } else if (inputValue > tool.quantity) {
            setError('Out of stock')
        } else if (inputValue >= 10) {
            setError('')
        }
    }

    const imgKey = 'fb7a06a76e0f5f9508fc222d330ff7c2';



    const inputProcess = event => {
        event.preventDefault();
        const productName = tool.name;
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const order = orderRef.current.value;
        const totalPrice = parseInt(tool.price) * parseInt(order)
        const oldQuantity = parseInt(tool.quantity);
        const newQuantity = oldQuantity - parseInt(order);
        tool.quantity = newQuantity;
        const phone = phoneRef.current.value;
        const img = tool.image;
        const formData = new FormData();
        const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;
        formData.append('image', img);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const chart = {
                        productName: productName,
                        name: name,
                        email: email,
                        address: address,
                        order: order,
                        phone: phone,
                        img: img,
                        totalPrice : totalPrice
                    }
                    fetch(`https://tranquil-crag-79449.herokuapp.com/order`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(chart)
                    }, [])
                        .then(res => res.json())
                        .then(data => console.log(data))
                }
                navigate('/')
            })

    };




    return (
        <div>
            <div>
                <video className='video' autoplay="true" preload="true" loop="true" muted="true" playsInline='true' id="videoHero" poster="https://cwsmgmt.corsair.com/hybris/tlc/icue/images/hero_video_still_2x.jpg"><source src="https://cwsmgmt.corsair.com/pdp/k65-rgb-mini/assets/videos/scene-movie-mode.mp4" /></video>
            </div>
            <div className='flex justify-center align-center w-full mt-10'>
                <div className='form-container-1 w-2/4 border-2 rounded-3xl shadow-lg'>
                    <img className='w-full rounded-t-3xl' src={tool.image} />
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
                                value={user.displayName}
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
                                value={user.email}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Address</span>
                            </label>
                            <input
                                required
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
                            required
                                ref={orderRef}
                                onChange={getValue}
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
                            required
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
        </div>

    );
};

export default ToolInfo;