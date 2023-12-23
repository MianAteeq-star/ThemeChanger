import React, { createContext, useContext } from 'react';

 export const ThemeContext = createContext({
    darkTheme:()=>{},
    lightTheme:()=>{},
    themeMode: "light"
 })
 



export const ThemeContextProvider = ThemeContext.Provider


export default function useThemeContext(){

    return useContext(ThemeContext)
}
