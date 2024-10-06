import { Dispatch, FC } from 'react'
import style from './headerSection.module.css'

type Props = {
    nameSection: string,
    text: string,
    textBtn: string,
    btn: string,
    valuePos: number,
    setValue: Dispatch<React.SetStateAction<number>>
}

const HeaderSection: FC<Props> = ({nameSection, text, textBtn,btn,valuePos,setValue}) =>{
    const handleClick = (scrl: number) =>{
        
        setValue(valuePos + scrl)
        if(valuePos === 0 && scrl == 100){
            setValue(0)
        }
        else if(valuePos === -300 && scrl == -100){
            setValue(-300)
        }
    }

    return(
        <div className={style.container}>
            <div className={style.title}>
                <span>{nameSection}</span>
                <h4>{text}</h4>
            </div>
            {btn && <div className={style.scrollBtn}>
                <label htmlFor="" onClick={() => handleClick(100)}>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.25 8.5L12.75 17L21.25 25.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </label>
                <label htmlFor="" onClick={() => handleClick(-100)}>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.75 8.5L21.25 17L12.75 25.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </label>
                </div>}
                {textBtn && 
                    <div className="sectionBtn">
                        <a href="">{textBtn}</a>
                    </div>
                }
            
        </div>
    )
}

export default HeaderSection