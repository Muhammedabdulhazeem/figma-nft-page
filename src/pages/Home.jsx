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
        <NewNft dark={dark}/>
        <LiveAuction/>
        <Paint />
        <HandComp />
        <Habitant />
        <MostPopular/>
        <Cursus  dark={dark}/>
        <InfinitScroll />
    </div>
  )
}

export default Home