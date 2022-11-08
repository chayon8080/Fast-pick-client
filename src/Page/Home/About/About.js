import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../Asset/Images/model.png'
const About = () => {
    return (
        <div className="hero my-20 shadow-md p-5">
            <div className="hero-content flex-col lg:flex-row flex-row-reverse">
                <div className='relative w-1/2'>
                    <img src={img} alt='' className="h-80 w-80 rounded-lg" />
                </div>
                <div className='w-1/2'>
                    <h1 className="my-5 text-5xl font-bold text-red-900 italic">About Us</h1>
                    <p className="py-6">Delivery Services are billable services that are directly associated with a product in a sales order or a return order, for example, the delivery of a high-definition television. Stand-alone delivery service lines can also be created, and if required, associated with a product at a later time. </p>

                    <Link to='/'><button className="btn btn-success">Get More Info</button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;