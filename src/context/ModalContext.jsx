import React, { useState } from 'react'
import { createContext, useReducer } from 'react';

export const ModalContext = createContext()

export const ModalProvider = ({children}) => {
  const [url, setUrl] = useState("")
  const [showModal, setShowModal] = useState(false)

//   const displayModal = (imageUrl) => {
//     setUrl(imageUrl)
//   }

  return (
    <ModalContext.Provider value={{url, setUrl, showModal, setShowModal}}>
        {children}
    </ModalContext.Provider>
  )
}
