import React from 'react';
import { Link } from 'react-router-dom';
import { FaStarHalfAlt } from "react-icons/fa";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Td, Tr } from 'react-super-responsive-table';
import useTitle from '../../useTitle';


const ReviewRows = ({ review, handleDelete, hadleStatusUpdate }) => {
    useTitle("Review");
    const { _id, Patient, photo, ratings, description, email,} = review;

    return (
        <Tr>
            <Td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{Patient}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </Td>
            <Td>
                {description}
            </Td>
            <Td>
                <span className="badge badge-ghost badge-sm"> <FaStarHalfAlt></FaStarHalfAlt> {ratings}</span>
            </Td>
            <Td>
                <Link to={`/update/${_id}`}>
                    <button className='btn btn-sm'>Update</button>
                </Link>
            </Td>
            <Td>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm">Delete</button>
            </Td>

        </Tr>
    );
};

export default ReviewRows;