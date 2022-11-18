import React from 'react'
import mf1 from '../assets/images/mf1.png'
import useModal from '../hooks/useModal'


const Modal = () => {
    const {url, showModal, setShowModal} = useModal()
  return (
    <>
        {showModal && (<div className='modal'>
            <img src={url} alt="modal pic" className='w-[530px] h-[709px] rounded-[50px]'/>
            <span className='cancel' onClick={() => setShowModal(false)}>X</span>
        </div>)}
    </>
  )
}

export default Modal