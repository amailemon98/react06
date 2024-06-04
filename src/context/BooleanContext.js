import { createContext, useContext, useState } from "react";

export const BooleanContext = createContext();

export const BooleanContextProvider = ({children}) => {
    const [bool, setBool] = useState();
    return (
        <BooleanContext.Provider value={{bool, setBool}}>
            {children}
        </BooleanContext.Provider>
    )//num, setNum을 children 속 아무데서나 사용할 수 있게 하는 코드
}

// Sidebar, Modal

export const useBooleanContext = () => {
    return useContext(BooleanContext);
}