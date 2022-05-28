import React from 'react';
import Img from './NotFound.png';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center'>Oops ! Sorry.....</h1>
            <img className='w-3/6 mx-auto' src={Img}></img>
        </div>
    );
};

export default NotFound;