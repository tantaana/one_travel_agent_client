import React from 'react';
import { AiFillCompass } from 'react-icons/ai'

const HomeHero = () => {
    return (
        <div>
            <div className='bg-sky-200 p-2 rounded-full w-[180px] flex justify-center'>
                <h2 className='flex items-center gap-10 text-4xl'>Visit <AiFillCompass className='text-sky-600' /></h2>
            </div>
        </div>
    );
};

export default HomeHero;