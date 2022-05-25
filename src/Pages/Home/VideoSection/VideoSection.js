import React from 'react';
import { Link } from 'react-router-dom';
import Switch from './switch.png';
import Headphone from './bg-2.png';
import Sports from './bg-1.png';
import './VideoSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faArrowRight, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

const VideoSection = () => {
    return (
        <div className='bg-[#333333] p-2 grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-2'>
            <div className='div-1 h-96'>
                <h1 className='text-white font-bold mx-auto mt-36 w-4/5'>CORSAIR OPX OPTICAL-MECHANICAL KEYSWITCHES</h1>
                <a href='https://www.youtube.com/watch?v=GnkDmHurMaM'><h3 className='text-primary font-bold text-xl w-4/5 mx-auto'>WATCH VIDEO <FontAwesomeIcon className='ml-3' icon={faAngleRight} /></h3></a>
            </div>
            <div className='div-2 h-96'>
                <h1 className='text-white font-bold mx-auto mt-36 w-4/5'>WHAT MAKES SLIPSTREAM WIRELESS SO GOOD?</h1>
                <a href='https://www.youtube.com/watch?v=IQo1eWHtiSY'><h3 className='text-primary font-bold text-xl w-4/5 mx-auto'>WATCH VIDEO <FontAwesomeIcon className='ml-3' icon={faAngleRight} /></h3></a>
            </div>
            <div className='div-3 h-96'>
                <h1 className='text-white font-bold mx-auto mt-36 w-4/5'>CORSAIR CHAMPION SERIES PRODUCTS - PLAY HARDER</h1>
                <a href='https://www.youtube.com/watch?v=B2NebDDjKMQ'><h3 className='text-primary font-bold text-xl w-4/5 mx-auto'>WATCH VIDEO <FontAwesomeIcon className='ml-3' icon={faAngleRight} /></h3></a>
            </div>
        </div>
    );
};

export default VideoSection;