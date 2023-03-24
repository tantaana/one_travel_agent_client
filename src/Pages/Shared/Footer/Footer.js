import React from 'react';
import worldMap from '../../../Assets/world_map.png'
import logo from '../../../Assets/foot-logo.png'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={
            {
                backgroundImage: `url(${worldMap})`,
                backgroundColor: '#42A7C3',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }
        } className=" p-10">
            <div className='h-[200px]'></div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-4 mb-6'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-white text-xl font-semibold mb-2'>Company</h2>
                    <h2 className='text-white text-lg'>Events</h2>
                    <h2 className='text-white text-lg'>Blogs</h2>
                    <h2 className='text-white text-lg'>FAQ</h2>
                    <h2 className='text-white text-lg'>Join Us</h2>
                </div>

                <div className='flex flex-col gap-2'>
                    <h2 className='text-white text-xl font-semibold mb-2'>About</h2>
                    <h2 className='text-white text-lg'>Project</h2>
                    <h2 className='text-white text-lg'>Services</h2>
                    <h2 className='text-white text-lg'>Our Story</h2>
                </div>

                <div className='flex flex-col gap-2'>
                    <h2 className='text-white text-xl font-semibold mb-2'>Contact Us</h2>
                    <h2 className='text-white text-lg'>info@gol.com</h2>
                    <h2 className='text-white text-lg'>India</h2>
                    <h2 className='text-white text-lg'>Bangladesh</h2>
                </div>

                <div>
                    <img src={logo} className="w-[100px] mb-4" alt="" srcset="" />
                    <h2 className='text-white font-semibold w-1/2'>Lorem Ipsum is simply dummy
                        text of the printing and type
                        setting industry.</h2>
                </div>
            </div>

            <div className='text-white text-4xl flex items-center gap-3 mb-10'>
                <FaFacebookSquare />
                <RiInstagramFill />
                <FaLinkedin />
            </div>

            <div className='border border-white mb-10 mx-10'></div>

            <h2 className='text-white text-xs md:text-sm font-semibold text-center'>Copyright © 2023 GOL Travels Private Limited. All Rights Reserved.</h2>
        </div>
    );
};

export default Footer;