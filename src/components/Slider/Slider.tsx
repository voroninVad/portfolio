import style from './slider.module.css'
import Slide from '../Slide/Slide'
import skills from '../../data/data.json'

const Slider = () => {
    return(
        <div className={style.banner}>
            <div className={style.slider}>           
                <div className={style.slider__items}>
                    <div className={style.items}>
                    {skills.skils.map((skill) =>{
                        return <Slide data = {skill.name} key={skill.id}/>
                    })}
                    </div>
                </div>
                <div className={style.slider__items}>
                    <div className={style.items}>
                    {skills.skils.map((skill) =>{
                        return <Slide data = {skill.name} key={skill.id}/>
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider