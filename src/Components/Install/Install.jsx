import React, { useEffect, useState } from 'react';
import { getStoredId, removeFromStoreDB } from '../../Utilities/Utilities';
import { useLoaderData } from 'react-router';
import InstallAppCard from './InstallAppCard';

const Install = () => {
    const data = useLoaderData();
    const [apps , setApps] = useState([])
    const [sort , setSort] = useState('')
     useEffect(() => {
    const storedIds = getStoredId().map((id) => parseInt(id, 10));
    const installed = data.filter((app) => storedIds.includes(app.id));
     setApps(installed);
  }, [data]);

    const handleRemove = (id) => {
        removeFromStoreDB(id);
        const updatedApps = apps.filter((app) => app.id !== id)
        setApps(updatedApps);
    }

    const handleSort = (type) => {
              setSort(type);

              if(type === 'low')
              {
                const sortByLow = [...apps].sort((a,b) => a.size - b.size)
                setApps(sortByLow);
                return
              }
              else if(type === 'high')
              {
                   const sortByHigh = [...apps].sort((a,b) => b.size - a.size);
                   setApps(sortByHigh)
                   return
              }
         }
    return (
        <div className='max-w-550 mx-auto'>
                <div className='flex flex-col items-center gap-4 mt-20'>
                <h1 className='text-4xl font-bold'>Trending Apps</h1>
                <p className='text-sm md:text-2xl font-light text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
         </div>
          <div className='flex items-center mx-2 mt-5 justify-between text-left'>
                <h1 className='font-semibold md:text-2xl'>{apps.length <=1 ?  `${apps.length} App Found` : ` ${apps.length} Apps Found`}</h1>
                <details className="dropdown">
                                   <summary className="btn btn-outline m-1">Sort by Size</summary>
                                                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                                        <li><a onClick={()=>handleSort('low')}>Low-High</a></li>
                                                           <li><a onClick={()=>handleSort('high')}>High-Low</a></li>
                                                   </ul>
                                  </details>
           </div>
          <div>
                {
                    apps.map(app => <InstallAppCard key={app.id} handleRemove = {handleRemove}  app ={app}></InstallAppCard>)
                }
          </div>
        </div>
    );
};

export default Install;