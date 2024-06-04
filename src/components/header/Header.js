import React, {useContext} from 'react'
import {DarkTheme, Nav} from '../index.js'
import {DarkThemeContext} from '../../context/DarkThemeContext'
import style from './Header.module.css'

const Header = () => {
  const { isDark } = useContext(DarkThemeContext);
  return (
    <header style={{
      backgroundColor : isDark ? "black" : "white", 
      color : isDark ? "white" : "black" 
    }}>

      <h1>logo</h1>
      <Nav />
      <DarkTheme />
    </header>
  )
}

export default Header