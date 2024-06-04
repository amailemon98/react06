// 별점 주는 컴포넌트

import React from 'react'
import { useCounterContext } from '../../context/CounterContext'
import { FaStar } from "react-icons/fa6";

const StarRating = ({defaultStar = 10}) => {
    const {num, setNum} = useCounterContext();
    const starAry = []; // 1,2,3,4,5
    
    for(let a = 1; a <= defaultStar ; a++){
      starAry.push(a);
    }
  return (
    <div>
       { // &&는 앞이 참일때 뒤에 실행, 거짓이면 실행 안한다.
        // starAry.length && starAry.toString()
        starAry.map((item, index) => (
          <FaStar onClick={()=>{setNum(item)}} key={item} 
                  style={{color : num >= item ? "red" : "black"}}
          />
        ))
       }
    </div>
  )
}

export default StarRating

// 1. 별의 사용갯수 : 5, 10
// 2. useState => countContext
// 3. event 처리(핸들러)
// 4. 아이콘