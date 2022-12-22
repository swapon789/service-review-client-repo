import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState, } from 'react';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle, } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import img from '../../Images/login 3.webp'
import useTitle from '../../useTitle';
import './Login.css'

const Login = () => {
    useTitle('Login');

    const [error, setError] = useState('');
    const { providerLogin, signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('success')
            })
            .catch(error => console.error(error))
    }
    const gitHubAuthProvider = new GithubAuthProvider();

    const handleGitHubSignIn = () => {
        providerLogin(gitHubAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                setError('')

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                fetch('https://y-iota-ruddy.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        alert('Login successfully')
                        if (user) {
                            navigate(from, { replace: true });
                            localStorage.setItem('dentrexatoken', data.token);
                           
                        }
                    })



            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div data-theme="synthwave" className="grid max-w-screen-xl grid-cols-1 my-12 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Login Now!</h2>
                    <div className="dark:text-gray-400">If you dont register. <br /> At first Register use register <br /> link upper the Login Button</div>
                </div>
                <img src={img} alt="" className="p-6 h-96 w-96  md:h-64" />
            </div>
            <form onSubmit={handleSubmit} novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label for="email" className="text-sm">Email</label>
                    <input id="email" type="email" name='email' placeholder="Enter your email" className="w-full p-3 rounded dark:bg-gray-800" required />
                </div>
                <div>
                    <label for="password" className="text-sm">PassWord</label>
                    <input id="password" type="password" name='password' placeholder='Enter your password' className="w-full p-3 rounded dark:bg-gray-800" required />
                </div>
                <p className='text-red-600'>
                    {error}
                </p>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Login with social accounts <Link to='/register' className='text-red-500 underline'>Registration form</Link> </p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <button type="submit" className=" p-3 text-sm font-bold tracking-wide uppercase rounded border bg-indigo-500 w-full  dark:bg-violet-400 dark:text-gray-900">Login</button>
                <div className='flex justify-between'>
                    <button onClick={handleGoogleSignIn} type="button" className="px-8 py-3 border flex bg-green-500 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800"> <FaGoogle className='pt-1 w-5 h-6 mx-2'></FaGoogle> Gmail</button>
                    <button onClick={handleGitHubSignIn} type="button" className="px-8 py-3 border flex bg-black font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800"> <FaGithub className='pt-1 w-5 h-6 mx-2'></FaGithub> Github</button>
                </div>
            </form>

        </div>
    );
};

export default Login;