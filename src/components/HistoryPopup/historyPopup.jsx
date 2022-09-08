import React from 'react'
import style from './historyPopup.module.scss'

const HistoryPopup = ({onShowHide}) => {
    return (
        <>
            <div className={ style.popupShow }>
                <div className={ style.fon } onClick={ () => onShowHide("onCloseHistory") }/>
                <div className={ style.popup }>
                    <div className={ style.popupBlock }>
                        <div>
                            <h1>=(</h1>
                            <h2>
                                Сервер перегружен. <br/>
                                Попробуйте позже. <br/>
                                Приносим извинения за неудобства.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HistoryPopup