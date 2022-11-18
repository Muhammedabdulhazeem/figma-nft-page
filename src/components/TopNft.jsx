import React, { useState } from 'react'
import like from '../assets/icons/like.svg'
import timer from '../assets/icons/timer.svg'
import item1 from '../assets/images/Item1.png'
import item2 from '../assets/images/Item2.png'
import item3 from '../assets/images/Item3.png'
import item4 from '../assets/images/Item4.png'

const TopNft = () => {
    const [showMore, setShowMore] = useState(false)

    return (
        <div className='border-2 border-gray-300 rounded-[20px] w-fit px-[30px] py-[30px]'>
            <div className=''>
                <h1 className='text-[32px] leading-[40px] font-[600] mb-[56px]'>Top NFT at a lower <br /> price</h1>

                <div className='h-[352px] no-scroll'>
                    <div className='flex mb-[16px]'>
                        <img src={item1} alt="item" className='w-[100px] h-[100px] mr-[10px] shadow rounded-[20px] hover:scale-105' />
                        <div className='flex flex-col justify-between'>
                            <p className='text-[16px] leading-[20px] font-[600]'>Vulputate velit viverra <br /> volutpat volutpat tristique</p>
                            <div className='flex justify-between'>
                                <p className='flex text-[12px] items-center'>
                                    <img src={timer} alt="timer" className='mr-[9px]' />
                                    12:15 min
                                </p>
                                <p className='price-bg text-[#2A27C9] font-[600] self text-[12px] leading-[20px] w-fit h-fit px-[8px] py-[3px] rounded-[4px]'>1.01 ETH</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='font-[400] text-[12px] text-[#7780A1] leading-[150%]'>320 people are bidding</p>
                                <p className='flex font-[400] text-[12px] text-[#7780A1] leading-[150%] relative'>
                                    <img src={like} alt="like" className='w-[15px] h-[15px] relative bottom-[-1px] mr-[4px]' />
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex mb-[16px]'>
                        <img src={item3} alt="item" className='w-[100px] h-[100px] mr-[10px] shadow rounded-[20px] hover:scale-105' />
                        <div className='flex flex-col justify-between'>
                            <p className='text-[16px] leading-[20px] font-[600]'>Vulputate velit viverra <br /> volutpat volutpat tristique</p>
                            <div className='flex justify-between'>
                                <p className='flex text-[12px] items-center'>
                                    <img src={timer} alt="timer" className='mr-[9px]' />
                                    12:15 min
                                </p>
                                <p className='price-bg text-[#2A27C9] font-[600] self text-[12px] leading-[20px] w-fit h-fit px-[8px] py-[3px] rounded-[4px]'>1.01 ETH</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='font-[400] text-[12px] text-[#7780A1] leading-[150%]'>320 people are bidding</p>
                                <p className='flex font-[400] text-[12px] text-[#7780A1] leading-[150%] relative'>
                                    <img src={like} alt="like" className='w-[15px] h-[15px] relative bottom-[-1px] mr-[4px]' />
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex mb-[16px]'>
                        <img src={item4} alt="item" className='w-[100px] h-[100px] mr-[10px] shadow rounded-[20px] hover:scale-105' />
                        <div className='flex flex-col justify-between'>
                            <p className='text-[16px] leading-[20px] font-[600]'>Vulputate velit viverra <br /> volutpat volutpat tristique</p>
                            <div className='flex justify-between'>
                                <p className='flex text-[12px] items-center'>
                                    <img src={timer} alt="timer" className='mr-[9px]' />
                                    12:15 min
                                </p>
                                <p className='price-bg text-[#2A27C9] font-[600] self text-[12px] leading-[20px] w-fit h-fit px-[8px] py-[3px] rounded-[4px]'>1.01 ETH</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='font-[400] text-[12px] text-[#7780A1] leading-[150%]'>320 people are bidding</p>
                                <p className='flex font-[400] text-[12px] text-[#7780A1] leading-[150%] relative'>
                                    <img src={like} alt="like" className='w-[15px] h-[15px] relative bottom-[-1px] mr-[4px]' />
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex mb-[16px]'>
                        <img src={item2} alt="item" className='w-[100px] h-[100px] mr-[10px] shadow rounded-[20px] hover:scale-105' />
                        <div className='flex flex-col justify-between'>
                            <p className='text-[16px] leading-[20px] font-[600]'>Vulputate velit viverra <br /> volutpat volutpat tristique</p>
                            <div className='flex justify-between'>
                                <p className='flex text-[12px] items-center'>
                                    <img src={timer} alt="timer" className='mr-[9px]' />
                                    12:15 min
                                </p>
                                <p className='price-bg text-[#2A27C9] font-[600] self text-[12px] leading-[20px] w-fit h-fit px-[8px] py-[3px] rounded-[4px]'>1.01 ETH</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='font-[400] text-[12px] text-[#7780A1] leading-[150%]'>320 people are bidding</p>
                                <p className='flex font-[400] text-[12px] text-[#7780A1] leading-[150%] relative'>
                                    <img src={like} alt="like" className='w-[15px] h-[15px] relative bottom-[-1px] mr-[4px]' />
                                </p>
                            </div>
                        </div>
                    </div>

                    {showMore && (<>
                        <div className='flex mb-[16px]'>
                            <img src={item1} alt="item" className='w-[100px] h-[100px] mr-[10px] shadow rounded-[20px] hover:scale-105' />
                            <div className='flex flex-col justify-between'>
                                <p className='text-[16px] leading-[20px] font-[600]'>Vulputate velit viverra <br /> volutpat volutpat tristique</p>
                                <div className='flex justify-between'>
                                    <p className='flex text-[12px] items-center'>
                                        <img src={timer} alt="timer" className='mr-[9px]' />
                                        12:15 min
                                    </p>
                                    <p className='price-bg text-[#2A27C9] font-[600] self text-[12px] leading-[20px] w-fit h-fit px-[8px] py-[3px] rounded-[4px]'>1.01 ETH</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='font-[400] text-[12px] text-[#7780A1] leading-[150%]'>320 people are bidding</p>
                                    <p className='flex font-[400] text-[12px] text-[#7780A1] leading-[150%] relative'>
                                        <img src={like} alt="like" className='w-[15px] h-[15px] relative bottom-[-1px] mr-[4px]' />
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex mb-[16px]'>
                            <img src={item3} alt="item" className='w-[100px] h-[100px] mr-[10px] shadow rounded-[20px] hover:scale-105' />
                            <div className='flex flex-col justify-between'>
                                <p className='text-[16px] leading-[20px] font-[600]'>Vulputate velit viverra <br /> volutpat volutpat tristique</p>
                                <div className='flex justify-between'>
                                    <p className='flex text-[12px] items-center'>
                                        <img src={timer} alt="timer" className='mr-[9px]' />
                                        12:15 min
                                    </p>
                                    <p className='price-bg text-[#2A27C9] font-[600] self text-[12px] leading-[20px] w-fit h-fit px-[8px] py-[3px] rounded-[4px]'>1.01 ETH</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='font-[400] text-[12px] text-[#7780A1] leading-[150%]'>320 people are bidding</p>
                                    <p className='flex font-[400] text-[12px] text-[#7780A1] leading-[150%] relative'>
                                        <img src={like} alt="like" className='w-[15px] h-[15px] relative bottom-[-1px] mr-[4px]' />
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex mb-[16px]'>
                            <img src={item4} alt="item" className='w-[100px] h-[100px] mr-[10px] shadow rounded-[20px] hover:scale-105' />
                            <div className='flex flex-col justify-between'>
                                <p className='text-[16px] leading-[20px] font-[600]'>Vulputate velit viverra <br /> volutpat volutpat tristique</p>
                                <div className='flex justify-between'>
                                    <p className='flex text-[12px] items-center'>
                                        <img src={timer} alt="timer" className='mr-[9px]' />
                                        12:15 min
                                    </p>
                                    <p className='price-bg text-[#2A27C9] font-[600] self text-[12px] leading-[20px] w-fit h-fit px-[8px] py-[3px] rounded-[4px]'>1.01 ETH</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='font-[400] text-[12px] text-[#7780A1] leading-[150%]'>320 people are bidding</p>
                                    <p className='flex font-[400] text-[12px] text-[#7780A1] leading-[150%] relative'>
                                        <img src={like} alt="like" className='w-[15px] h-[15px] relative bottom-[-1px] mr-[4px]' />
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex mb-[16px]'>
                            <img src={item2} alt="item" className='w-[100px] h-[100px] mr-[10px] shadow rounded-[20px] hover:scale-105' />
                            <div className='flex flex-col justify-between'>
                                <p className='text-[16px] leading-[20px] font-[600]'>Vulputate velit viverra <br /> volutpat volutpat tristique</p>
                                <div className='flex justify-between'>
                                    <p className='flex text-[12px] items-center'>
                                        <img src={timer} alt="timer" className='mr-[9px]' />
                                        12:15 min
                                    </p>
                                    <p className='price-bg text-[#2A27C9] font-[600] self text-[12px] leading-[20px] w-fit h-fit px-[8px] py-[3px] rounded-[4px]'>1.01 ETH</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='font-[400] text-[12px] text-[#7780A1] leading-[150%]'>320 people are bidding</p>
                                    <p className='flex font-[400] text-[12px] text-[#7780A1] leading-[150%] relative'>
                                        <img src={like} alt="like" className='w-[15px] h-[15px] relative bottom-[-1px] mr-[4px]' />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>)}
                </div>

                <button 
                  className='w-full h2-[52px] border-2 border-gray-300 mt-[35px] font-[600] text-[16px] leading-[20px] rounded-[12px] py-[8px] hover:scale-105'
                  onClick={() => setShowMore(!showMore)}
                >{showMore ? "Show me less" : "Show me more"}</button>
            </div>
        </div>
    )
}

export default TopNft