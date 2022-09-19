import React from 'react'
import { Slider } from '../components'

const Bottom = ({toggleValue}) => {
    return (
        <div className={ "container containerSlider" }>
                <div className="sliderBlockTitle">
                    <div className={ "titleSlider" }>Знайте врага в&#160;лицо…</div>
                    <div onClick={ () => toggleValue(false) } className="loading">ВСЕ ИСТОРИИ</div>
                </div>
                <div className="swiper-button-prev-unique-mobile" />
                <div className="swiper-button-next-unique-mobile" />
                <div className={ 'sliderBlock' }>
                    <Slider/>
                </div>
                <div onClick={ () => toggleValue(false) } className="loadingMobile">ВСЕ ИСТОРИИ</div>
        </div>
    )
}

export default Bottom