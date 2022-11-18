import React from 'react'
import CheckOut from './CheckOut';
import pleat from '../assets/icons/pleat.svg'
import theHand from '../assets/images/the-hand.png'
import darkBg from '../assets/images/dark-bg.png'
import TheHand from './TheHand'
import TopNft from './TopNft';

const HandComp = () => {
  return (
    <div className=''>
      <div className='flex items-center space-x-[24px] w-[80%] mx-auto justify-center'>
        <CheckOut />
        <TheHand />
        <TopNft />
      </div>
    </div>
  )
}

export default HandComp