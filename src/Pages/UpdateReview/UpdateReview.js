import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const UpdateReview = () => {
    const { user } = useContext(AuthContext);
    const userReview = useLoaderData();
    const [reviews, setReview] = useState(userReview);

    const handlerStateUpdate = () => {
        fetch(`http://localhost:5000/review/${userReview?._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    toast.success('Updated Seccess', { autoClose: "1000" })
                }
            })
    }


    const handlerInputChange = e => {
        e.preventDefault();
        const value = e.target.value;
        const field = e.target.name;
        const newUser = { ...reviews };
        newUser[field] = value;
        setReview(newUser);


    }

    return (
        <section data-theme="aqua" className="p-6 my-6 rounded-lg  text-white">
            <form onSubmit={handlerStateUpdate} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium text-2xl">Add review Inormation</p>
                        <p className="text-sm">The ADD Information Service provides information about the assessment and diagnosis of neurological disorders. Attention Deficit Hyposensitivity Disorder, and inattentive type, are usually associated with significant learning needs. !</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label for="firstname" className="text-sm">First Name</label>
                            <input onChange={handlerInputChange} name="firstName" type="text" className="w-full px-4 py-3 rounded-md text-white" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="Lastname" className="text-sm">Last Name</label>
                            <input onChange={handlerInputChange} name="lastName" type="text" className="w-full px-4 py-3 rounded-md text-white" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="website" className="text-sm">Photo Url</label>
                            <input onChange={handlerInputChange} name="photoUrl" type="text" placeholder="https://" className="w-full px-3 py-2 border rounded-md text-white" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="email" className="text-sm">Email</label>
                            <input name="email" defaultValue={user?.email} type="email" className="w-full px-3 py-2 border rounded-md text-white" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="rating" className="text-sm">Rating</label>
                            <input onChange={handlerInputChange} name="ratings" type="text" placeholder="0000" className="w-full px-3 py-2 border rounded-md text-white" />
                        </div>
                        <div className="col-span-full">
                            <label for="bio" className="text-sm">Description</label>
                            <textarea onChange={handlerInputChange} name="description" placeholder="Discribe the Service" className="w-full px-3 py-2 border rounded-md text-white" required></textarea>
                        </div>
                        <div className="col-span-full">
                            <div className="flex items-center space-x-2">
                                <button type="submit" className="px-4 py-2 border rounded-md dark:border-gray-100">Add Review</button>
                            </div>
                        </div>
                    </div>
                </fieldset>

            </form>
        </section>
    );
};

export default UpdateReview;