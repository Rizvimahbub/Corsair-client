import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';
import './Tools.css';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tool')
        .then(res=>res.json())
        .then(data=>setTools(data))
    },[])
    return (
        <div className='p-10'>
            <h1 className='text-5xl font-semibold text-center my-32'>Parts</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2  gap-20'>
                {
                    tools.map((part) => <Tool
                        key={part._id}
                        part={part}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;