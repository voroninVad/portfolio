
import { NavLink } from "react-router-dom";
import './menuMobile.css'
import SwitchTheme from "../SwitchTheme/SwitchTheme";

const MobileMenu= () => {
    return ( 
        <div className="mobile-menu" >
        <nav className="mobile-menu__nav">
         <NavLink to="/" className='mobile-nav-item'>
           Home
         </NavLink>
         <NavLink to="/about" className='mobile-nav-item'>
           About
         </NavLink>
         <SwitchTheme />
       </nav>
     </div>
     );
}
 
export default MobileMenu;