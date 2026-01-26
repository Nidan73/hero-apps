import React from 'react';
import Hero from '../HeroSection/Hero';
import TrendingApp from '../TrendingApp/TrendingApp';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <Hero></Hero>
            <TrendingApp data={data}></TrendingApp>
        </div>
    );
};

export default Home;