import React, { useContext } from 'react'
import {DarkThemeContext} from '../context/DarkThemeContext.js'

// 1.
// const Home = (props) => {
//   return (
//     <div>{props.children}</div>
//   )
// }

// 2.
// const Home = ({children}) => {
//   console.log(children);
//   // children
//   // 1. 문자열, 숫자 기본 데이터 타입은 기본으로 받는다.
//   // 2. 요소를 한 개 넘기면 객체
//   // 3. 요소를 2개 이상 넘기면 배열
//   return (
//     <div>{children}</div>
//   )
// }

// 3.
// const Home = ({children}) => {
//   const { isDark } = useContext(DarkThemeContext); // {isDark, setIsDark} 객체로 가져온다.
//   return (
//     <div style={{
//       backgroundColor : isDark ? "black" : "white", 
//       color : isDark ? "white" : "black" 
//     }}>{children}</div>
//   )
// }

const Home = () =>{
  return (
    <section>home</section>
  )
}

export default Home