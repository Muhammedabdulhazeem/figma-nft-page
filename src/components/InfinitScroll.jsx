import React from 'react'

import { InfinitImages } from '../data'

const InfinitScroll = () => {
  return (
    <div className='overflow-hidden'>
        <div className='relative marquee'>
            <div className='flex justify-center items-center track space-x-[24px] absolute'>
                {InfinitImages.map(image => (
                    <div key={image.url} className='flex flex-col justify-center items-center'>
                        <img src={image.url} alt="picture" />
                        <span>{image.price} ETH</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default InfinitScroll