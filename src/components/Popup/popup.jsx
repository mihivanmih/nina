import React from 'react'
import style from './popup.module.scss'
import Slider from '../slider/slider'

const Popup = ({onShowHide}) => {
    return (
        <div className={style.popupShow}>
            <div className={style.fon} onClick={() => onShowHide("onClose")}/>
            <div className={style.popup}>
                <div className={style.popupBlock}>
                    <div className={style.leftBlock}>
                        <div onClick={() => onShowHide("onShowHistory")} className={style.historyButton}>Рассказать историю</div>
                        <div className={style.textButtom}>Откроем полную базу 3 октября!</div>
                    </div>
                    <div className={style.rightBlock}><Slider /></div>
                </div>
            </div>
        </div>
    )
}

export default Popup