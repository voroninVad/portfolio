import { useState } from 'react'
import HeaderSection from '../HeaderSection/HeaderSection'
import Portfolio from '../Portfolio/Portfolio'
import style from './portfolioSection.module.css'

const PortfolioSection = ()=>{
    const [value, setValue] = useState(0)
    return(
        <div className={style.container} id='portfolio'>
            <HeaderSection valuePos ={value} setValue={setValue} nameSection="portfolio" text="Explore My work." btn="true" textBtn="All Works &rarr;"  />
            <Portfolio value={value} />
        </div>
    )
}

export default PortfolioSection