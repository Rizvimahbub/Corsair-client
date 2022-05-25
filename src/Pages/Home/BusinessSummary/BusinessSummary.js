import { faArrowDown, faArrowTrendUp, faArrowUp, faChartBar, faChartSimple, faCircleDollarToSlot, faSackDollar, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BusinessSummary = () => {
    return (
        <div className=' py-10 px-2 mt-10'>
            <h1 className='text-center text-5xl font-bold'>Business Summary</h1>
            <div className=' mt-20 mx-auto w-11/12  grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                <div class="pb-3 rounded-2xl w-full h-4/5 bg-base-100 shadow-xl border">
                    <div class="card-body">
                        <div className='mb-2 grid grid-cols-2 justify-between'>
                            <div className='shadow-xl bg-[#CC195D] mt-[-55px] text-2xl text-white w-24 h-24 flex justify-center items-center rounded-lg '>
                                <FontAwesomeIcon icon={faArrowTrendUp} />
                            </div>
                            <div className='mt-[-25px]'>
                                <p className='text-right text-lg mb-2 font-light text-[#A7A19E]'>Traffic</p>
                                <p className='text-right text-4xl'>3,50,897</p>
                            </div>
                        </div>
                        <div class="border-t"></div>
                        <div className='flex mt-2  mb-3'>
                            <p className='text-center'><span className='text-green-600'><FontAwesomeIcon icon={faArrowUp} /> 3.48</span> </p>
                            <p className='font-light'>Since last month</p>
                        </div>
                    </div>
                </div>
                <div class="pb-3 rounded-2xl w-full  h-4/5 bg-base-100 shadow-xl border">
                    <div class="card-body">
                        <div className='mb-2 grid grid-cols-2 justify-between'>
                            <div className='shadow-xl  bg-[#FA8900] mt-[-55px] text-2xl text-white w-24 h-24 flex justify-center items-center rounded-lg '>
                                <FontAwesomeIcon icon={faUsers} />
                            </div>
                            <div className='mt-[-25px]'>
                                <p className='text-right text-lg mb-2 font-light text-[#A7A19E]'>New Users</p>
                                <p className='text-right text-4xl'>2,356</p>
                            </div>
                        </div>
                        <div class="border-t"></div>
                        <div className='flex mt-2  mb-3'>
                            <p className='text-center'><span className='text-red-600'><FontAwesomeIcon icon={faArrowDown} /> 3.48</span> </p>
                            <p className='font-light'>Since last week</p>
                        </div>
                    </div>
                </div>
                <div class="pb-3 rounded-2xl h-4/5 w-full bg-base-100 shadow-xl border">
                    <div class="card-body">
                        <div className='mb-2 grid grid-cols-2 justify-between'>
                            <div className='shadow-xl  bg-[#8722A7] mt-[-55px] text-3xl text-white w-24 h-24 flex justify-center items-center rounded-lg '>
                                <FontAwesomeIcon icon={faSackDollar} />
                            </div>
                            <div className='mt-[-25px]'>
                                <p className='text-right text-lg mb-2 font-light text-[#A7A19E]'>Sales</p>
                                <p className='text-right text-4xl'>924</p>
                            </div>
                        </div>
                        <div class="border-t"></div>
                        <div className='flex mt-2 mb-3'>
                            <p className='text-center'><span className='text-[#FA8900]'><FontAwesomeIcon icon={faArrowDown} /> 1.10</span> </p>
                            <p className='font-light'>Since yesterday</p>
                        </div>
                    </div>
                </div>
                <div class="pb-3 rounded-2xl h-4/5 w-full bg-base-100 shadow-xl border">
                    <div class="card-body">
                        <div className='mb-2 grid grid-cols-2 justify-between'>
                            <div className='shadow-xl  mt-[-55px] bg-[#1B7DD9] text-2xl text-white w-24 h-24 flex justify-center items-center rounded-lg '>
                                <FontAwesomeIcon icon={faChartSimple} />
                            </div>
                            <div className='mt-[-25px]'>
                                <p className='text-right text-lg mb-2 font-light text-[#A7A19E]'>Performance</p>
                                <p className='text-right text-4xl'>49.65%</p>
                            </div>
                        </div>
                        <div class="border-t"></div>
                        <div className='flex  mt-2  mb-3'>
                            <p className='text-center'><span className=' text-green-600'><FontAwesomeIcon icon={faArrowUp} /> 12</span> </p>
                            <p className='font-light text-left'>Since last month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BusinessSummary;