
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';


const Service = () => {
    useTitle("Service");
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://y-iota-ruddy.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div data-theme="aqua" className='py-12'>
            <div className='text-center pb-5'>
                <h2 className='text-2xl font-bold '>Introduce Services</h2>
                <p>Please come the care and taken the services</p>
            </div>
            <div className='mx-12 grid gap-8 md:grid-cols-2 text-black lg:grid-cols-3 sm:grid-cols-1'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='pt-5 text-center'>
               <Link to={'/serviceItem'}> <button className="btn w-52 bg-violet-500 text-white font-bold">See All</button></Link>
            </div>
        </div>
    );
};

export default Service;

