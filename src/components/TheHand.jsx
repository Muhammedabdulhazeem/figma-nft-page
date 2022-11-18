import React from 'react'
import pleat from '../assets/icons/pleat.svg'
import theHand from '../assets/images/the-hand.png'
import darkBg from  '../assets/images/dark-bg.png'

const TheHand = () => {
  return (
    <div>
        <div className='w-fit relative'>
            <div className='relative'>
                <img src={pleat} alt="pleat" className='w-[140px] relative bottom-[-6px] left-[-3px]'/>
                <div className='bg-[#060714] w-[347px] h-[700px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] flex flex-col justify-end pl-[30px]'>
                    <p className='font-[600] text-[24px] leading-[125%] text-white mb-[10px]'>Get started creating <br /> & selling your NFTs</p>
                    <span className='text-[#7780A1] font-[400] text-[14px] leading-[150%] mb-[38px] '>Nunc gravida faucibus netus feugiat <br /> tellus, viverra massa feugiat. Mi est sit.</span>

                    <button className='my-account w-[90%] h-[52px] text-white rounded-[12px] mb-[40px]'>Get Started</button>
                </div>
            </div>
            <img src={theHand} alt="hand" className='absolute top-[-2rem] right-0'/>
        </div>
    </div>
  )
}

export default TheHand