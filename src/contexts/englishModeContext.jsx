import { useContext } from "react"
import { createContext, useState, useEffect } from "react"

const EnglishModeContext = createContext({
    englishMode: false,
    setEnglishMode: () => {}
})

const EnglishModeProvider = ({ children }) => {

  const [englishMode, setEnglishMode] = useState(localStorage.getItem("englishMode"))
  
  localStorage.setItem("englishMode",englishMode)
  useEffect(() => {
    if (localStorage.getItem("englishMode") === "true") {
        setEnglishMode(true)
    } else {
        setEnglishMode(false)
    } 
  }, [])

  return (
    <div className="h-screen">
      <EnglishModeContext.Provider value={{ englishMode, setEnglishMode }}>
      {children}
    </EnglishModeContext.Provider>
    </div>
    
  )
}

const useEnglishModeContext = () => useContext(EnglishModeContext)

export { EnglishModeProvider, useEnglishModeContext}