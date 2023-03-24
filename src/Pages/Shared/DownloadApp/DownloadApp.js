import React from 'react';
import google from '../../../Assets/google.png'
import mobile from '../../../Assets/mobile.png'
import round from '../../../Assets/Ellipse.png'

import './DonwloadApp.css'


const DownloadApp = () => {
    return (
        <div className='relative top-[150px]'>
            <div className='bgImg h-[600px] lg:h-[300px] bg-black mx-16 md:mx-28 xl:mx-36 2xl:mx-48 py-4 lg:py-6 lg:px-16 rounded-lg flex flex-col-reverse lg:flex-row justify-around items-center'>
                <div>
                    <h2 className='text-center lg:text-left text-white text-4xl xl:text-5xl font-semibold mb-10'>Download Our App</h2>
                    <h2 className='text-center lg:text-left text-white text-base lg:text-lg mb-10 font-semibold'>The best travel in the world</h2>
                    <div className='flex justify-center lg:justify-start'>
                        <img src={google} className="w-[180px] hover:brightness-75 cursor-pointer" alt="" srcset="" />
                    </div>
                </div>

                <div className='relative top-[-80px] lg:top-[-140px]'>
                    <img src={mobile} className="w-[180px] lg:w-[200px] relative top-[180px] lg:top-[200px] left-[25px] lg:left-[40px]" alt="" />
                    <img src={round} className="w-[200px] lg:w-full" alt="" />
                </div>

            </div>
        </div>
    );
};

export default DownloadApp;