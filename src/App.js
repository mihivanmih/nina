import IndexPage from './pages'
import React from 'react'
import styles from './scss/app.scss'
import Bottom from './pages/bottom'
import { BigText, Popup, Slider } from './components'
import { Modal } from './hooks/Modal/Modal'
import Footer from './layouts/footer/footer'

function App() {
    
    const [popup, toggleValue] = Modal(false)
    
    return (
        <>
            { popup && <Popup toggleValue={ toggleValue }/> }
            <div className="App">
                <IndexPage toggleValue={ toggleValue }/>
            </div>
            <div className={ "bottomIndex" }>
                <Bottom toggleValue={ toggleValue }/>
                <BigText/>
                <Footer />
            </div>
        </>
    )
}

export default App
