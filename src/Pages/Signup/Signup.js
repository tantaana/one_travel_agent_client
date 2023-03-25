import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { GiHouseKeys } from "react-icons/gi";
import { FaPenFancy } from "react-icons/fa";
import logo from '../../Assets/nav-logo.png'
import { MdEmail } from "react-icons/md";
import AllTitle from '../../Hooks/AllTitle';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import DownloadApp from '../Shared/DownloadApp/DownloadApp';

const Signup = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);

    // const [userData, setUserData] = useState([]);
    // console.log(userData)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    AllTitle('Sign Up')


    //Loader to show while loading
    const [isLoading, setIsLoading] = useState(false);



    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        setIsLoading(true);




        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUserInfo(name)



                const addUser = {
                    name: name,
                    email: email,
                    userType: 'User',
                }

                //save user information to the database
                fetch('https://one-travel-agent-server.vercel.app/userData', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(addUser)
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.acknowledged) {
                            toast.success('Successfully signed up');
                            setIsLoading(false);
                            setTimeout(() => {
                                navigate(from, { replace: true });
                            }, 2000);
                        }
                    })




            })
            .catch(err => {
                console.error(err.message);
                if (err.message === "Firebase: Error (auth/email-already-in-use).") {
                    toast.error('User Already Exists !');
                    setIsLoading(false);
                    form.email.value = '';
                    form.password.value = '';
                }
                if (err.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                    toast.error('Password should be at least 6 characters');
                    setIsLoading(false);
                    form.password.value = '';
                };
                if (err.message === "Firebase: Error (auth/invalid-email).") {
                    toast.error('Invalid Email');
                    setIsLoading(false);
                };
                if (err.message === "Firebase: Error (auth/network-request-failed).") {
                    toast.error('Network Request Failed. Try Again');
                    setIsLoading(false);
                }
            })

        const handleUserInfo = name => {
            const profile = {
                displayName: name
            }
            updateUserProfile(profile)
                .then(() => { })
                .catch(err => console.error(err))
        }

    };



    return (
        <div className='my-44'>
            <div className='flex justify-center'>
                <div className="hero rounded-xl mx-20">
                    <div className="hero-content flex-col lg:flex-row gap-10 2xl:gap-60">
                        <div className='flex justify-center'>
                            <img src={logo} className="w-1/2 lg:w-2/3" alt="" />
                        </div>



                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-sky-300 to-sky-200">
                            <form onSubmit={handleSignUp} className="card-body">
                                <div className='flex items-center gap-4 mb-6'>
                                    <h1 className="text-3xl md:text-4xl font-bold text-sky-600">Sign Up</h1>

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
                                        <span className="label-text text-xl font-semibold flex items-center gap-2">Your Full Name <FaPenFancy /></span>
                                    </label>
                                    <input type="text" name="name" placeholder="Type your name" className="input input-bordered" required />
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
                                        <button className="btn glass hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-300 text-black" type="submit">Sign Up</button>
                                    </div>
                                </div>


                                <div className='mt-6'>
                                    <h2 className='text-lg font-semibold text-center w-full'>Already have an account?</h2>
                                    <h2 className='text-lg font-semibold text-center w-full'><NavLink to='/login' className='font-bold text-sky-700'>Login</NavLink> <span>here</span></h2>

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

export default Signup;