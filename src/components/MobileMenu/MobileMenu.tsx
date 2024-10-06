
import { NavLink } from "react-router-dom";
import './menuMobile.css'

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
         <NavLink to="/portfolio" className='mobile-nav-item'>
           Portfolio
         </NavLink>
       </nav>
     </div>
     );
}
 
export default MobileMenu;