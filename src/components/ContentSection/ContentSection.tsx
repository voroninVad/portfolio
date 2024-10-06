import style from './contentSection.module.css'
import imgSection from '../../images/imgSection.png'
import LinkSocial from '../LinkSocial/LinkSocial'

const ContentSection = () =>{
    return(
        <div className={style.container}>
            <div className={style.section__img}>
                <img src={imgSection} alt="" />
            </div>
            <div className={style.content}>
                <div className={style.introduction}>
                    <h5 className={style.title}>
                        <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5 0L22.2577 17.1716L39 20L22.2577 22.8284L19.5 40L16.7423 22.8284L0 20L16.7423 17.1716L19.5 0Z" fill="#AFA1F7" />
                        </svg>
                        Introduction
                    </h5>
                    <p className={style.description}>
                    Every year, technology takes an increasingly important place in our lives, and watching this progress, I couldn’t help but think about my place in this exciting world. My interest in programming began as a simple hobby - I always loved to understand how things work. The first experiments with code opened up a whole world of possibilities for me, where I could create my own projects and solve problems that would have seemed impossible.
                    </p>
                </div>
                <div className={style.contantInfo}>
                    <h5 className={style.title}>
                        <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5 0L22.2577 17.1716L39 20L22.2577 22.8284L19.5 40L16.7423 22.8284L0 20L16.7423 17.1716L19.5 0Z" fill="#AFA1F7" />
                        </svg>
                        Contact Information
                    </h5>
                    <div className={style.contacts}>
                        <div className={style.contacts__email_phone}>
                            <div className={style.constact}>
                                <h6>Email</h6>
                                <a href='mailto:vadimvoronin831@gmail.com'>vadimvoronin831@gmail.com
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 0.25L16.5 0.25C16.6989 0.25 16.8897 0.329018 17.0303 0.46967C17.171 0.610322 17.25 0.801088 17.25 1V12.25C17.25 12.6642 16.9142 13 16.5 13C16.0858 13 15.75 12.6642 15.75 12.25V2.81066L2.03033 16.5303C1.73744 16.8232 1.26256 16.8232 0.96967 16.5303C0.676777 16.2374 0.676777 15.7626 0.96967 15.4697L14.6893 1.75L5.25 1.75C4.83579 1.75 4.5 1.41421 4.5 1C4.5 0.585787 4.83579 0.25 5.25 0.25Z" fill="white" />
                                    </svg>
                                </a>
                                
                            </div>
                            <div className={style.constact}>
                                <h6>Phone Number</h6>
                                <a href='tel:+79779449105'>89779449105
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 0.25L16.5 0.25C16.6989 0.25 16.8897 0.329018 17.0303 0.46967C17.171 0.610322 17.25 0.801088 17.25 1V12.25C17.25 12.6642 16.9142 13 16.5 13C16.0858 13 15.75 12.6642 15.75 12.25V2.81066L2.03033 16.5303C1.73744 16.8232 1.26256 16.8232 0.96967 16.5303C0.676777 16.2374 0.676777 15.7626 0.96967 15.4697L14.6893 1.75L5.25 1.75C4.83579 1.75 4.5 1.41421 4.5 1C4.5 0.585787 4.83579 0.25 5.25 0.25Z" fill="white" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className={style.contacts__link}>
                           <LinkSocial />
                           <div className={style.link__work}>
                            <div className="sectionBtn">
                                <a href="http://" target="_blank" rel="noopener noreferrer">Let’s Work</a>
                            </div>
                            <div className="sectionBtn">
                                <a href="http://" target="_blank" rel="noopener noreferrer">Download CV</a>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentSection