import React from 'react';
import ClientSays from '../ClientSays/ClientSays';
import ExploreWorld from '../ExploreWorld/ExploreWorld';
import HeroFly from '../HeroFly/HeroFly';
import HomeHero from '../HomeHero/HomeHero';
import IslandStays from '../IslandStays/IslandStays';

const Home = () => {
    return (
        <div>
            <HomeHero />
            <HeroFly />
            <IslandStays />
            <ExploreWorld />
            <ClientSays />
        </div>
    );
};

export default Home;