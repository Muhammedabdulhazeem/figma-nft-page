import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/logo.svg'
import vector3 from '../assets/icons/vector3.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between px-[40px] items-center pt-[28px]'>
        {/* <img src={logo} alt="logo" /> */}
        <Link to='/home'>
          <p className='flex font-[700] text-[32px] leading-[45px]'>
            <img src={vector3} alt="vector" className='mr-[19px]'/>
            NFT Market
          </p>
        </Link>

        <div className='flex text-[#7780A1] space-x-[64px]'>
            <span>Auctions</span>
            <span>Roadmap</span>
            <span>Discover</span>
            <span>Community</span>
        </div>

        <div>
            <button className='border-2 border-[#7780A1] rounded-[12px] w-[110px] h-[40px] mr-[16px] text-[#7780A1] hover:scale-105 contact'>Contact</button>
            <button className='w-[145px] h-[40px] rounded-[12px] hover:scale-105 my-account text-white'>My account</button>
        </div>
    </div>
  )
}

export default Navbar