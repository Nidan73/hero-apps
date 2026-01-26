import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ShowTrendingApp from '../TrendingApp/ShowTrendingApp';

const AllApps = () => {
    const data = useLoaderData()

    const [search, setSearch] = useState("");

  const filteredApps = data.filter(app =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );
    return (
        <div className='max-w-550 mx-auto'>
            <div className='mt-20 mb-10 bg-base-100'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-4xl lg:text-6xl lg:mb-1.5 font-bold'>Our All Applications</h1>
                <p className='text-[0.72rem] md:text-2xl font-light text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex items-center justify-between'>
                <h1 className='font-semibold text-2xl'>({data.length}) Apps Found</h1>
                <input  onChange={(e) => setSearch(e.target.value)} type="text" placeholder="🔍 Search Apps" className="input" />
            </div>
            <div className ='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 p-10'>
                {
                    filteredApps.map(app => <ShowTrendingApp app = {app} key={app.id} ></ShowTrendingApp>)
                }
            </div>
        </div>
        </div>
    );
};

export default AllApps;