import React from 'react';
import downloadimg from '../../assets/icon-downloads.png'
import ratingimg from '../../assets/icon-ratings.png'
import { toast } from 'react-toastify';
const InstallAppCard = ({app,handleRemove}) => {
               const formatDownloads = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
                        return num.toString();
};

      const totalStats = app.ratings.reduce((acc, curr) => {
                    const starValue = parseInt(curr.name); 
  
                       acc.totalScore += starValue * curr.count;
                      acc.totalCount += curr.count;
  
                     return acc;
           }, { totalScore: 0, totalCount: 0 }); 
      const average = totalStats.totalScore / totalStats.totalCount;

     const handleClick = (i) => {
        handleRemove(i);
        toast("App Uninstalled Succesfully")
     }
    return (
        <div>
            <div className='p-2.5 max-w-550 flex items-center justify-between shadow-sm mx-auto mt-4'>
            <div className='flex items-center'>
                <img className='w-20 h-20 p-3.5 rounded-lg' src={app.image} alt="" />
           <div className='ml-1.5'>
                           <span className='font-bold text-xl'>{app.title}</span>
                           <div className='flex gap-3 items-center ' > 
                               <div className='flex items-center gap-2 p-1.5'>
                                                            <img className='h-4 w-4' src = {downloadimg} alt="" />
                                                           <p className='text-[#00D390] font-bold text-lg'><span className=''>
                                   {formatDownloads(app.downloads)}</span></p>
                                  </div>
                                 <div className='flex items-center gap-2 p-1.5'>
                                    <img className='h-4 w-4' src = {ratingimg} alt="" />
                                     <p className='text-[#FF8811] font-bold text-lg'><span className=''>
                                   {average.toFixed(1)}</span></p>
                                 </div>
                            <div>
                                 <p className='md:text-lg text-[#627382]'>{app.size} MB</p> </div>                      
                           </div>
            </div>
              
            </div>
           <button onClick={()=>handleClick(app.id)} className='btn btn-success'>Delete</button>
        </div>
        </div>
    );
};

export default InstallAppCard;