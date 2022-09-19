import React from 'react'
import styles from './header.module.scss'

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <a href={"/"}>Любовницы.нет</a>
                </div>
                <div className={styles.line} />
                <div>
                    ТЕ САМЫЕ «ПРОСТО ЗНАКОМЫЕ»
                </div>
            </div>
        </>
    )
}

export default Header