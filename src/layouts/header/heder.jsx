import React from 'react'
import { Popup } from '../../components'
import styles from './header.scss'

const Header = ({onShowHide}) => {
    return (
        <>
            <div className={"header"}>Любовницы.нет
                <div onClick={ () => onShowHide("onShow")} className="click">Рассказать историю</div>
            </div>
        </>
    )
}

export default Header