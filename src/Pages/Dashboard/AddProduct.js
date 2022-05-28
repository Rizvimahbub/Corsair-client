import React, { useRef } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner/Spinner';

const AddProduct = () => {
    const imgKey = 'fb7a06a76e0f5f9508fc222d330ff7c2';
    const imageRef = useRef('');
    const nameRef = useRef('');
    const priceRef = useRef('');
    const quantityRef = useRef('');
    const descRef = useRef('');

    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://tranquil-crag-79449.herokuapp.com/tool', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    }


    const inputProcess = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const image = imageRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const description = descRef.current.value;
        const formData = new FormData();
        const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;
        formData.append('image', image);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url;
                    const chart = {
                        name: name,
                        image: image,
                        price: price,
                        quantity: quantity,
                        description: description,
                        
                    }
                    fetch(`https://tranquil-crag-79449.herokuapp.com/tool`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(chart)
                    }, [])
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            refetch()
                        })
                }
            })

    };
    return (
        <div>
            <div className='p-5 grid sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3  gap-20'>
                {
                    products.map(product =>
                        <div class="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={product.image} /></figure>
                            <div class="card-body">
                                <h2 class="card-title">{product.name}</h2>
                                <h2 class="font-bold">Price : {product.price}</h2>
                                <h2 class="font-bold">Quantity : {product.quantity}</h2>
                                <p class="font-semibold">{product.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='mt-10 mx-auto bg-base-100 shadow-xl rounded-3xl w-96 border p-3'>
                <h1 className='text-center font-bold text-3xl'>Add Product</h1>
                <form className='text-center'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Image</span>
                        </label>
                        <input
                            ref={imageRef}
                            type="photoURL"
                            placeholder="Image"
                            name='image'
                            className="input input-bordered w-full max-w-xs rounded-3xl" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input
                            ref={nameRef}
                            type="text"
                            placeholder="Name"
                            name='name'
                            className="input input-bordered w-full max-w-xs rounded-3xl" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input
                            ref={priceRef}
                            type="number"
                            placeholder="Price"
                            name='price'
                            className="input input-bordered w-full max-w-xs rounded-3xl" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Quantity</span>
                        </label>
                        <input
                            ref={quantityRef}
                            type="number"
                            placeholder="Quantity"
                            name='quantityprice'
                            className="input input-bordered w-full max-w-xs rounded-3xl" />
                    </div>
                    <label className="label">
                            <span className="label-text font-semibold">Description</span>
                        </label>
                    <textarea
                    ref={descRef}
                    placeholder="Descrition"
                    name='description'
                    className='bg-white border-2 rounded-3xl p-2 my-2 w-full'
                    ></textarea>
                    <input onClick={inputProcess}  className='btn btn-primary w-3/5 rounded-3xl text-white' value='Submit' type="submit" />
                </form>
            </div>
        </div>

    );
};

export default AddProduct;