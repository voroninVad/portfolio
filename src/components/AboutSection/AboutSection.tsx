import { useState } from 'react'
import ContentSection from '../ContentSection/ContentSection'
import HeaderSection from '../HeaderSection/HeaderSection'
import style from './aboutSection.module.css'

const AboutSection = ()=>{
    const [value, setValue] = useState(0)
    return(
        <div className={style.container} id='about'>
            <HeaderSection valuePos ={value} setValue={setValue} nameSection="about" text="i am vadim" btn="" textBtn="Know More &rarr;"/>
            <ContentSection />
        </div>
    )
}

export default AboutSection