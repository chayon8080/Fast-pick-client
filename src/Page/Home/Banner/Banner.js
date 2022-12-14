import React from 'react';
import img1 from '../../../Asset/banner/1st ban.jpg'
import img2 from '../../../Asset/banner/2nd ban.jpg'
import img3 from '../../../Asset/banner/3rd.jpeg'
import logo from '../../../Asset/fast-delivery.svg'
const Banner = () => {
    return (
        <div className="carousel w-full rounded-md mb-20">
            <div id="slide1" className="carousel-item relative w-full">
                <img alt='' src={img1} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24  bottom-0">
                    <img className='rounded h-20 w-20' src={logo} alt="" /> <h1 className='text-bold font-bold text-white italic text-yellow-300'>Fast-pick Delivery service</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img alt='' src={img2} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24  bottom-0">
                    <img className='rounded h-20 w-20' src={logo} alt="" /> <h1 className='text-bold font-bold text-white italic'>Fast-pick Delivery service</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img alt='' src={img3} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24  bottom-0">
                    <img className='rounded h-20 w-20' src={logo} alt="" /> <h1 className='text-bold font-bold text-white italic'>Fast-pick Delivery service</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;