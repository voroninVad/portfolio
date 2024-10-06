import { useState } from 'react';
import SwitchTheme from '../SwitchTheme/SwitchTheme'
import './header.css'
import burger from '../../images/burger.png'
import { NavLink } from "react-router-dom";
import MobileMenu from '../MobileMenu/MobileMenu';
const Header = () =>{

    const [menuOpen, setNemuOpen] = useState(false)
    const handleMenu = ()=>{
        setNemuOpen(!menuOpen)
    }
    return (
        <header className='header'>
            <div className='header__container'>
                <div className='logo__name'>
                    vadim
                </div>
                <div className='nav__menu'>
                    <NavLink to="/" className='nav_item'>
                        Home
                    </NavLink>
                    <NavLink to="/about" className='nav_item'>
                        About
                    </NavLink>
                    <SwitchTheme />
                </div>
                <div className="sectionBtn">
                    <a href="" className="header__my-contant">Contact Me</a>
                </div>
                <button onClick={handleMenu} className='burger'>
                    <img src={burger} alt="" />
                </button>
                {menuOpen && <MobileMenu />}
            </div>
        </header>
    )
}

export default Header