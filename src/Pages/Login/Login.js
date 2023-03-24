import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiHomeHeartFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { GiHouseKeys } from "react-icons/gi";
import loginImg from '../../Assets/gif/login.gif'
import AllTitle from '../../Hooks/AllTitle';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast, Toaster } from 'react-hot-toast';
// import useToken from '../../Hooks/useToken/useToken';

const Login = () => {
    const { logIn, providerLogin } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    AllTitle('Log In')

    const googleLogIn = new GoogleAuthProvider();

    //Loader to show while loading
    const [isLoading, setIsLoading] = useState(false);

    //jwt
    // const [loginUserEmail, setLoginUserEmail] = useState('')
    // const [token] = useToken(loginUserEmail)

    // if(token){
    //     navigate(from, { replace: true })
    // }


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
                    // setLoginUserEmail(email)
                    toast.success('Successfully Logged In')
                    navigate(-1)
                    // navigate(from, { replace: true })

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

    const handleGoogle = () => {
        setIsLoading(true);
        providerLogin(googleLogIn)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Successfully Logged In');
                setIsLoading(false);
                // navigate(from, { replace: true })
                navigate(-1)
            })
            .catch(err => {
                console.error(err);
                toast.error('Could not login. Please try again');
                setIsLoading(false);

            })
    }


    return (
        <div>
            <div className='flex justify-center mb-6 mt-6'>
                <Link className="bg-transparent border-none hover:bg-transparent normal-case text-3xl" to='/'>
                    <div>
                        <div className='mb-2'>
                            <h2 className='text-5xl font-semibold'><span className='text-blue-700'>promise</span><span className='text-teal-500'>hospital</span></h2>
                        </div>
                        <div className='flex justify-end'>
                            <h2 className='text-blue-500 text-xl font-semibold'>Beside you forever ❤️</h2>
                        </div>
                    </div>
                </Link>
            </div>

            <div className='flex justify-center mb-4'>
                <div className="tooltip tooltip-right tooltip-primary border-dashed border-b-4 border-indigo-500" data-tip="Go to home">
                    <Link to='/'><h2 className='btn border-none bg-transparent hover:bg-transparent text-5xl text-blue-500 text-center'><RiHomeHeartFill /></h2></Link>
                </div>

            </div>

            <div className='flex justify-center'>
                <div className="hero py-20 bg-blue-200 shadow-2xl rounded-xl mx-20 mb-20">
                    <div className="hero-content flex-col 2xl:flex-row-reverse gap-10 2xl:gap-60">
                        <div className="lg:text-left">
                            <img src={loginImg} className="w-full" alt="" />
                        </div>

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-blue-300 to-teal-400">
                            <form onSubmit={handleLogIn} className="card-body">
                                <div className='flex gap-4'>
                                    <h1 className="text-3xl md:text-4xl font-bold mb-10">Log In</h1>

                                    <div className='flex justify-center my-8'>
                                        {
                                            isLoading ?
                                                <div class="flex flex-col">
                                                    <div class="w-12 h-12 rounded-full animate-spin
                        border-4 border-solid border-blue-900 border-t-transparent shadow-md"></div>


                                                </div>
                                                : ''
                                        }
                                    </div>

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Your Email 📧</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Type your email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Your Password <GiHouseKeys /></span>
                                    </label>
                                    <input type="password" name="password" placeholder="Type your password" className="input input-bordered" required />
                                    <div className="form-control mt-6">
                                        <button className="btn glass hover:bg-gradient-to-r hover:from-blue-400 hover:to-teal-500 text-black" type="submit">Log In</button>
                                    </div>
                                </div>
                                <h3 className='text-2xl text-center font-bold text-red-400 mt-4'></h3>
                            </form>
                            <h3 className='text-center text-2xl font-bold mb-6'>OR</h3>
                            <button onClick={handleGoogle} className='btn btn-secondary mb-6 mx-8 flex justify-evenly font-bold'><span className='text-2xl'><FaGoogle /></span><span>Log In with Google</span></button>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-lg ml-8">Forgot password?</a>
                            </label>
                            <h3 className='text-lg font-bold mt-6 mb-10 text-center'>Don't have an account? <Link className='text-blue-600 font-bold' to='/signup'>Sign Up</Link> here</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;