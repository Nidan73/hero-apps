import React, { Suspense, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router';
import ShowTrendingApp from '../TrendingApp/ShowTrendingApp';
import icon from '../../assets/logo.png'

const AllApps = () => {
    const data = useLoaderData()
     const navigation = useNavigation()
    const [search, setSearch] = useState("");
     const loader = <>
       <div className='flex mt-60 gap-1.5 justify-center text-6xl items-center'>
                <p className="flex items-center animate-bounce tracking-tighter"> <span>L</span> <img className="mx-1 w-10 h-10 animate-spin"src={icon} alt=""/><span>ading</span></p>
            </div>
      </>
//    console.log("Navigation state:", navigation.state);
    if (navigation.state === "loading") {
  return loader;
}
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
            <div className='flex items-center mx-2 mt-5 justify-between text-left'>
                <h1 className='font-semibold md:text-2xl'>({data.length}) Apps Found</h1>
                <input  onChange={(e) => setSearch(e.target.value)} type="text" placeholder="🔍 Search Apps" className="input" />
            </div>

           
            
                
                {   
                   filteredApps.length <= 0 ?  <div className='flex flex-col text-center justify-center items-center gap-10 mt-30 md:mt-80'>
                             <h1 className='text-5xl font-bold text-gray-500'>No App Found</h1>
                         <button onClick={()=>setSearch('')} className='btn btn-success'>show all apps</button>
                         </div> : 
                         <div className ='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 p-10'> {
                    filteredApps.map(app => <ShowTrendingApp app = {app} key={app.id} ></ShowTrendingApp>) }
                    </div>
                }
                
            </div>
        </div>
    );
};

export default AllApps;