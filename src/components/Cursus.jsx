import React from 'react'
import digits from '../assets/icons/digits.svg'
import cusicon1 from '../assets/icons/cusicon1.svg'
import cusicon2 from '../assets/icons/cusicon2.svg'
import cusicon3 from '../assets/icons/cusicon3.svg'
import cusicon4 from '../assets/icons/cusicon4.svg'
import folder from '../assets/images/folder.png'
import folderDark from '../assets/images/folderdark.png'

const Cursus = ({ dark }) => {
    return (
        <div className='flex justify-center'>
            <div className='w-[80%] relative'>
                {/* <img src={digits} alt="digits" className='m-auto mb-[150px]' /> */}
                <div className='flex space-x-[50px] relative left-[50%] translate-x-[-25%] mb-[154px]'>
                    <div className='flex flex-col items-center'>
                        <img src={cusicon1} alt="cusicon" className='mb-[16px]' />
                        <p className='text-[48px] leading-[115%] font-[600]'>300k</p>
                        <span className='text-[16px] text-[#7780A1] leading-[150%] font-[400]'>User Active</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={cusicon2} alt="cusicon" className='mb-[16px]' />
                        <p className='text-[48px] leading-[115%] font-[600]'>52,2k</p>
                        <span className='text-[16px] text-[#7780A1] leading-[150%] font-[400]'>Artworks</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={cusicon3} alt="cusicon" className='mb-[16px]' />
                        <p className='text-[48px] leading-[115%] font-[600]'>17,5k</p>
                        <span className='text-[16px] text-[#7780A1] leading-[150%] font-[400]'>Artist</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={cusicon4} alt="cusicon" className='mb-[16px]' />
                        <p className='text-[48px] leading-[115%] font-[600]'>35.58</p>
                        <span className='text-[16px] text-[#7780A1] leading-[150%] font-[400]'>ETH Spent</span>
                    </div>
                </div>

                <div className='relative'>
                    <img src={dark ? folderDark : folder} alt="folder" />
                    {/* <img src={folderDark} alt="folder" /> */}

                    <div className='absolute left-[6rem] top-[6rem]'>
                        <span className='text-[#BBC0D0] font-[500] text-[15px] '>Overline</span>
                        <h1 className='font-[600] text-[48px] leading-[100%] mb-[32px] '>Cursus vitae <br /> sollicitudin donec <br /> nascetur. Join now</h1>
                        <p className='text-[#7780A1] font-[400] text-[16px] mb-[48px] '>Donec volutpat bibendum justo, odio aenean congue est <br /> porttitor ut. Mauris vestibulum eros libero amet tincidunt.</p>
                        <div className='flex'>
                            <button className='my-account w-[140px] h-[50px] rounded-[12px] mr-[16px]'>Get Started</button>
                            <button className='contact border-2 border-[#7780A1] rounded-[12px] w-[140px] h-[50px] '>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cursus