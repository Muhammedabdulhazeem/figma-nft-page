import React from 'react'
import { LatestAuctionData } from '../data';

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
  return (
    <div>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView= {4}
            navigation
            // pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {LatestAuctionData.map((each, index) => (
                <SwiperSlide>
                    <NftCard each={each} index={index} boxWidth="350px" imageHeight="450px" smaller={false}/>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Slider