import React from 'react';
import AllTitle from '../../Hooks/AllTitle';
import './About.css'
import OurTeam from './OurTeam/OurTeam';

const About = () => {
    AllTitle('About')
    return (
        <div>
            <div className='bgImg h-[300px] lg:h-[350px] flex justify-center items-center'>
                <h2 className='text-5xl font-bold text-center'>About Us</h2>
            </div>

            <div className='mt-28'>
                <h2 className='text-4xl font-semibold text-center mb-2'>Our Team</h2>
                <h2 className='text-xl text-center'>Meet our team who contributed the most in our journey</h2>

            </div>

            <OurTeam />
        </div>
    );
};

export default About;