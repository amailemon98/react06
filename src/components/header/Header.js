import React, {useContext} from 'react'
import {DarkTheme} from '../index.js'
import {DarkThemeContext} from '../../context/DarkThemeContext'

const Header = () => {
  const { isDark } = useContext(DarkThemeContext);
  return (
    <div style={{
      backgroundColor : isDark ? "black" : "white", 
      color : isDark ? "white" : "black" 
    }}>

      <h1>Header</h1>
      {/* <DarkTheme isDark={isDark} setIsDark={setIsDark} /> */}
      <DarkTheme />
    </div>
  )
}

export default Header