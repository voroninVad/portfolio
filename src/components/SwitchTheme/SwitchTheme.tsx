import { useContext } from 'react'
import style from './switchTheme.module.css'
import { ThemeContext } from '../../App'

const SwitchTheme = ()=>{
    const currentTheme = useContext(ThemeContext)
    const handleClick = () =>{
        if(currentTheme?.theme === "dark"){
            currentTheme.setTheme("light")
        }else{
            currentTheme?.setTheme("dark")
        }  
    }
    return(
        <div onClick={handleClick} className={style.container}>
            {currentTheme?.theme}            
        </div>
    )
}

export default SwitchTheme