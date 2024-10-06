import WorkTogether from '../WorkTogether/WorkTogether'
import style from './contentBanner.module.css'
import img from '../../images/Clip path group.png'

const ContentBanner = () => {

    return(
        <div className={style.contentBanner}>
            <div className={style.stunning__text}>
                <span className={style.stunning__text_span}>Stunning Projects by</span>
                <h2 className={style.stunning__text_my__name}>VADIM VORONIN</h2>
            </div>
           <img src={img} alt="" />
            <WorkTogether />

        </div>
    )
}

export default ContentBanner