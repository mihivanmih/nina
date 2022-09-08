import React, { useState } from 'react'
import 'normalize.css'
import Header from '../layouts/header/heder'
import { Popup } from '../components'
import HistoryPopup from '../components/HistoryPopup/historyPopup'


const IndexPage = () => {
    
    const [historyShow, setHistoryShow] = useState(false)
    const [popup, setPopup] = useState(false)
    
    const onShowHide = (text) => {
        switch (text) {
            case 'onShowHistory':
                setHistoryShow(true)
                break
            case 'onCloseHistory':
                setHistoryShow(false)
                break
            case 'onShow':
                setPopup(true)
                break
            case 'onClose':
                setPopup(false)
                break
            default:
                break
        }
    }
    
    return (
        <>
            { historyShow && <HistoryPopup onShowHide={ onShowHide }/> }
            { popup && <Popup onShowHide={ onShowHide }/> }
            <Header onShowHide={ onShowHide }/>
            
            <div className="textIndex">
                <p>Муж ушел к любовнице, оставил меня одну с тремя детьми…</p>
                <p>и двумя бывшими мужьями. Уверена, что я не одна, пусть все знаю «врага» в лицо</p>
                <span>НИНА</span>
                <div onClick={ () => onShowHide("onShowHistory")} className="loading">загрузи фото любовницы</div>
            </div>
            
        </>
    )
}

export default IndexPage