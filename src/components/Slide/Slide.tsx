import { FC } from 'react'
import style from './slide.module.css'
import iconSlide from '../../images/IconSlider.png'

type Props = {
    data: string
}

const Slide:FC<Props> = ({data}) =>{
    return(
           <div className={style.item}>
            <img src={iconSlide} alt="icon" />
            {data}
            </div>
    )
}

export default Slide