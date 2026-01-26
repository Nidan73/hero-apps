import React from 'react';
import ShowTrendingApp from './ShowTrendingApp';
import { Link } from 'react-router';

const TrendingApp = ({data}) => {
      const trendingApps = data.slice(0,8);
    return (

        <div className='mt-20 mb-10 bg-base-100'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-4xl font-bold'>Trending Apps</h1>
                <p className='text-sm md:text-2xl font-light text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
             <div className=' p-4 md:p-20 grid grid-cols-1 md:grid-cols-4 gap-4'>
                {
                    trendingApps.map(app => <ShowTrendingApp key={app.id} app = {app}></ShowTrendingApp>)
                }
             </div>
             <Link to="/allApps">
             <div className="flex justify-center mt-6">
                <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-6">Show All</button>
             </div>
             </Link>
        </div>
    );
};

export default TrendingApp;