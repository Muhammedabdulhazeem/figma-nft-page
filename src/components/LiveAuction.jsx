import React from 'react'
import Slider from './Slider'

const LiveAuction = () => {
  return (
    <div>
        <h1 className='text-center text-[36px] leading-[45px] font-[600] mb-[60px]'>Latest live auctions</h1>
        <div>
            <Slider />
        </div>
    </div>
  )
}

export default LiveAuction