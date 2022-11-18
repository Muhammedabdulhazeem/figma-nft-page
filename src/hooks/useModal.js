import React from 'react'
import { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'

const useModal = () => {
    const context = useContext(ModalContext)

    if (context === undefined) {
      throw new Error("useModal() must be used inside a ModalProvider")
    }
  
    return context
}

export default useModal