import React, { useContext } from 'react'
import { useCounterContext } from '../../context/CounterContext';
// import { CounterContext } from '../../context/CounterContext'

const TabsBtn = () => {
    // const myCount = useContext(CounterContext); 
    // myCount = {num, setNum} 모양
    const {num, setNum} = useCounterContext(); 
    // const myCount = useCounterContext(); 
    // console.log(myCount);
  return (
    <div style={{display: "flex", gap : "20px"}}>
        {
            [1,2,3].map((item, index)=>(
              <button onClick={()=>{setNum(index)}}>btn{index}</button>
              // <button onClick={()=>{myCount.setNum(index)}}>btn{index}</button>
            ))
        }
    </div>
  )
}

export default TabsBtn