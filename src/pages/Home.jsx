import React from 'react'
import Cursus from '../components/Cursus'
import Habitant from '../components/Habitant'
import HandComp from '../components/HandComp'
import InfinitScroll from '../components/InfinitScroll'
import LiveAuction from '../components/LiveAuction'
import MostPopular from '../components/MostPopular'
import NewNft from '../components/NewNft'
import Paint from '../components/Paint'

const Home = ({dark}) => {
  return (
    <div className='space-y-[150px] '>
        {/* <NewNft dark={dark}/>
        <LiveAuction/>
        <Paint />
        <HandComp />
        <Habitant />
        <MostPopular/>
        <Cursus  dark={dark}/>
        <InfinitScroll /> */}

        <div className='border-2 border-black'>


          <div className=' relative mx-auto border-2 border-black h-fit w-fit overflow-hidden m-container  rounded-full'>
            <p className='px-[15px] py-[7px] w-[130px] rounded-full to-trans bg-yellow-400 translate-x-[100%]'>Home</p> 

            <div className='h-[38px] w-[38px] absolute top-0 right-0 flex justify-center items-center rounded-[50%] bg-red-400'>
              <span className='letter'>L</span>
            </div>
          </div>



        </div>
        <div className='h-10 mx-auto w- relative hoverContainer w-20 '>
          <div className='bg-yellow-500 transition-all duration-1000 absolute right-[9px] h-10 rounded-[10px] w-0 overflow-hidden hello'>hello</div>
          <div className="rounded-full w-10 h-10 absolute right-0 top-0 bg-green-300 "></div>
        </div>

    </div>
  )
}

export default Home