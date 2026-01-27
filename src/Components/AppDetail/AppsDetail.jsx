import React, {  useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadimg from '../../assets/icon-downloads.png'
import ratingimg from '../../assets/icon-ratings.png'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { addToStoreDB, getStoredId } from '../../Utilities/Utilities';
import { toast } from 'react-toastify';
const AppsDetail = () => {
    const {id} = useParams()
    const appId = parseInt(id,10)
    const data = useLoaderData()
    const singleApp = data.find(app => app.id === appId)
    const barRating = [...singleApp.ratings].reverse();
 
           const formatDownloads = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
                        return num.toString();
};

      const totalStats = singleApp.ratings.reduce((acc, curr) => {
                    const starValue = parseInt(curr.name); 
  
                       acc.totalScore += starValue * curr.count;
                      acc.totalCount += curr.count;
  
                     return acc;
           }, { totalScore: 0, totalCount: 0 }); 
      const average = totalStats.totalScore / totalStats.totalCount;
     const [install , setInstall] = useState([])
    //  const [toggle ,setToggle] = useState(false)

     
    
       const installed = getStoredId();
       const allStoredId = installed.map(id => parseInt(id,10))
       const appInstalled = allStoredId.includes(singleApp.id);
      
      
      const handleInstall = (id) => {
             addToStoreDB(id)
             toast("App is Installed Succesfully")
             setInstall([])
      }
    return (
        <div className='max-w-550 mx-auto mt-8'>
                    <div>
                                                       <div className="card md:card-side bg-base-100">
                                         <figure>
                                           <img className='md:w-90 lg:w-120'
                                             src= {singleApp.image}
                                             alt="Movie" />
                                         </figure>
                                         <div className="card-body">
                                           <h2 className="card-title md:text-[32px] font-bold">{singleApp.title}</h2>
                                           <p className='md:text-xl'><span className='font-light text-gray-400'>Developed by : </span><span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'>{singleApp.companyName}</span></p>
                                           <div className="divider"></div>
                                           <div className='flex mx-7 my-7 gap-14'>
                                               <div className='flex flex-col items-center  justify-center text-center'>
                                                    <img src={downloadimg} alt="" />
                                                    <p><small>Downloads</small></p>
                                                    <h1 className='text-2xl md:text-4xl font-bold'>{formatDownloads(singleApp.downloads)}</h1>
                                               </div>
                                               <div className='flex flex-col items-center  justify-center text-center'>
                                                    <img src={ratingimg} alt="" />
                                                    <p><small>Average Ratings</small></p>
                                                    <h1 className='text-2xl md:text-4xl font-bold'>{average.toFixed(1)}</h1>
                                               </div>
                                               <div className='flex flex-col items-center justify-center text-center'>
                                                    <img src={ratingimg} alt="" />
                                                    <p><small>Total Reviews</small></p>
                                                    <h1 className='text-2xl md:text-4xl font-bold'>{formatDownloads(singleApp.reviews)}</h1>
                                               </div>
                                           </div>
                                           <div className="card-actions">
                                             <button 
                                               disabled = {appInstalled}
                                              onClick={()=>handleInstall(singleApp.id)} className="btn bg-green-300 text-black">{appInstalled ? "Installed" :`Install Now (${singleApp.size} MB)`}</button>
                              </div>
                                 </div>
                             </div>
                             <div className="divider"></div>
                           
                        <div className='barchart mb-25 w-full h-87.5 md:h-112.5'>
                            <h3 className="text-xl font-bold mb-4 mx-14">Ratings</h3>
                            <div style={{ width: "100%", height: 300 }}>
                                   <ResponsiveContainer width="100%" height="100%">
                                  <BarChart   height={300} data={barRating} layout='vertical' margin={{ left: 20, right: 40 }}>
                                    <XAxis type="number" />
                                    <YAxis  type="category"  dataKey="name" axisLine={false} tickLine={false} width={70} tick={{ fill: '#6B7280', fontSize: 14 }} />
                                    <Bar dataKey="count" fill="#ff8c1a" radius={[0, 4, 4, 0]} barSize={20} />
                                  </BarChart>
                                </ResponsiveContainer>
                                </div>
                        </div>   
                         <div className="divider"></div>
                    <div className='my-20 mx-5'>
                       <h1 className='font-bold md:text-2xl mb-2'>Description : </h1> 
                       <p>{singleApp.description}</p>   
                    </div>        
            </div>
        </div>
    );
};

export default AppsDetail;