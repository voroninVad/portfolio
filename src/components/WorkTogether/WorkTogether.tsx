import style from './workTogwther.module.css'

const WorkTogether = ()=>{
    return(
        <div className={style.link__work_together}>
            <h3 className={style.work__together}>Let’s 
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3125 5.1875L24.375 5.1875C24.6236 5.1875 24.8621 5.28627 25.0379 5.46209C25.2137 5.6379 25.3125 5.87636 25.3125 6.125V20.1875C25.3125 20.7053 24.8928 21.125 24.375 21.125C23.8572 21.125 23.4375 20.7053 23.4375 20.1875V8.38833L6.28791 25.5379C5.9218 25.904 5.3282 25.904 4.96209 25.5379C4.59597 25.1718 4.59597 24.5782 4.96209 24.2121L22.1117 7.0625L10.3125 7.0625C9.79473 7.0625 9.375 6.64277 9.375 6.125C9.375 5.60723 9.79473 5.1875 10.3125 5.1875Z" fill="white" />
                    </svg>
            </h3>
            <h3 className={style.work__together}>work together</h3>
        </div>
    )
}

export default WorkTogether