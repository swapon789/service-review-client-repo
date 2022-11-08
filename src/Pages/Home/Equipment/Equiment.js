import React from 'react';
import card1 from '../../../Images/equipment 1.webp'
import card2 from '../../../Images/equpment 2.webp'
import card3 from '../../../Images/equpment 3.webp'
import card4 from '../../../Images/equipment 4.webp'
import card5 from '../../../Images/equipment 5.webp'
import card6 from '../../../Images/equipment 6.webp'

const Equiment = () => {
    return (
        <div  className='text-center py-12 '>
            <h2 className='text-2xl font-bold pb-2'>Our Equipments</h2>
            <p className='pb-8'>Introduce treatment equipmebt. <br /> My dentrax treatment use heavy equipment</p>
            <div className='grid mb-12 mx-6 gap-8 md:grid-cols-3  lg:grid-cols-3 sm:grid-cols-1'>
                <div className="max-w-sm rounded-md bg-white shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <img src={card1} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2 mx-auto text-black">
                            <h2 className="text-3xl font-semibold tracking-wide">Operatory Cabinetry</h2>
                            <p className="dark:text-gray-100">Dental Operating Microscopes, or dental surgical microscopes.</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded-md shadow-md bg-white dark:bg-gray-900 dark:text-gray-100">
                    <img src={card2} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2 text-black">
                            <h2 className="text-3xl font-semibold tracking-wide">Operatory Lights</h2>
                            <p className="dark:text-gray-100">Dental Operating Microscopes, or dental surgical microscopes.</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded-md  bg-white shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <img src={card3} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2 text-black">
                            <h2 className="text-3xl font-semibold tracking-wide">Dental Patient Chairs</h2>
                            <p className="dark:text-gray-100">Dental Operating Microscopes, or dental surgical microscopes.</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded-md bg-white shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <img src={card4} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2 text-black">
                            <h2 className="text-3xl font-semibold tracking-wide">X-ray Imaging </h2>
                            <p className="dark:text-gray-100">Dental Operating Microscopes, or dental surgical microscopes.</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded-md bg-white shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <img src={card5} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2 text-black">
                            <h2 className="text-3xl font-semibold tracking-wide">Handpieces</h2>
                            <p className="dark:text-gray-100">Dental Operating Microscopes, or dental surgical microscopes.</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded-md bg-white shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <img src={card6} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2 text-black">
                            <h2 className="text-3xl font-semibold tracking-wide">Delivery Systems</h2>
                            <p className="dark:text-gray-100">Dental Operating Microscopes, or dental surgical microscopes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Equiment;