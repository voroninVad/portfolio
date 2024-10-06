import style from './portfolio.module.css'
import project from "../../data/data.json"
import Project from '../LinkProject/Project'
import { FC } from 'react'

type Props = {
    value:number
}

const Portfolio: FC<Props> = ({value})=>{
    return(
        <div className={style.container} >
            {project.project.map((proj) =>{
                return <Project image={proj.img} name={proj.name} date={proj.date} url={proj.url} pos={value} key={proj.id}/>
            })}
        </div>
    )
}

export default Portfolio