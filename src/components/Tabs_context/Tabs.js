import React from 'react'
import TabsBtn from './TabsBtn'
import TabContent from './TabContent'
import { CounterContextProvider } from '../../context/CounterContext'

const Tabs = () => {
  return (
    <CounterContextProvider>
        <div>
            <TabsBtn />
            <TabContent />
        </div>
    </CounterContextProvider>
  )// 이 안에서는 num, setNum을 마음대로 쓸 수 있다
}

export default Tabs