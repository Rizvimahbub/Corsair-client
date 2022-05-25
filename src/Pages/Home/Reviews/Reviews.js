import React from 'react';
import People1 from './people1.png';
import People2 from './people2.png';
import People3 from './people3.png';


const Reviews = () => {
    return (
        <div className='mb-20'>
            <h1 className='text-5xl font-semibold text-center my-20'>Customer Reviews</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20   md:p-5 sm:p-0'>
                <div className='shadow-xl p-10 md:p-5 rounded-2xl border'>
                    <div className="avatar flex items-center p-5 ">
                        <div className="w-24 rounded-full ring ring-primary">
                            <img src={People1} />
                        </div>
                        <div className=' pl-10 h-24 w-full'>
                            <h1 className='text-lg font-bold'>Winson Herry</h1>
                            <h3 className='font-medium'>" Good service and products. "</h3>
                        </div>
                    </div>
                </div>
                <div className='shadow-xl p-10 md:p-5 rounded-2xl border'>
                    <div className="avatar flex items-center p-5 gap-0 ">
                        <div className="w-24 rounded-full ring ring-primary">
                            <img src={People2} />
                        </div>
                        <div className='pl-10 h-24 w-full'>
                            <h1 className='text-lg font-bold'>Rachel Weisz</h1>
                            <h3 className='font-medium'>" Best product company I have ever seen. "</h3>
                        </div>
                    </div>
                </div>
                <div className='shadow-xl p-10 md:p-5 rounded-2xl border'>
                    <div className="avatar flex items-center p-5 gap-0 ">
                        <div className="w-24 rounded-full ring ring-primary">
                            <img src={People3} />
                        </div>
                        <div className='pl-10 h-24 w-full'>
                            <h1 className='text-lg font-bold'>Fiona Loudon</h1>
                            <h3 className='font-medium'>" Product longevity is very good. "</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Reviews;