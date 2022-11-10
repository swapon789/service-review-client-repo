import React from 'react';
import dictor from '../../../Images/about doctors.jpg'
import useTitle from '../../../useTitle';

const About = () => {
    useTitle('About')
    return (
        <div data-theme="valentine" className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className=' w-1/2'>
                    <img src={dictor} alt='' className=" w-3/4 h-full rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className='text-2xl font-bold text-orange-600'>About</p>
                    <h1 className="my-5 text-5xl font-bold text-black">
                        Known as a <br />
                        exprienced <br />
                         and qualified Doctor</h1>
                    <p className="py-6">A dentist, also known as a dental surgeon, is a health care professional who specializes in dentistry (the diagnosis, prevention, management, and treatment of diseases and conditions of the oral cavity and other aspects of the craniofacial complex including the temporomandibular joint).</p>
                    <p className='py-4'>
                    In China as well as France, the first people to perform dentistry were barbers. They have been categorized into 2 distinct groups: guild of barbers and lay barbers.
                    </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;