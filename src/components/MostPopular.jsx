import React, { useState } from 'react'
import { MostPopularData } from '../data'
import NftCard from './NftCard'

const MostPopular = () => {
    const [showMore, setShowMore] = useState(false)

  return (
    <div className='flex justify-center'>
        <div className='w-[85%] flex flex-col items-center'>
            <div className='text-center'>
                <span className='text-[15px] leading-[18px] text-[#BBC0D0] font-[500] mb-[16px]'>OVERLINE</span>
                <h2 className='text-[36px] leading-[45px] font-[600] mb-[35px]'>Most popular live auctions</h2>
                <div className='flex text-[16px] leading-[20px] text-[#7780A1] font-[600] justify-evenly mb-[72px]'>
                    <p className='border-2 border-gray-200 rounded-[8px] px-[8px] py-[8px]'>Architecture</p>
                    <p className='border-2 border-gray-200 rounded-[8px] px-[8px] py-[8px]'>Photography</p>
                    <p className='border-2 border-gray-200 rounded-[8px] px-[8px] py-[8px]'>Game</p>
                    <p className='border-2 border-gray-200 rounded-[8px] px-[8px] py-[8px]'>Music</p>
                </div>
            </div>

            <div className='flex justify-between w-full mb-[2rem]'>
                {MostPopularData.map((data, index) => (
                    <NftCard each={data} index={index} boxWidth="200px" imageHeight="300px" imageWidth="200px" smaller={true}/>
                ))}
            </div>
            {showMore && (<div className='flex justify-between w-full mb-[2rem]'>
                {MostPopularData.map((data, index) => (
                    <NftCard each={data} index={index} boxWidth="200px" imageHeight="300px" imageWidth="200px" smaller={true}/>
                ))}
            </div>)}

            <button 
                className='w-[172px] h-[52px] border-[3px] border-gray-300 rounded-[12px] mt-[3rem]'
                onClick={() => setShowMore(!showMore)}
            >{showMore ? "Show me less" : "Show me more"}</button>
        </div>
    </div>
  )
}

export default MostPopular