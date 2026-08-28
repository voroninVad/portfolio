
import './App.css'
 import Header from './components/Header/Header'
 import { Routes, Route, useLocation } from "react-router-dom";
 import Footer from './components/Footer/Footer'
import { createContext, Dispatch, useEffect, useState } from 'react'
import Home from './pages/home';
import About from './pages/about';

type TypeContext ={
  theme: string
  setTheme: Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = createContext<TypeContext | null>(null)
function App() {
const [theme, setTheme] = useState("dark")

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);
  return (
    <div className={`container ${theme}`}>
      <ThemeContext.Provider value={{theme,setTheme}}>
      <Header />
      <Routes>
        <Route  path="/portfolio" element={<Home />} />
        <Route  path="/about" element={<About />} />
      </Routes>
      <Footer /> 
      </ThemeContext.Provider>
    </div>
  )
}

export default App
