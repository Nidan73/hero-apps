import React from 'react';
import ShowTrendingApp from './ShowTrendingApp';

const TrendingApp = ({data}) => {
      const trendingApps = data.slice(0,8);
    return (

        <div className='mt-20 mb-10'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-4xl font-bold'>Trending Apps</h1>
                <p className='text-sm md:text-2xl font-light text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
             <div className=' p-4 md:p-20 grid grid-cols-1 md:grid-cols-4 gap-4'>
                {
                    trendingApps.map(app => <ShowTrendingApp key={app.id} app = {app}></ShowTrendingApp>)
                }
             </div>
        </div>
    );
};

export default TrendingApp;