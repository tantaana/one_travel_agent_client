import React from 'react';
import { AiFillCompass } from 'react-icons/ai'
import { ImLocation2 } from 'react-icons/im'
import heroImg from '../../../Assets/people.png'
import banner1 from '../../../Assets/img1.png'
import banner2 from '../../../Assets/img2.png'


const HomeHero = () => {
    return (
        <div className='my-20 mx-4'>
            <div className='flex flex-col lg:flex-row items-center lg:justify-between xl:justify-around gap-10'>
                <div className='lg:w-[500px]'>
                    <div className='flex justify-center lg:block'>
                        <div className='bg-sky-200 p-2 rounded-full w-[180px] flex justify-center mb-10'>
                            <h2 className='flex items-center gap-10 text-3xl lg:text-4xl'>Visit <AiFillCompass className='text-sky-600' /></h2>
                        </div>
                    </div>

                    <h2 className='text-5xl lg:text-6xl font-bold mb-10 leading-snug text-center lg:text-left'>The Exotic <span className='text-sky-700'>Lakshadweep</span> Islands</h2>

                    <div className='flex justify-center lg:block'>
                        <button className='btn btn-primary btn-outline'>Discover Now</button>
                    </div>
                </div>

                <div className='relative'>
                    <div className='absolute bottom-[0px] left-[-40px] bg-sky-100 hover:bg-sky-200 rounded-xl py-0.5 cursor-pointer'>
                        <img src={banner1} className="w-[200px]" alt="" srcset="" />
                        <h2 className='text-center font-bold mb-2'>Explore Labuan Bajo</h2>
                        <div className='flex justify-center items-center gap-2'>
                            <ImLocation2 className='text-sky-400' />
                            <h2 className='text-center text-gray-500 flex items-center gap-2'>NTT, Indonesia</h2>
                        </div>
                    </div>

                    <img src={heroImg} className="w-[450px]" alt="" srcset="" />

                    <div className='absolute top-[250px] left-[320px] bg-sky-100 hover:bg-sky-200 cursor-pointer rounded-xl p-1'>
                        <div className='flex justify-center'>
                            <img src={banner2} className="w-[100px]" alt="" srcset="" />
                        </div>
                        <h2 className='text-[11px] text-center font-bold mb-1'>Le Pirate Hotel</h2>
                        <div className='flex justify-center items-center gap-1'>
                            <ImLocation2 className='text-[10px] text-sky-400' />
                            <h2 className='text-[10px] text-center text-gray-500 flex items-center gap-2'>Flores, Indonesia</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;