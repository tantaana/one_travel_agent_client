import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GiHouseKeys } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import logo from '../../Assets/nav-logo.png'
import AllTitle from '../../Hooks/AllTitle';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import DownloadApp from '../Shared/DownloadApp/DownloadApp';

const Login = () => {
    const { logIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    AllTitle('Log In')


    //Loader to show while loading
    const [isLoading, setIsLoading] = useState(false);


    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setIsLoading(true);


        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user) {
                    setIsLoading(false);
                    toast.success('Successfully Logged In')
                    navigate('/')

                }
                form.reset();
            })
            .catch(err => {
                console.error(err.message);
                if (err.message === "Firebase: Error (auth/user-not-found).") {

                    toast.error('User Not found');
                    setIsLoading(false);
                    form.reset();

                }
                if (err.message === "Firebase: Error (auth/wrong-password).") {

                    toast.error('Wrong Password');
                    setIsLoading(false);
                    form.password.value = '';
                };
                if (err.message === 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).') {
                    toast.error('Try again later for this account. Thank You ☠️');
                    setIsLoading(false);
                };
                if (err.message === "Firebase: Error (auth/network-request-failed).") {
                    toast.error('Network Request Failed. Try Again');
                    setIsLoading(false);
                }

            })

    }

    return (
        <div className='my-44'>
            <div className='flex justify-center'>
                <div className="hero rounded-xl mx-20">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-10 2xl:gap-60">
                        <div className='flex justify-center'>
                            <img src={logo} className="w-1/2 lg:w-2/3" alt="" />
                        </div>

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-sky-200 to-sky-300">
                            <form onSubmit={handleLogIn} className="card-body">
                                <div className='flex items-center gap-4 mb-6'>
                                    <h1 className="text-3xl md:text-4xl font-bold text-sky-600">Log In</h1>

                                    <div className='flex justify-center'>
                                        {
                                            isLoading ?
                                                <div class="flex flex-col">
                                                    <div class="w-8 h-8 rounded-full animate-spin
                        border-4 border-solid border-blue-900 border-t-transparent shadow-md"></div>


                                                </div>
                                                : ''
                                        }
                                    </div>

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold flex items-center gap-2">Your Email <MdEmail className='text-2xl' /></span>
                                    </label>
                                    <input type="email" name="email" placeholder="Type your email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold flex items-center gap-2">Your Password <GiHouseKeys className='text-2xl' /></span>
                                    </label>
                                    <input type="password" name="password" placeholder="Type your password" className="input input-bordered" required />
                                    <div className="form-control mt-6">
                                        <button className="btn glass hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-500 text-black" type="submit">Log In</button>
                                    </div>
                                </div>

                                <div className='mt-6'>
                                    <h2 className='text-lg font-semibold text-center w-full'>Don't have an account?</h2>
                                    <h2 className='text-lg font-semibold text-center w-full'><Link to='/signup' className='font-bold text-sky-700'>Signup</Link> here</h2>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <DownloadApp />
        </div >
    );
};

export default Login;