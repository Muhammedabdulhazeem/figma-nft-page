import React from 'react'
import { Link } from 'react-router-dom'
import like from '../assets/icons/like.svg'
import timer from '../assets/icons/timer.svg'
import useModal from '../hooks/useModal'

const NftCard = ({ each: { url, texts, bidders, numOfPeople, likes, price, timeLeft }, index, boxWidth, imageHeight, imageWidth, smaller }) => {
    console.log(boxWidth, imageHeight)
    const {setUrl} = useModal() 

    // const paramsSet = ()

    return (
        <Link to='/single' onClick={() => setUrl(url)}>
            <div key={index} style={{ width: boxWidth }} onClick={() => window.scrollTo(0, 0)} className='flex flex-col relative'>
                <img src={url} style={{ height: imageHeight, width: imageWidth }} alt="biddings" className='rounded-[12px] mb-[20px] mt-3 hover:scale-105' />

                {!smaller && (<div className='price-grid mb-[20px]'>
                    <h2 className='font-[600] text-[18px] leading-[25px]'>{texts}</h2>
                    <p className='price-bg text-[#2A27C9] font-[600] self text-[14px] leading-[20px] w-fit h-fit px-[14px] py-[8px] rounded-[4px]'>{price} ETH</p>
                </div>)}

                {smaller && (<h2 className='font-[600] text-[18px] leading-[25px] relative top-[-7px] mb-[5px]'>{texts}</h2>)}

                {!smaller && (<p className='flex border-b-2 border-gray-200 pb-[25px] mb-[15px]'>
                    <img src={timer} alt="timer" className='mr-[9px]' />
                    {timeLeft} min left
                </p>)}

                {smaller && (<div className='flex items-center justify-between border-b-2 border-gray-200 pb-[25px] mb-[15px]'>
                    <p className='flex text-[12px]'>
                        <img src={timer} alt="timer" className='mr-[9px]' />
                        {timeLeft} min left
                    </p>
                    <p className='price-bg text-[#2A27C9] font-[600] self text-[12px] leading-[20px] w-fit h-fit px-[12px] py-[6px] rounded-[4px]'>{price} ETH</p>
                </div>)}

                <div className='flex items-center justify-between'>
                    {bidders && (<div className='flex relative space-x-[-10px]'>
                        {bidders.map((bidder, index) => (
                            <div key={index}>
                                <img src={bidder} alt="bidders" className='relative' />
                            </div>
                        ))}
                    </div>)}
                    <p className='font-[400] text-[12px] text-[#7780A1] leading-[150%]'>{numOfPeople} people are bidding</p>
                    <p className='flex font-[400] text-[12px] text-[#7780A1] leading-[150%] relative'>
                        <img src={like} alt="like" className='w-[15px] h-[15px] relative bottom-[-1px] mr-[4px]' />
                        {likes}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default NftCard