import React from 'react'
import style from './AppLayout.module.css'

// Layout, template
const AppLayout = ({children}) => {
  return (
    <div className={style.container}>{children}</div>
  )
}

export default AppLayout