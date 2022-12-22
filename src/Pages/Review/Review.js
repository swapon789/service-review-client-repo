import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Table, Tbody, Th, Thead, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import ReviewRows from '../ReviewRows/ReviewRows';


const Review = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    console.log(user);

    useEffect(() => {
        if (!user?.email) {
            return;
        }
        fetch(`https://y-iota-ruddy.vercel.app/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("dentrexatoken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data)
            })
    }, [user?.email]);

    const handleDelete = id => {
        const proceed = window.confirm("Are you want to sure cancell this order")
        if (proceed) {
            fetch(`https://y-iota-ruddy.vercel.app/review/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfull');
                        const reamaining = reviews.filter(rev => rev._id !== id)
                        setReviews(reamaining);
                    }
                })
        }
    }

    return (
        <div data-theme="synthwave">
            <h2 className='text-3xl text-center font-bold py-3'>My Review</h2>
            <div className="overflow-x-auto w-full py-10">
                <Table data-theme="valentine" className="table w-full text-black">
                    <Thead>
                        <Tr>
                            <Th>Patient</Th>
                            <Th>Discribe</Th>
                            <Th>Rating</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                       {
                        reviews.length > 0 && 
                        reviews.map(review => <ReviewRows
                            key={review?._id}
                            review={review}
                            handleDelete={handleDelete}
                            // hadleStatusUpdate={hadleStatusUpdate}
                            ></ReviewRows>)
                       }
                    </Tbody>
                </Table>
            </div>
        </div>
    );
};

export default Review;
