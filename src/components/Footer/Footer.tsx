import LinkSocial from '../LinkSocial/LinkSocial'
import WorkTogether from '../WorkTogether/WorkTogether'
import style from './footer.module.css'
import leftSvg from '../../images/leftSvg.png'
import rightSvg from '../../images/rightSvg.png'
import { Link } from 'react-router-dom'

const Footer = ()=>{
    return(
        <div className={style.container}>
            <img src={leftSvg} alt="" />
            
            <div className={style.footer}>
                <div className={style.work_nav}>
                    <div className={style.lets_work}>
                        <span>A more meaningful home for photography</span>
                        <WorkTogether />
                    </div>
                    <div className={style.navigation}>
                        <ul>
                            <li><Link to='/portfolio'>HOME</Link></li>
                            <li><Link to="/about#about">About</Link></li>
                            <li><Link to="/portfolio#portfolio">My Work</Link></li>
                        </ul>
                    </div>
                </div>
                    <div className={style.copyright}>
                        <p>
                            <span>Terms & Conditions</span>
                            <span>Privacy Policy</span>
                        </p>
                        <LinkSocial />
                        <span>&#169;  2024 Vadim Voronin Projects. All rights reserved.</span>
                    </div>
                </div>
                <img src={rightSvg} alt="" />
        </div>
    )
}

export default Footer