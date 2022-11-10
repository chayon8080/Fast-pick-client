import React, { useEffect, useState } from 'react';
import Allservice from './Allservice';



const ServiceHolder = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className=' mb-5'>
                <p className="text-2xl font-bold text-indigo-600 italic">Services</p>
                <h1 className='text-5xl font-semibold'>Service Catagories</h1>
                <p>The all available services are here</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 '>
                {
                    services.map(service => <Allservice
                        key={service._id}
                        service={service}
                    ></Allservice>)
                }
            </div>
        </div>
    );
};

export default ServiceHolder;