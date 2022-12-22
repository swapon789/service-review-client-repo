import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { FaStar,} from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { ratings, charge, title, picture, details, _id } = service;
    return (
        <div className="card w-96 bg-white shadow-xl">
            <PhotoProvider>
                <PhotoView src={picture}>
                <figure><img className='h-72' src={picture} alt="" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{service?.details?.length > 200 ?
                    service?.details?.slice(0, 100) + '...' : <p>{details}</p>
                }</p>
                <div className='flex'>
                    <p className='flex '>Rating:  <FaStar></FaStar>{ratings}</p>
                    <p>Charge: {charge}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/servicesDetails/${_id}`}> <button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;