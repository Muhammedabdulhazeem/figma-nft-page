import React from 'react'
import smiley from '../assets/images/smiley.png'
import habicon1 from '../assets/icons/habicon1.svg'
import habicon2 from '../assets/icons/habicon2.svg'

const Habitant = () => {
  return (
    <div className='flex justify-center'>
        <div className='flex items-center w-[80%] justify-between relative'>
            <div className='relative left-[-75px]'>
                <img src={smiley} alt="smiley" />
            </div>

            <div>
                <span className='text-[#BBC0D0] font-[500] text-[15px] '>Overline</span>
                <h1 className='font-[600] text-[64px] leading-[100%] mb-[32px] '>Habitant tristique <br /> aliquam in vel <br /> scelerisque</h1>
                <p className='text-[#7780A1] font-[400] text-[16px] mb-[48px] '>Ut amet vulputate faucibus vitae semper eget auctor. Diam <br /> tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                {/* <img src={habiIcons} alt="icons" /> */}
                <div className='flex'>
                    <div className='mr-[52px]'>
                        <img src={habicon1} alt="habicon" className='mb-[24px]'/>
                        <p className='text-[20px] leading-[25px] font-[600]'>Sollicitudin sapien</p>
                        <p className='text-[16px] leading-[150%] text-[#7780A1] font-[400]'>Cursus fermentum</p>
                    </div>
                    <div>
                        <img src={habicon2} alt="habicon" className='mb-[24px]'/>
                        <p className='text-[20px] leading-[25px] font-[600]'> Pulvinar metus</p>
                        <p className='text-[16px] leading-[150%] text-[#7780A1] font-[400]'>Nunc sed</p>
                    </div>
                </div>
                <div className='flex mt-[50px]'>
                    <button className='my-account w-[140px] h-[50px] rounded-[12px] mr-[16px]'>Get Started</button>
                    <button className='contact border-2 border-[#7780A1] rounded-[12px] w-[140px] h-[50px] '>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Habitant