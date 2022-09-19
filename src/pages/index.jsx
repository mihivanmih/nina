import React from 'react'
import 'normalize.css'
import Header from '../layouts/header/heder'


const IndexPage = ({toggleValue}) => {
    return (
        <div className={ "container" }>
            <Header />
            <div className="textIndex">
                <h1>МУЖ УШЁЛ <br/> К&#160;ЛЮБОВНИЦЕ</h1>
                <p>Оставил меня одну с тремя детьми…
                    и двумя бывшими мужьями. Я создала
                    этот сайт, чтобы мы, жены, смогли хоть
                    как-то отомстить</p>
                <span>Нина</span>
                <div onClick={ () => toggleValue(false) } className="loading loadingPl">+ ЗАГРУЗИТЬ ФОТО ЛЮБОВНИЦЫ</div>
            </div>
            <div className="mobileDiv">
                <div onClick={ () => toggleValue(false) } className="loading">+ ЗАГРУЗИТЬ ФОТО ЛЮБОВНИЦЫ</div>
            </div>
        </div>
    )
}

export default IndexPage