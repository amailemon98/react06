import React, { useEffect } from 'react'
import { useBooleanContext } from '../../context/BooleanContext'
import './Sidebar.css'

const Sidebar = () => {
    const {bool, setBool} = useBooleanContext();

    // const mySetBool = () =>{
    //     setBool(!bool);
    // }

    // //fetch
    // useEffect(()=>{
    //   mySetBool()
    // }, []) //맨처음 켜졌을때 한번만 호출하라  

  return (
    <aside className={bool ? "active" : ""}>
      <button onClick={()=>{setBool(!bool)}}>open</button>
    </aside>
  )
}

export default Sidebar