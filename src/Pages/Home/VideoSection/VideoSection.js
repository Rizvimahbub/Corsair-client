import React from 'react';
import { Link } from 'react-router-dom';

const VideoSection = () => {
    return (
        <div className=''>
            <div>
                <h1>CORSAIR OPX OPTICAL-MECHANICAL KEYSWITCHES</h1>
                <Link to='https://www.youtube.com/watch?v=GnkDmHurMaM'><h3>WATCH VIDEO</h3></Link>
            </div>
            <div>
                <h1>WHAT MAKES SLIPSTREAM WIRELESS SO Good?</h1>
                <Link to='https://www.youtube.com/watch?v=IQo1eWHtiSY'><h3>WATCH VIDEO</h3></Link>
            </div>
            <div>
                <h1>CORSAIR CHAMPION SERIES PRODUCTS - PLAY HARDER</h1>
                <Link to='https://www.youtube.com/watch?v=B2NebDDjKMQ'><h3>WATCH VIDEO</h3></Link>
            </div>
        </div>
    );
};

export default VideoSection;