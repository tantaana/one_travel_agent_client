import React from 'react';
import worldMap from '../../../Assets/world_map.png'

const ExploreWorld = () => {
    return (
        <div style={
            {
                backgroundImage: `url(${worldMap})`,
                backgroundColor: '#42A7C3',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '80%',
            }
        } className="mx-16 lg:mx-36 xl:mx-48 2xl:mx-60 flex flex-col 2xl:flex-row gap-10 items-center justify-between mt-20 rounded-2xl py-16 px-8">
            <div>
                <p className='text-white text-center 2xl:text-left text-4xl lg:text-5xl font-semibold mb-8 2xl:w-[700px]'>Let's Ready to Explore The World With Us</p>
                <h2 className='text-white text-center 2xl:text-left 2xl:w-[800px] leading-snug'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, natus! Odio hic ipsam, aliquid deserunt voluptatem excepturi laudantium assumenda asperiores.</h2>
            </div>
            <button className='btn bg-white hover:bg-sky-600 text-black hover:text-white border-none font-semibold '>Contact Us</button>
        </div>
    );
};

export default ExploreWorld;