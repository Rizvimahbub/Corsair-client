import React, { useRef, useState } from 'react';
import './AddReview.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const [error, setError] = useState('');
    const commentRef = useRef('');
    const ratingRef = useRef('');

    const { data: reviews, isLoading, refetch } = useQuery(('reviews'), () => fetch('https://tranquil-crag-79449.herokuapp.com/reviews').then(res => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    }



    const onSubmit = event => {
        event.preventDefault();
        const comment = commentRef.current.value;
        const rating = ratingRef.current.value;
        const name = user.displayName;
        const review = { name, comment, rating }

        if (rating < 0 || rating > 5) {
            return setError('Please a rating between 1 and 5')
        }

        fetch('https://tranquil-crag-79449.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        refetch();
    }
    return (
        <div className='p-5'>
            <div className="cardMain w-96 bg-base-100 shadow-xl border-2 mb-20 mx-auto rounded-2xl">
                <div className="card-body">
                    <h2 className="text-center font-semibold text-2xl">Give a review</h2>
                    <form className='text-center' onSubmit={onSubmit}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Comment</span>
                            </label>
                            <input
                                ref={commentRef}
                                type="text"
                                placeholder="Comment"
                                className="input input-bordered w-full max-w-xs rounded-3xl" />
                            <label className="label">
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Rating</span>
                            </label>
                            <input
                                ref={ratingRef}
                                type="number"
                                placeholder="Rating"
                                className="input input-bordered w-full max-w-xs rounded-3xl" />
                            <label className="label">
                            </label>
                        </div>
                        <p className='text-red-500 font-bold mb-2'>{error}</p>
                        <input className='btn btn-primary w-3/5 rounded-3xl text-white' value='Submit' type="submit" />
                    </form>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    reviews.map(review =>

                        <div className='shadow-xl p-10 md:p-5 rounded-2xl border'>
                            <h1 className='text-2xl font-bold text-center'>{review.name}</h1>
                                <h3 className='text-xl text-center mb-3'>" {review.comment} "</h3>
                            {review?.rating >= 5 ? <React.Fragment><h5 className='text-center text-xl font-bold'>Rating : <FontAwesomeIcon   className='text-[#F7BA00]' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='text-[#F7BA00]' icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='text-[#F7BA00]' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='text-[#F7BA00]' icon={faStar}></FontAwesomeIcon></h5></React.Fragment> : ''}

                            {review?.rating == 4 ? <React.Fragment><h5 className='text-center text-xl font-bold'>Rating : <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='text-[#F7BA00]' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='text-[#F7BA00]' icon={faStar}></FontAwesomeIcon></h5></React.Fragment> : ''}

                            {review?.rating == 3 ? <React.Fragment><h5 className='text-center text-xl font-bold'>Rating : <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='text-[#F7BA00]' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='text-[#F7BA00]' icon={faStar}></FontAwesomeIcon></h5></React.Fragment> : ''}

                            {review?.rating == 2 ? <React.Fragment><h5 className='text-center text-xl font-bold'>Rating : <FontAwesomeIcon  className='text-[#F7BA00]' icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar}></FontAwesomeIcon></h5></React.Fragment> : ''}
                            {review?.rating == 1 ? <React.Fragment><h5 className='text-center text-xl font-bold'>Rating : <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar}></FontAwesomeIcon></h5>
                            </React.Fragment> : ''}


                        </div>)
                }
            </div>
        </div>

    );
};

export default AddReview;