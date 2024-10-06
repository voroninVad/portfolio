import Slider from '../Slider/Slider'
import style from './vadim.module.css'

const Vadim = ()=>{
    return(
        <div className={style.container}>
            <div className={style.name}>
                <span>VADIM</span>
            </div>
            <Slider />
        </div>
    )
}

export default Vadim