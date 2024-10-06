import { useState } from 'react';
import HeaderSection from '../HeaderSection/HeaderSection';
import style from './index.module.css'
import Biography from '../Biography';

const About = () => {
    const [value, setValue] = useState(0)
    return ( 
        <div className={style.container}>
            <HeaderSection valuePos ={value} setValue={setValue} nameSection="about" text="about vadim voronin" btn="" textBtn=""  />
            <div className={style.banner_me}></div>
            <Biography />
        </div>
     );
}
 
export default About;