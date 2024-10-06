import style from './banner.module.css'
import ContentBanner from "../ContentBanner/ContentBanner"
import Slider from "../Slider/Slider"

const Banner = () =>{
    return(
        <div className="banner">
            <ContentBanner />
            <Slider />
            <div className={style.banner__img}></div>
        </div>
    )
}

export default Banner