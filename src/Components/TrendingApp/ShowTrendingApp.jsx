import React from 'react';
import downloadimg from '../../assets/icon-downloads.png'
import ratingimg from '../../assets/icon-ratings.png'
const ShowTrendingApp = ({app}) => {
    const {image,id,title,downloads,ratings} = app ; 
   
                const totalStats = ratings.reduce((acc, curr) => {
                    const starValue = parseInt(curr.name); 
  
                       acc.totalScore += starValue * curr.count;
                      acc.totalCount += curr.count;
  
                     return acc;
           }, { totalScore: 0, totalCount: 0 });

        const average = totalStats.totalScore / totalStats.totalCount;
        const download = parseInt(downloads,10)
        
        const formatDownloads = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
};
    return (
        <div>
            <div  className="card bg-base-100 md:w-96 shadow-sm ">
                
                  <figure className='mx-2.5 my-2 bg-gray-100 rounded-2xl bg-gray-100'>
                   <img      className='md:h-40 md:w-50'
                             src={image}
                             alt="Shoes" />
                      </figure>
                                <div className="card-body">
                         <h2 className="card-title">{title}</h2>
                         <div className='flex items-center justify-between '>
                            <div className='flex items-center gap-2 bg-[#F1F5E8] p-1.5'>
                              <img className='h-4 w-4' src = {downloadimg} alt="" />
                             <p className='text-[#00D390] font-bold text-lg'><span className=''>
                            {formatDownloads(download)}</span></p>
                         </div>
                         <div>
                            <div className='flex items-center gap-2 bg-[#FFF0E1] p-1.5'>
                              <img className='h-4 w-4' src = {ratingimg} alt="" />
                             <p className='text-[#FF8811] font-bold text-lg'><span className=''>
                            {average.toFixed(1)}</span></p>
                         </div>
                         </div>
                         </div>

 </div>
</div>
        </div>
    );
};

export default ShowTrendingApp;