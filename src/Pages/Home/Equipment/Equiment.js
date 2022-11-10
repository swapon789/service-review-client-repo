import React from 'react';
import card1 from '../../../Images/equipment 1.webp'
import card2 from '../../../Images/equpment 2.webp'
import card3 from '../../../Images/equpment 3.webp'
import card4 from '../../../Images/equipment 4.webp'
import card5 from '../../../Images/equipment 5.webp'
import card6 from '../../../Images/equipment 6.webp'
import useTitle from '../../../useTitle';

const Equiment = () => {
    useTitle("Gallery")
    return (
        <div data-theme="valentine" className='text-center py-12  my-16'>
            <h2 className='text-2xl font-bold pb-2'>Equipments Gallery</h2>
            <p className='pb-8'>Introduce treatment equipmebt. <br /> My dentrax treatment care has heavy equipment</p>
            <div className='grid mb-12 mx-10 gap-8 md:grid-cols-2  lg:grid-cols-3 sm:grid-cols-1'>
                <div className="max-w-sm rounded-md bg-white shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <img src={card1} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                </div>
                <div className="max-w-sm rounded-md shadow-md bg-white dark:bg-gray-900 dark:text-gray-100">
                    <img src={card2} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                </div>
                <div className="max-w-sm rounded-md  bg-white shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <img src={card3} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                </div>
                <div className="max-w-sm rounded-md bg-white shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <img src={card4} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                </div>
                <div className="max-w-sm rounded-md bg-white shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <img src={card5} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                </div>
                <div className="max-w-sm rounded-md bg-white shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <img src={card6} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                </div>
            </div>
        </div>
    );
};

export default Equiment;