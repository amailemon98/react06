import React, {useContext} from 'react'
import {DarkThemeContext} from '../../context/DarkThemeContext';

// const DarkTheme = ({isDark, setIsDark}) => {
//   return (
//     <button onClick={()=>{setIsDark(!isDark)}}> ThemeChange </button>
//   )
// }

const DarkTheme = () => {
  const { isDark, setIsDark } = useContext(DarkThemeContext);
  return (
    <button onClick={()=>{setIsDark(!isDark)}}> ThemeChange </button>
  )
}

export default DarkTheme