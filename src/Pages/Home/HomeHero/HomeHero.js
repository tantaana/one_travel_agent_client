import React from 'react';
import { AiFillCompass } from 'react-icons/ai'
import { ImLocation2 } from 'react-icons/im'
import heroImg from '../../../Assets/people.png'
import heroCircle from '../../../Assets/hero-circle.png'
import banner1 from '../../../Assets/img1.png'
import banner2 from '../../../Assets/img2.png'
import { Link } from 'react-router-dom';


const HomeHero = () => {
    return (
        <div className='py-4 my-20 mx-4 xl:mx-10 bg-gradient-to-r from-sky-100 to-sky-50 rounded-xl'>
            <div className='flex flex-col lg:flex-row items-center lg:justify-between xl:justify-around gap-10'>
                <div className='lg:w-[500px]'>
                    <div className='flex justify-center lg:block'>
                        <div className='bg-sky-200 hover:bg-sky-300 p-2 rounded-full w-[180px] flex justify-center mb-10'>
                            <h2 className='flex items-center gap-10 text-3xl lg:text-4xl'>Visit <AiFillCompass className='text-sky-600' /></h2>
                        </div>
                    </div>

                    <h2 className='text-5xl lg:text-6xl font-bold mb-10 leading-snug text-center lg:text-left'>The Exotic <span className='text-sky-700'>Lakshadweep</span> Islands</h2>

                    <div className='flex justify-center lg:justify-start '>
                        <Link to='#'><h2 className='text-sky-700 border border-sky-700 p-4 rounded-lg font-semibold hover:bg-sky-600 hover:text-white'>Discover Now</h2></Link>
                    </div>
                </div>

                <div className='relative'>
                    <Link to="#"><div className='absolute bottom-[0px] left-[0px] md:left-[-40px] bg-sky-50 hover:bg-sky-100 rounded-xl py-0.5 cursor-pointer hover:scale-105 duration-300 ease-in-out'>
                        <img src={banner1} className="w-[200px]" alt="" srcset="" />
                        <h2 className='text-center font-bold mb-2'>Explore Labuan Bajo</h2>
                        <div className='flex justify-center items-center gap-2'>
                            <ImLocation2 className='text-sky-400' />
                            <h2 className='text-center text-gray-500 flex items-center gap-2'>NTT, Indonesia</h2>
                        </div>
                    </div></Link>

                    <img src={heroImg} className="w-[450px]" alt="" srcset="" />

                    <Link to='#'><div className='absolute top-[250px] left-[320px] bg-sky-50 hover:bg-sky-100 cursor-pointer rounded-xl p-1 hover:scale-110 duration-300 ease-in-out'>
                        <div className='flex justify-center'>
                            <img src={banner2} className="w-[100px]" alt="" srcset="" />
                        </div>
                        <h2 className='text-[11px] text-center font-bold mb-1'>Le Pirate Hotel</h2>
                        <div className='flex justify-center items-center gap-1'>
                            <ImLocation2 className='text-[10px] text-sky-400' />
                            <h2 className='text-[10px] text-center text-gray-500 flex items-center gap-2'>Flores, Indonesia</h2>
                        </div>
                    </div> </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;