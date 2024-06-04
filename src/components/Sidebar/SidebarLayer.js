import React from 'react'
import { BooleanContextProvider } from '../../context/BooleanContext'
import Sidebar from './Sidebar'

const SidebarLayer = () => {
  return (
    <BooleanContextProvider>
        <Sidebar />
    </BooleanContextProvider>
  )
}

export default SidebarLayer