import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import navLogo from '../../../../Assets/nav-logo.png'
import { IoMdArrowDropdown } from 'react-icons/io'
import './Nav1.css'
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import { FiAlignRight } from 'react-icons/fi';
import Packages from '../../../Packages/Packages';

const Nav1 = () => {

    const { user, logOut } = useContext(AuthContext)

    const activeLinks = ({ isActive }) => {
        return {
            color: isActive ? '#3b82f6' : '',
            borderBottom: isActive ? '3px solid #3b82f6' : ''
        }
    }

    const activeLinks2 = ({ isActive }) => {
        return {
            borderBottom: isActive ? '3px solid #3b82f6' : '',

        }
    }

    const handleClick = () => {
        const elem = document.activeElement;
        if (elem) {
            elem?.blur();
        }
    };

    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(err => console.error(err))

    }

    return (
        <div className='z-50 sticky top-0 py-2  xl:px-10 2xl:px-20 grid grid-cols-4 bg-sky-100 px-4'>
            <div className='flex justify-start 2xl:justify-center items-center'>
                <Link to='/' className='hover:scale-105 ease-in-out duration-300 text-3xl xl:text-4xl'>
                    <img src={navLogo} className="w-[100px]" alt="" srcset="" /></Link>
            </div>

            <div className='col-span-2 flex justify-end lg:justify-center items-center'>
                <div className="hidden lg:flex justify-center items-center gap-4 xl:gap-6 2xl:gap-8">
                    <NavLink to='/reservations' style={activeLinks}><h2 className='text-sm xl:text-base font-semibold hover:text-blue-500 ease-in-out duration-300 text-center'>Find Reservations</h2></NavLink>


                    <Packages />
                    {/* <NavLink to='/packages' style={activeLinks}><h2 className='text-sm xl:text-base font-semibold hover:text-blue-500 hover:ease-in-out hover:duration-300 text-center flex items-center gap-1'>Packages <IoMdArrowDropdown /></h2></NavLink> */}

                    <NavLink to='/about_lakshadweep' style={activeLinks}><h2 className='text-sm xl:text-base font-semibold hover:text-blue-500 ease-in-out duration-300 text-center flex items-center gap-1'>About Lakshadweep <IoMdArrowDropdown /></h2></NavLink>

                    <NavLink to='/about' style={activeLinks}><h2 className='text-sm xl:text-base font-semibold hover:text-blue-500 ease-in-out duration-300 text-center'>About Us</h2></NavLink>

                    <NavLink to='/gol' style={activeLinks}><h2 className='text-sm xl:text-base font-semibold hover:text-blue-500 ease-in-out duration-300 text-center'>GOL</h2></NavLink>

                    <NavLink to='/support' style={activeLinks}><h2 className='text-sm xl:text-base font-semibold hover:text-blue-500 ease-in-out duration-300 text-center'>Support</h2></NavLink>
                </div>

            </div>


            {
                user?.uid ?
                    <div className='flex justify-end 2xl:justify-center items-center gap-4'>
                        <button onClick={handleLogOut} className='btn glass bg-red-500 hover:bg-red-600 text-black btn-outline rounded-full'>Sign Out</button>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="hover:text-sky-700 "><FiAlignRight className='text-4xl' /></label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-sky-300 w-52 mt-5">
                                <div className='flex justify-center mb-2'>
                                    <div className='avatar online'>
                                        <div className='w-12 rounded-full'>
                                            {user?.photoURL ?
                                                <img src={user.photoURL} alt="" /> :
                                                <img src="https://www.pinkvilla.com/english/images/2022/10/1942600650_hrithik-roshan-fighter-main-final_640*360.jpg" alt="" />}
                                        </div>
                                    </div>
                                </div>
                                <h2 className='text-lg font-semibold mb-6 text-center text-sky-800'>{user?.displayName}</h2>
                                <li><Link to='/' onClick={handleClick} className='text-lg font-semibold'>Home</Link></li>
                                <li><Link to='/dashboard' onClick={handleClick} className='text-lg font-semibold'>Dashboard</Link></li>
                                <li><Link to='#' onClick={handleClick} className='text-lg font-semibold'>Find Reservations</Link></li>
                                <li><Link to='/packages/maldives' onClick={handleClick} className='text-lg font-semibold'>Packages</Link></li>
                                <li className='pl-5'><Link to='/packages/maldives' onClick={handleClick} className='text-base font-semibold'>* Maldives</Link></li>
                                <li className='pl-5'><Link to='/packages/cordelia' onClick={handleClick} className='text-base font-semibold'>* Cordelia</Link></li>
                                <li className='pl-5'><Link to='/packages/samudram' onClick={handleClick} className='text-base font-semibold'>* Samudram</Link></li>
                                <li><Link to='#' onClick={handleClick} className='text-lg font-semibold'>Contact</Link></li>
                                <li><Link to='#' onClick={handleClick} className='text-lg font-semibold'>About Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    :
                    <div className='flex justify-end 2xl:justify-center items-center gap-4'>
                        <NavLink to='/login' style={activeLinks2}><button className='btn border-none bg-transparent hover:bg-sky-500 text-black hover:text-white'>Login</button></NavLink>
                        <NavLink to='/signup' style={activeLinks2}><button className='btn glass bg-sky-500 hover:bg-sky-600 text-black btn-outline rounded-full'>Sign Up</button></NavLink>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="hover:text-sky-700 "><FiAlignRight className='text-4xl' /></label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-sky-300 w-52 mt-5">
                                <li><Link to='/' onClick={handleClick} className='text-lg font-semibold'>Home</Link></li>
                                <li><Link to='#' onClick={handleClick} className='text-lg font-semibold'>Find Reservations</Link></li>
                                <li><Link to='/packages/maldives' onClick={handleClick} className='text-lg font-semibold'>Packages</Link></li>
                                <li className='pl-5'><Link to='/packages/maldives' onClick={handleClick} className='text-base font-semibold'>* Maldives</Link></li>
                                <li className='pl-5'><Link to='/packages/cordelia' onClick={handleClick} className='text-base font-semibold'>* Cordelia</Link></li>
                                <li className='pl-5'><Link to='/packages/samudram' onClick={handleClick} className='text-base font-semibold'>* Samudram</Link></li>
                                <li><Link to='#' onClick={handleClick} className='text-lg font-semibold'>Contact</Link></li>
                                <li><Link to='#' onClick={handleClick} className='text-lg font-semibold'>About Us</Link></li>
                            </ul>
                        </div>
                    </div>

            }



        </div>
    );
};

export default Nav1;