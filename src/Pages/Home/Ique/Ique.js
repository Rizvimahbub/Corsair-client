import React from 'react';
import IquePhoto from './Ique.png';

const Ique = () => {
    return (
        <div className='grid lg:grid-cols-2 bg-[#151335]'>
            <div className='flex justify-center items-center'>
                <div className='w-2/4 mx-auto py-5'>
                    <img className='w-2/4' src={IquePhoto} />
                    <h1 className='text-white text-4xl font-bold'>UNITE YOUR SETUP</h1>
                    <p className='text-white text-xl w-11/12  mt-[-20px]'>Turn your entire setup into a cohesive, fully immersive ecosystem with intuitive control.</p>
                </div>
            </div>
            <div>
                <video autoplay="true" preload="true" loop="true" muted="true" playsInline='true' id="videoHero" poster="https://cwsmgmt.corsair.com/hybris/tlc/icue/images/hero_video_still_2x.jpg"><source src="https://cwsmgmt.corsair.com/pdp/k65-rgb-mini/assets/videos/scene-rainbow.mp4" /></video>
            </div>
        </div>
    );
};

export default Ique;