import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const serviceLimit = services.slice(0, 3)
    return (
        <div>
            <div className=' mb-5'>
                <p className="text-2xl font-bold text-indigo-600 italic">Services</p>
                <h1 className='text-5xl font-semibold'>Service Catagories</h1>
                <p>The all available services are here</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 '>
                {
                    serviceLimit.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className='mt-5 text-center'>
                <Link to='/services'>
                    <button className='btn btn-outline btn-error rounded'>
                        See all services
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Services;