import React from 'react'
import circles from '../assets/icons/head-circles.svg'
import darkCircles from '../assets/icons/dark-circles.svg'
import squares from '../assets/icons/squares.svg'
import logoText from '../assets/icons/logo-text.svg'
import searchBar from '../assets/icons/search-bar.svg'
import logoTypes from '../assets/icons/logotypes.svg'
import vector1 from '../assets/icons/vector1.svg'
import vector2 from '../assets/icons/vector2.svg'


const NewNft = ({ dark }) => {
  return (
    <div className='h-[800px] relative'>
        <img src={dark ? darkCircles : circles} alt="circles" className='absolute top-0 bottom-0 right-0 left-0 h-full w-full'/>
        <img src={squares} alt="squares" className='z-20 absolute'/>

        <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
            {/* <img src={logoText} alt="logo-text" /> */}
            <div className='text-center relative'>
              <span className='text-[15px] leading-[18px] text-[#7780A1] font-[500] mb-[30px]'>Non Fungible Tokens</span>
              <div className='text-[120px] leading-[100%] font-[600] relative mb-[37px]'>
                <p className='flex relative left-[-25px]'>
                  A new NFT
                  <img src={vector1} alt="vector" className='relative bottom-[-7px] ml-[12px]'/>
                </p>
                <p className='flex relative right-[-25px]'>
                  <img src={vector2} alt="vector" className='relative bottom-[-7px] mr-[12px]'/>
                  Experience
                </p>
              </div>
              <span className='text-[24px] leading-[150%] text-[#7780A1] font-[400]'>Discover, collect and sell</span>
            </div>

            <img src={searchBar} alt="search-bar" />
            <img src={logoTypes} alt="logo-types" />
        </div>
    </div>
  )
}

export default NewNft