import LinkSocial from '../LinkSocial/LinkSocial'
import WorkTogether from '../WorkTogether/WorkTogether'
import style from './footer.module.css'
import leftSvg from '../../images/leftSvg.png'
import rightSvg from '../../images/rightSvg.png'

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
                            <li><span>HOME</span></li>
                            <li><a href="/#about">About</a></li>
                            <li><a href="/#portfolio">My Work</a></li>
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