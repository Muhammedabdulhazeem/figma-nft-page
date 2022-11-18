import React, { useState } from 'react'
import { MoreFromData } from '../data'
import NftCard from './NftCard'

const MostPopular = () => {
    const [showMore, setShowMore] = useState(false)

  return (
    <div className='flex justify-center'>
        <div className='w-[85%] flex flex-col items-center'>
            <div className='text-center'>
                <span className='text-[15px] leading-[18px] text-[#BBC0D0] font-[500] mb-[16px]'>OVERLINE</span>
                <h2 className='text-[36px] leading-[45px] font-[600] mb-[35px]'>More form this author</h2>
            </div>

            <div className='flex justify-between w-full mb-[2rem]'>
                {MoreFromData.map((data, index) => (
                    <NftCard each={data} index={index} boxWidth="200px" imageHeight="300px" imageWidth="200px" smaller={true}/>
                ))}
            </div>
            {showMore && (<div className='flex justify-between w-full mb-[2rem]'>
                {MoreFromData.map((data, index) => (
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