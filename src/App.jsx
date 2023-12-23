import { useEffect, useState } from 'react'
import { ThemeContextProvider } from './context/ThemeContext'
import ToggleBtn from './components/ToggleBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("dark")



  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }

  useEffect(() => {
  const event = document.querySelector("html"  ).classList
  event.remove("dark","light")
  event.add(themeMode)
  }, [themeMode])
  
  return (
    <>
   <ThemeContextProvider value={{themeMode, lightTheme,darkTheme}}>
   <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ToggleBtn/> 
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

   </ThemeContextProvider>
    </>
  )
}

export default App
