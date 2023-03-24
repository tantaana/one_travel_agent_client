import React from 'react';
import google from '../../../Assets/google.png'
import mobile from '../../../Assets/mobile.png'
import round from '../../../Assets/Ellipse.png'


const DownloadApp = () => {
    return (
        <div className='h-[300px] bg-black mx-48 py-6 px-16 rounded-lg flex justify-around items-center'>
            <div>
                <h2 className='text-white text-5xl font-semibold mb-10'>Download Our App</h2>
                <h2 className='text-white text-lg mb-10 font-semibold'>The best travel in the world</h2>
                <img src={google} className="w-[180px] hover:brightness-75 cursor-pointer" alt="" srcset="" />
            </div>

            <div className='relative top-[-140px]'>
                <img src={mobile} className="w-[200px] relative top-[200px] left-[40px]" alt="" />
                <img src={round} alt="" />
            </div>

        </div>
    );
};

export default DownloadApp;