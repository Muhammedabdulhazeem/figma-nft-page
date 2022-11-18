import React, { useEffect } from 'react'
import MoreFrom from '../components/MoreFrom'
import lgImg from '../assets/images/lg-img.png'
import singleImage from '../assets/images/single-image.png'
import chart from '../assets/images/chart.png'
import like from '../assets/icons/like-circle.svg'
import copy from '../assets/icons/copy.svg'
import enlarge from '../assets/icons/enlarge.svg'
import share from '../assets/icons/share.svg'
import mf2 from '../assets/images/mf1.png'
import useModal from '../hooks/useModal'

const Single = () => {
  const { url, setShowModal } = useModal()

  // To Start at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className='mb-[130px] mt-[80px]'>
        <div className='flex border-2 border-gray-200 rounded-[20px] items-center w-fit p-[24px] relative mx-auto'>
          <div className='w-[530px] h-[709px] mr-[94px] relative'>
            <img src={url} alt="pic" className='w-full h-full border-2 border-white rounded-[50px]'/>
            <img src={enlarge} alt="enlarge" onClick={() => setShowModal(true)} className='absolute bottom-4 left-[50%] translate-x-[-50%] cursor-pointer'/>
          </div>
          <div className='absolute top-8 right-0 space-y-4 translate-x-[50%]'>
            <img src={like} alt="like" /> 
            <img src={copy} alt="copy" />
            <img src={share} alt="share" />
          </div>

          <div className='mr-[70px]'>
            <h1 className='text-[35px] leading-[100%] font-[600] mb-3'>Dui accumsan leo <br /> vestibulum ornare</h1>
            <p className='text-[16px] leading-[150%] font-[400] text-[#7780A1] mb-3'>Ut amet vulputate faucibus vitae semper eget auctor. Diam <br /> tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>

            <div className='flex mb-[30px]'>
              <div className='flex mr-[34px]'>
                <img src={singleImage} alt="pic" />
                <div className='ml-3'>
                  <p className='text-[14px] text-[#7780A1] leading-[150%] font-[400]'>Creator</p>
                  <span>@brook_sim</span>
                </div>
              </div>
              <div className='flex'>
                <img src={singleImage} alt="pic" />
                <div className='ml-3'>
                  <p className='text-[14px] text-[#7780A1] leading-[150%] font-[400]'>Collection</p>
                  <span>@brook_sim</span>
                </div>
              </div>
            </div>

            <div className=' border-2 w-fit border-gray-200 rounded-[20px] px-[40px] py-[32px] mb-[25px]'>
              <div className='flex justify-between items-center mb-[20px]'>
                <div>
                  <span className='text-[14px] text-[#7780A1] leading-[150%] font-[400]'>Current Price</span>
                  <p className='text-[48px] leading-[100%] font-[600]'>5.22 <span className='text-[24px]'>ETH</span></p>
                </div>
                <div className='space-y-[5px]'>
                  <span className='text-[14px] text-[#7780A1] leading-[150%] font-[400]'>Time left</span>
                  <p className='text-[24px] leading-[100%] font-[600]'>22:59 min</p>
                  <span className='text-[14px] text-[#7780A1] leading-[150%] font-[400]'>(01.01.2022 - 01:40:47)</span>
                </div>
              </div>
              <button className='w-[415px] h-[52px] my-account rounded-[12px]'>Place a bid</button>
            </div>

            <img src={chart} alt="chart" className='h-[200px]' />
          </div>
        </div>
      </div>

      <MoreFrom/>
    </div>
  )
}

export default Single