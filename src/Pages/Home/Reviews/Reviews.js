import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';



const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-crag-79449.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data.slice(0, 3)))
    }, [])


    return (
        <div className='mb-20 '>
            <h1 className='text-5xl font-semibold text-center my-20'>Customer Reviews</h1>
            <div className='bg-primary lg:py-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20   md:p-5 sm:p-0'>
                {
                    reviews.map(review =>
                        <div className='bg-white shadow-xl p-10 md:p-5 rounded-2xl border'>
                            <div className='pb-5 w-full'>
                                <h1 className='text-2xl font-bold text-center'>{review.name}</h1>
                                <h3 className='text-xl text-center mb-3'>" {review.comment} "</h3>
                                {review?.rating == 5 ?
                                    <React.Fragment><h3 className='text-xl text-center font-bold'>
                                        Rating :
                                        <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar} />
                                        <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar} />
                                        <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar} />
                                        <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar} />
                                        <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar} />
                                    </h3>
                                    </React.Fragment>
                                    :
                                    ''
                                }
                                {review?.rating == 4 ?
                                    <React.Fragment><h3 className='text-xl text-center font-bold'>
                                        Rating :
                                        <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar} />
                                        <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar} />
                                        <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar} />
                                        <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar} />
                                    </h3>
                                    </React.Fragment>
                                    :
                                    ''
                                }
                                {review?.rating == 3 ?
                                    <React.Fragment><h3 className='text-xl text-center font-bold'>
                                        Rating :
                                        <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar} />
                                        <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar} />
                                        <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar} />
                                    </h3>
                                    </React.Fragment>
                                    :
                                    ''
                                }
                                {review?.rating == 2 ?
                                    <React.Fragment><h3 className='text-xl text-center font-bold'>
                                        Rating :
                                        <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar} />
                                        <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar} />
                                    </h3>
                                    </React.Fragment>
                                    :
                                    ''
                                }
                                {review?.rating == 1 ?
                                    <React.Fragment><h3 className='text-xl text-center font-bold'>
                                        Rating :
                                        <FontAwesomeIcon className='text-[#F7BA00]' icon={faStar} />
                                    </h3>
                                    </React.Fragment>
                                    :
                                    ''
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default Reviews;