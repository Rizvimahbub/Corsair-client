import React from 'react';

const Spinner = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <span className="flex">
                <span className="animate-ping absolute inline-flex h-20 w-20 rounded-full bg-sky-400 opacity-75"></span>
            </span>
        </div>
    );
};

export default Spinner;