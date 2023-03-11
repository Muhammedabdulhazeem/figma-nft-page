import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import cover from '../assets/images/cover.png'

const buttonVariant = {
  final: {
    scale: 1.1,
    transition: {
        duration: 0.5,
        repeatType: "mirror",
        repeat: Infinity,
    }
  }
}


const Cover = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full z-[90000]'>
        <img src={cover} alt="cover" className='h-screen w-screen'/>
        <div className='absolute bottom-[16rem] left-[15rem] text-center'>
            <h1 className='font-bold text-[50px]'><span className='text-[#2A27C9]'>Wel</span>come</h1>
            <Link to='/home'>
              <motion.button 
                className='enter font-[800] text-[30px] px-4 hover:scale-105'
                variants={buttonVariant}
                animate="final"
              >Enter</motion.button>
            </Link>
        </div>
    </div>
  )
}

export default Cover