import React, { useContext } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import AddReview from '../../AddReview/AddReview';

const ServicesDetails = () => {
    const services = useLoaderData();
    const { user } = useContext(AuthContext);
    const { picture, title, charge, details, ratings, email, phone } = services
    return (
        <div data-theme="aqua" className='py-5'>
                <h2 className='text-2xl font-bold text-white text-center py-10'>Service Details</h2>
            <div className="flex  text-white bg-blue-500 mx-auto flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div>
                    <PhotoProvider>
                        <PhotoView src={picture}>
                            <img src={picture} alt="" className="object-cover rounded-xl w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                        </PhotoView>
                    </PhotoProvider>
                    <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                    <p className="text-sm dark:text-gray-400">{details}</p>
                </div>
                <h3 className='text-1xl font-bold'>Contact:</h3>
                <div className='grid grid-cols-2 gap-8 '>
                    <div>
                        <p>Email: {email}</p>
                        <p>Phone: {phone}</p>
                    </div>
                    <div>
                        <p>Charge: {charge}</p>
                        <p>Ratings: {ratings}</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <Link to='/serviceItem'><button type="button" className="px-3 py-3  text-center text-white bg-green-500  mx-auto font-semibold rounded-lg dark:bg-gray-100 dark:text-gray-800">Back to Previous page</button></Link>
                </div>
            </div>
            {/* // //////////Addd Review Section///////////// */}
            <div className='p-6 my-6 rounded-lg bg-gray-800 text-lime-50'>
                {
                    user?.uid?
                    <AddReview></AddReview>
                    :
                    <div className='textcenter font-bold pb-4'>
                        <p className='text-1xl mt-5 dark:text-gray-400'>If you dont register.Please at first register and Login</p>
                        <p className='text-xl font-bold'>Please Login</p>
                        <Link to='/login' className='text-red-400 underline'>Login here</Link>                       
                    </div>
                }
         
            </div>
        </div>


    );
};

export default ServicesDetails;

