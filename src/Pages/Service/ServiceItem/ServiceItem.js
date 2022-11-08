import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServiceItem = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div data-theme="valentine" className='py-12'>
            <div className='text-center pb-5'>
                <h2 className='text-2xl font-bold '>Introduce Services</h2>
                <p>Please come the care and see the services</p>
            </div>
            <div className='grid md:grid-cols-3  mx-10 gap-8 lg:grid-cols-3 sm:grid-cols-1'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>


        </div>
    );
};

export default ServiceItem;
