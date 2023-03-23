import React from 'react';
import HeroFly from '../HeroFly/HeroFly';
import HomeHero from '../HomeHero/HomeHero';
import IslandStays from '../IslandStays/IslandStays';

const Home = () => {
    return (
        <div>
            <HomeHero />
            <HeroFly />
            <IslandStays />
        </div>
    );
};

export default Home;