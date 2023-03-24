import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import navLogo from '../../../../Assets/nav-logo.png'
import { IoMdArrowDropdown } from 'react-icons/io'
import './Nav1.css'

const Nav1 = () => {

    const activeLinks = ({ isActive }) => {
        return {
            color: isActive ? '#3b82f6' : '',
            borderBottom: isActive ? '3px solid #3b82f6' : '',
        }
    }

    const activeLinks2 = ({ isActive }) => {
        return {
            borderBottom: isActive ? '3px solid #3b82f6' : '',

        }
    }

    return (
        <div className='py-2  xl:px-20 grid grid-cols-4 bg-sky-100 px-4'>
            <div className='flex justify-start 2xl:justify-center items-center'>
                <Link to='/' className='hover:scale-105 ease-in-out duration-300 text-3xl xl:text-4xl'>
                    <img src={navLogo} className="w-[100px]" alt="" srcset="" /></Link>
            </div>

            <div className='col-span-2 flex justify-end lg:justify-center items-center'>
                <div className="hidden lg:flex justify-center items-center gap-4 xl:gap-6 2xl:gap-8">
                    <NavLink to='/reservations' style={activeLinks}><h2 className='text-sm xl:text-base font-semibold hover:text-blue-500 hover:ease-in-out hover:duration-300 text-center'>Find Reservations</h2></NavLink>


                    <NavLink to='/packages' style={activeLinks}><h2 className='text-sm xl:text-base font-semibold hover:text-blue-500 hover:ease-in-out hover:duration-300 text-center flex items-center gap-1'>Packages <IoMdArrowDropdown /></h2></NavLink>

                    <NavLink to='/about_lakshadweep' style={activeLinks}><h2 className='text-sm xl:text-base font-semibold hover:text-blue-500 hover:ease-in-out hover:duration-300 text-center flex items-center gap-1'>About Lakshadweep <IoMdArrowDropdown /></h2></NavLink>

                    <NavLink to='/about' style={activeLinks}><h2 className='text-sm xl:text-base font-semibold hover:text-blue-500 hover:ease-in-out hover:duration-300 text-center'>About Us</h2></NavLink>

                    <NavLink to='/gol' style={activeLinks}><h2 className='text-sm xl:text-base font-semibold hover:text-blue-500 hover:ease-in-out hover:duration-300 text-center'>GOL</h2></NavLink>

                    <NavLink to='/support' style={activeLinks}><h2 className='text-sm xl:text-base font-semibold hover:text-blue-500 hover:ease-in-out hover:duration-300 text-center'>Support</h2></NavLink>
                </div>

                <div className='lg:hidden'>

                </div>
            </div>

            <div className='flex justify-end 2xl:justify-center items-center gap-4 2xl:gap-6'>
                <NavLink to='/login' style={activeLinks2}><button className='btn btn-ghost rounded-xl hover:bg-blue-300 text-blue-400 hover:text-white fontzz text-base mb-1'>Login</button></NavLink>
                <NavLink to='/signup' style={activeLinks2}><button className='btn btn-primary rounded-full text-base bg-blue-500 hover:bg-blue-600 border-none mb-1'>Sign Up</button></NavLink>
            </div>
        </div>
    );
};

export default Nav1;