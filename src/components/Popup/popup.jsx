import React from 'react'
import style from './popup.module.scss'
import smile from '../../assets/img/smile.png'
import close from '../../assets/img/close.png'

const Popup = ({toggleValue}) => {
    return (
        <div className={style.popupShow}>
            <div className={style.fon} onClick={() => toggleValue(false)}/>
            <div className={style.popup}>
                <div className={style.close}>
                    <img src={close} alt="close" onClick={() => toggleValue(false)}/>
                </div>
                <div className={style.img}>
                    <img src={smile} alt="smile"/>
                </div>
                <div className={style.text}>
                    <h1>СЕРВЕР ПЕРЕГРУЖЕН</h1>
                    Попробуйте позже. Слишком много
                    любовниц
                </div>
            </div>
        </div>
    )
}

export default Popup