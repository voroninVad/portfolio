
import './App.css'
 import Header from './components/Header/Header'
 import { Routes, Route } from "react-router-dom";
 import Footer from './components/Footer/Footer'
import { createContext, Dispatch, useState } from 'react'
import Home from './pages/home';
import About from './pages/about';

type TypeContext ={
  theme: string
  setTheme: Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = createContext<TypeContext | null>(null)
function App() {
const [theme, setTheme] = useState("dark")
  return (
    <div className={`container ${theme}`}>
      <ThemeContext.Provider value={{theme,setTheme}}>
      <Header />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
      </Routes>
      <Footer /> 
      </ThemeContext.Provider>
    </div>
  )
}

export default App
