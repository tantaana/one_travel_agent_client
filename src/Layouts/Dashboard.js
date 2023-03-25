import React from 'react';
import { RiProfileFill } from 'react-icons/ri';
import { NavLink, Outlet } from 'react-router-dom';
import AllTitle from '../Hooks/AllTitle';

const Dashboard = () => {
    AllTitle('Dashboard')
    const activeLinks = ({ isActive }) => {
        return {
            backgroundColor: isActive ? '#7dd3fc' : 'transparent',
        }
    }

    const handleClick = () => {
        const elem = document.activeElement;
        if (elem) {
            elem?.blur();
        }
    };

    return (
        <div className="drawer drawer-mobile border border-black">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
                <div className='flex justify-center'>
                    <label htmlFor="my-drawer-2" className="border border-sky-700 text-center p-2 text-sky-700 hover:bg-sky-700 cursor-pointer hover:text-white rounded-xl w-1/2 drawer-button lg:hidden font-bold my-6">My Dashboard</label>
                </div>
                <Outlet></Outlet>
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu text-lg p-4 w-80 bg-gradient-to-r from-sky-200 to-sky-100">

                    <NavLink to='/dashboard' className="mt-10 py-2 text-xl text-white text-center font-bold bg-teal-500 hover:bg-teal-600 mb-10 flex justify-center items-center gap-2"><span>My Dashboard</span> <RiProfileFill className='text-3xl' /></NavLink>

                    <li onClick={handleClick} className='hover:bg-sky-300 hover:rounded-lg'><NavLink to='/dashboard/orders' style={activeLinks} className="text-lg font-semibold hover:rounded-lg p-2">My Order</NavLink></li>

                    {/* --------------------------- */}
                    <li onClick={handleClick} className='hover:bg-sky-300 hover:rounded-lg'><NavLink to='/dashboard/all_packages' style={activeLinks} className="text-lg font-semibold hover:rounded-lg p-2">All Packages</NavLink></li>
                    <li onClick={handleClick} className='hover:bg-sky-300 hover:rounded-lg'><NavLink to='/dashboard/all_users' style={activeLinks} className="text-lg font-semibold hover:rounded-lg p-2">All Users</NavLink></li>
                    <li onClick={handleClick} className='hover:bg-sky-300 hover:rounded-lg'><NavLink to='/dashboard/add_banner' style={activeLinks} className="text-lg font-semibold p-2">Add a Banner</NavLink></li>




                </ul >

            </div >
        </div >
    );
};

export default Dashboard;