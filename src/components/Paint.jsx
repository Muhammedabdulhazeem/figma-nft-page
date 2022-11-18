import React from 'react'
import paint from '../assets/images/paint.png'

const Paint = () => {
  return (
    <div className=' flex justify-center'>
        <div className='flex items-center w-[80%] justify-between relative'>
            <div>
                <span className='text-[#BBC0D0] font-[500] text-[15px] '>Overline</span>
                <h1 className='font-[600] text-[64px] leading-[100%] mb-[32px] '>Sapien ipsum <br /> scelerisque <br /> convallis fusce</h1>
                <p className='text-[#7780A1] font-[400] text-[16px] mb-[48px] '>Ut amet vulputate faucibus vitae semper eget auctor. Diam <br /> tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                <div className='flex'>
                    <button className='my-account w-[140px] h-[50px] rounded-[12px] mr-[16px]'>Get Started</button>
                    <button className='contact border-2 border-[#7780A1] rounded-[12px] w-[140px] h-[50px] '>Learn More</button>
                </div>
            </div>

            <div className='relative left-16'>
                <img src={paint} alt="paint" className='scale-90 ' />
            </div>
        </div>
    </div>
  )
}

export default Paint