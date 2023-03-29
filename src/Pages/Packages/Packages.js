import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Packages.css';

const Packages = () => {
    const activeLinks = ({ isActive }) => {
        return {
            color: isActive ? '#3b82f6' : '',
            borderBottom: isActive ? '3px solid #3b82f6' : ''
        }
    }

    const activeLinks2 = ({ isActive }) => {
        return {
            color: isActive ? '#3b82f6' : '',
            fontWeight: '600'
        }
    }

    const handleClick = () => {
        const elem = document.activeElement;
        if (elem) {
            elem?.blur();
        }
    };

    return (
        <div class="dropdown inline-block relative">
            <button class="inline-flex items-center">
                <NavLink to='/packages/maldives' style={activeLinks}><span class="text-sm xl:text-base font-semibold hover:text-blue-500 ease-in-out duration-300 text-center flex items-center gap-1">Packages <MdOutlineArrowDropDown className='m-0 p-0' /></span></NavLink>
            </button>

            <ul class="bg-sky-100 hidden dropdown-menu absolute px-4 pt-10 pb-2 w-[200px]">
                <div className='flex flex-col gap-2'>
                    <NavLink to='/packages/maldives' onClick='hidden' style={activeLinks2}>Maldives</NavLink>
                    <NavLink to='/packages/cordelia' onClick='hidden' style={activeLinks2}>Cordelia</NavLink>
                    <NavLink to='/packages/samudram' onClick='hidden' style={activeLinks2}>Samudram</NavLink>


                </div>
            </ul>
        </div>
    );
};

export default Packages;