import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import img from '../../Images/login 3.webp'
import useTitle from '../../useTitle';


const Register = () => {
   useTitle('Register')

    const [error, setError] = useState("");
    const { creatUser, updateUserProfile, } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/login';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;


        creatUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('');
                form.reset();
                if (user) {
                    navigate(from, { replace: true });
                }
                handleUpdateUserProfile(name, photoURL);

            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            })
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,

            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <div data-theme="synthwave" className="grid max-w-screen-xl grid-cols-1 my-12 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Register!</h2>
                    <div className="dark:text-gray-400">Now at the time you can Login easily</div>
                </div>
                <img src={img} alt="" className="p-6 h-96 w-96  md:h-64" />
            </div>
            <form onSubmit={handleSubmit} novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label for="name" className="text-sm">User Name</label>
                    <input id="name" type="text" name='name' placeholder="Enter your UserName" className="w-full p-3 rounded bg-black " />
                </div>
                <div>
                    <label for="photoURL" className="text-sm">PhotURL</label>
                    <input id="photoURL" type="photoURL" name='photoURL' placeholder="submit a photURl" className="w-full p-3 rounded  bg-black" />
                </div>
                <div>
                    <label for="email" className="text-sm">Email</label>
                    <input id="email" type="email" name='email' placeholder="Enter your email" className="w-full p-3 rounded  dark:text-gray-100 bg-black" required />
                </div>
                <p className='text-red-500'>
                    {error}
                </p>
                <div>
                    <label for="password" className="text-sm">PassWord</label>
                    <input id="password" type="password" name='password' placeholder='Enter your password' className="w-full p-3 rounded bg-black" required />
                </div>
                <p className='text-red-600'>
                    {error}
                </p>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Now you can login in <Link to='/login' className='text-red-500 underline'>Login form</Link> </p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <button type="submit" className="px-8 py-3 border bg-blue-700 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800">Register</button>
            </form>
        </div>
    );
};

export default Register;