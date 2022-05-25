import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ part }) => {
    const { _id, name, image, description } = part;
    const navigate = useNavigate();

    const navigateProcess = id => {
        navigate(`/tool/${id}`)
    }
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl border-2">
            <figure><img className='w-96 h-96' src={image} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="text-3xl font-bold">{name}</h2>
                <p className='font-semibold'>{description}</p>
                <div class="card-actions justify-start">
                    <button onClick={() => navigateProcess(_id)} class="btn btn-primary text-white rounded-3xl w-40">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;