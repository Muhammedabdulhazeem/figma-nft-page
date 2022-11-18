import './App.css';
import { MdOutlineLightMode } from 'react-icons/md'
import { MdOutlineDarkMode } from 'react-icons/md'
import Cover from './pages/Cover';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useState } from 'react';
import Single from './pages/Single';
import Modal from './components/Modal';
import lgImg from './assets/images/lg-img.png'

function App() {
  const [dark, setDark] = useState(false)
  // const [showModal, setShowModal] = useState(false)
  // const [imgUrl, setImgUrl] = useState(lgImg)

  // const displayModal = (imageUrl) => {
  //   setShowModal(true)
  //   setImgUrl(imageUrl)
  // }

  return (
    <BrowserRouter>
      <div className={dark ? 'text-white bg-[#060714]' : "text-black bg-white"}>
        <Modal/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Cover dark={dark} />} />
          <Route path='/home' element={<Home dark={dark} />} />
          <Route path='/single' element={<Single />} />
        </Routes>
        <Footer />

        <div onClick={() => setDark(!dark)} style={{border: dark ? "2px solid white" : "2px solid black"}} className='fixed bottom-8 right-8 z-[10000] h-[50px] w-[50px]  border-2 border-black dark:border-white dark:border-2 flex items-center justify-center rounded-[10px]'>
          {dark ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={dark ? "white" : "currentColor"} class="h-[30px] w-[30px]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            : <MdOutlineDarkMode className='h-[30px] w-[30px]' />}
        </div>
      </div>
    </BrowserRouter>
  );

  // return (
  //   <div>
  //     <Single />
  //   </div>
  // );
}

export default App;
