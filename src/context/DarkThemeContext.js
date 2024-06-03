import { createContext, useState } from "react";

export const DarkThemeContext = createContext();//알아서 컴포넌트 만들음 = <DarkThemeContext></DarkThemeContext>

//컴포넌트 만들기
export const DarkThemeContextProvider = ({children}) => {

    const [isDark, setIsDark] = useState(false);

    return (
        <DarkThemeContext.Provider value={{isDark, setIsDark}}>
            {children}
        </DarkThemeContext.Provider>
    )
}
// export default {DarkThemeContext, DarkThemeContextProvider}; //같은 효과