import React from 'react'
import AccChild from './AccChild'
import { CounterContextProvider } from '../../context/CounterContext'

const Acc = () => {
  return (
    <CounterContextProvider>
        <div>
            {
                //count를 하위에서 다 쓰겠다는 의미
                [1,2,3].map((item, index) => (<AccChild index={index} item={item} />))
            }
        </div>
    </CounterContextProvider>
  )
}

export default Acc