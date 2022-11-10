import React from 'react';
import useTitle from '../../useTitle';


const AddService = () => {
    useTitle('Serviceadd');


    const handleAddService = event =>{
        event.preventDefault()
        const form = event.target;
        const photo = form.photoUrl.value;
        const name = form.title.value;
        const charge = form.charge.value;
        const rating = form.ratings.value;
        const details = form.description.value;
        console.log(photo, name, charge, rating,details);

        const addService = {
            picture:photo,
            title:name,
            details:details,
            ratings:rating,
            charge:charge
        }

        fetch('https://y-iota-ruddy.vercel.app/services', {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(addService)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <section data-theme="aqua" className="p-6 my-6 rounded-lg  text-white">
        <form onSubmit={handleAddService} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                <div className="space-y-2 col-span-full lg:col-span-1">
                    <p className="font-medium text-2xl">Add Service Inormation</p>
                    <p className="text-sm">The ADD Information Service provides information about the assessment and diagnosis of neurological disorders. Attention Deficit Hyposensitivity Disorder, and inattentive type, are usually associated with significant learning needs. !</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-3">
                        <label for="website" className="text-sm">Photo Url</label>
                        <input name="photoUrl" type="text" placeholder="https://" className="w-full px-3 py-2 border rounded-md text-white" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label for="title" className="text-sm">Title</label>
                        <input name="title" type="text"  className="w-full px-3 py-2 border rounded-md text-white" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label for="website" className="text-sm">Charge</label>
                        <input name="charge" type="text" className="w-full px-3 py-2 border rounded-md text-white" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label for="ratings" className="text-sm">Rating</label>
                        <input name="ratings" type="text" placeholder="0000" className="w-full px-3 py-2 border rounded-md text-white" />
                    </div>
                    <div className="col-span-full">
                        <label for="bio" className="text-sm">Description</label>
                        <textarea name="description" placeholder="Discribe the Service" className="w-full px-3 py-2 border rounded-md text-white" required></textarea>
                    </div>
                    <div className="col-span-full">
                        <div className="flex items-center space-x-2">
                            <button type="submit" className="px-4 py-2 border rounded-md dark:border-gray-100">Add Service</button>
                        </div>
                    </div>
                </div>
            </fieldset>

        </form>
    </section>
    );
};

export default AddService;