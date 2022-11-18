import React from 'react'
import vector3 from '../assets/icons/vector3.svg'
import logo from '../assets/icons/logo.svg'
import facebook from '../assets/icons/facebook.svg'
import linkedin from '../assets/icons/linkedin.svg'
import github from '../assets/icons/github.svg'
import twitter from '../assets/icons/twitter.svg'
import signin from '../assets/images/signin.png'

const Footer = () => {
    return (
        <div className='flex justify-center mt-[100px] pb-[100px]'>
            <div className='w-[80%] h-[390px] grid grid-cols-3 rounded-[20px] border-2 border-[#E2E2ED] overflow-hidden'>
                <div className='flex flex-col justify-between items-start relative p-[48px]'>
                    {/* <img src={logo} alt="logo" className=''/> */}
                    <p className='flex font-[700] text-[28px] leading-[35px]'>
                        <img src={vector3} alt="vector" className='mr-[19px]' />
                        NFT Market
                    </p>
                    <div className='space-x-[40px]'>
                        <span>Support</span>
                        <span>Term of service</span>
                        <span>Lisence</span>
                    </div>
                </div>

                <div className='flex flex-col justify-between relative border-[#E2E2ED] border-x-2 p-[48px]'>
                    <div className='font-[600] text-[16px] leading-[20px] space-y-[16px]'>
                        <p>Auction</p>
                        <p>Road Map</p>
                        <p>Discover</p>
                        <p>Community</p>
                    </div>

                    <button className='my-account w-[145px] h-[52px] text-white rounded-[12px] hover:scale-105'>My account</button>

                    <div className='flex space-x-[25px]'>
                        <img src={facebook} alt="facebook" />
                        <img src={linkedin} alt="linkedin" />
                        <img src={github} alt="github" />
                        <img src={twitter} alt="twitter" />
                    </div>
                </div>

                <div className='flex flex-col justify-between items-center relative p-[48px]'>
                    <p className='text-[16px] leading-[150%] text-[#7780A1] font-[400]'>Nibh volutpat, aliquam id sagittis elementum. <br /> Pellentesque laoreet velit, sed egestas in. Id <br /> nam semper dolor tellus vulputate eget turpis. </p>

                    <img src={signin} alt="signin" className='scale-150 relative bottom-[-5rem]' />
                </div>
            </div>
        </div>
    )
}

export default Footer