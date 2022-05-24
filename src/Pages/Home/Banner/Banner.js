import React from 'react';
import { render } from 'react-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './styles.css';


const content = [
    {
        title: 'RGB GAMING KEYBOARD',
        image: 'https://www.cherrymx.de/_Resources/Persistent/6/a/b/e/6abe18bf67cb888fc86157f71e234955970132b6/corsair-k100-rgb-mechanical-gaming-keyboard-teaser.jpg',
        user: 'Luan Gjokaj',
        userProfile: 'https://i.imgur.com/JSW6mEk.png'
    },
    {
        title: 'RGB GAMING MOUSE',
        image: 'https://www.corsair.com/wp-content/uploads/2022/01/Press_02-13-20_01.png',
        user: 'Erich Behrens',
        userProfile: 'https://i.imgur.com/0Clfnu7.png'
    },
    {
        title: 'RGB RAM',
        image: 'https://thinkcomputers.org/wp-content/uploads/2019/01/DSC07418.jpg',
        user: 'Bruno Vizovskyy',
        userProfile: 'https://i.imgur.com/4KeKvtH.png'
    },
    {
        title: 'RGB HEADPOHONE',
        image: 'https://gameranx.com/wp-content/uploads/2017/11/Corsair-VOID-PRO-Wireless-Headset-RGB.jpg',
        user: 'Bruno Vizovskyy',
        userProfile: 'https://i.imgur.com/4KeKvtH.png'
    },
    {
        title: 'RGB COOLING FAN',
        image: 'https://cdn.wccftech.com/wp-content/uploads/2018/11/Corsasir-H115i-RGB-Platinum.jpg',
        user: 'Bruno Vizovskyy',
        userProfile: 'https://i.imgur.com/4KeKvtH.png'
    },
];

const Banner = () => {
    return (
        <div className='order-2'>
            <Slider className="slider-wrapper">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1 className='text-9xl'>{item.title}</h1>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

render(<Banner />, document.getElementById('root'));

export default Banner;