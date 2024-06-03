import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const CounterContextProvider = ({children}) => {
    const [num, setNum] = useState();
    return (
        <CounterContext.Provider value={{num, setNum}}>
            {children}
        </CounterContext.Provider>
    )//num, setNum을 children 속 아무데서나 사용할 수 있게 하는 코드
}

// 함수
export const useCounterContext = () => {
    return useContext(CounterContext);
}