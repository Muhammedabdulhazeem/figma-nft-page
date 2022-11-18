import React, { useState } from 'react'
import { LatestAuctionData } from '../data';
import like from '../assets/icons/like.svg'
import timer from '../assets/icons/timer.svg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import NftCard from './NftCard';

const Slider = () => {
    const [showMore, setShowMore] = useState(false)

    return (
        <div className='border-2 border-gray-300 rounded-[20px] w-fit px-[30px] py-[30px]'>
            <h1 className='text-[32px] leading-[40px] font-[600] mb-[30px]'>Check out the <br /> hottest Sale offers</h1>
            <div className='w-[300px] relative overflow-hidden'>
                <div className='absolute w-[80px] z-auto top-0 bottom-0 right-0 blur-md bg-gray-200'></div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={1.5}
                    navigation
                    // pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {LatestAuctionData.map((each, index) => (
                        <SwiperSlide>
                            <div className='w-[200px]'>
                                <img src={each.url} alt="biddings" className='rounded-[12px] h-[250px] mt-3 mb-[20px] hover:scale-105' />
                                <h2 className='font-[600] text-[14px] leading-[18px] relative top-[-7px] mb-[5px]'>{each.texts}</h2>
                                <div className='flex items-center justify-between border-b-2 border-gray-200 pb-[15px] mb-[7px]'>
                                    <p className='flex text-[10px]'>
                                        <img src={timer} alt="timer" className='mr-[9px]' />
                                        {each.timeLeft} min left
                                    </p>
                                    <p className='price-bg text-[#2A27C9] font-[600] self text-[12px] leading-[20px] w-fit h-fit px-[12px] py-[4px] rounded-[4px]'>{each.price} ETH</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='font-[400] text-[10px] text-[#7780A1] leading-[150%]'>320 people are bidding</p>
                                    <p className='flex font-[400] text-[12px] text-[#7780A1] leading-[150%] relative'>
                                        <img src={like} alt="like" className='w-[15px] h-[15px] relative bottom-[-1px] mr-[4px]' />
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    {showMore && (LatestAuctionData.map((each, index) => (
                        <SwiperSlide>
                            <div className='w-[200px]'>
                                <img src={each.url} alt="biddings" className='rounded-[12px] h-[250px] mt-3 mb-[20px] hover:scale-105' />
                                <h2 className='font-[600] text-[14px] leading-[18px] relative top-[-7px] mb-[5px]'>{each.texts}</h2>
                                <div className='flex items-center justify-between border-b-2 border-gray-200 pb-[15px] mb-[7px]'>
                                    <p className='flex text-[10px]'>
                                        <img src={timer} alt="timer" className='mr-[9px]' />
                                        {each.timeLeft} min left
                                    </p>
                                    <p className='price-bg text-[#2A27C9] font-[600] self text-[12px] leading-[20px] w-fit h-fit px-[12px] py-[4px] rounded-[4px]'>{each.price} ETH</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='font-[400] text-[10px] text-[#7780A1] leading-[150%]'>320 people are bidding</p>
                                    <p className='flex font-[400] text-[12px] text-[#7780A1] leading-[150%] relative'>
                                        <img src={like} alt="like" className='w-[15px] h-[15px] relative bottom-[-1px] mr-[4px]' />
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )))}
                </Swiper>
            </div>
            <button
                className='w-full h2-[52px] border-2 border-gray-300 mt-[35px] font-[600] text-[16px] leading-[20px] rounded-[12px] py-[8px] hover:scale-105'
                onClick={() => setShowMore(!showMore)}
            >{showMore ? "Show me less" : "Show me more"}</button>
        </div>
    )
}

export default Slider

{/* <NftCard each={each} index={index} boxWidth="212px" imageHeight="355px" smaller={false} /> */ }