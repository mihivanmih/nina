import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

import "./slider.scss"
import "swiper/css/bundle"


import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 } from '../../assets/img/girls'

import { Pagination, Navigation } from "swiper"

export default function Slider() {
    return (
        <>
            <Swiper pagination={ {
                dynamicBullets: true,
            } }
                    navigation={ true }
                    modules={ [Pagination, Navigation] }
                    loop={ true }
                    className="mySwiper">
                
                <SwiperSlide>
                    <div className="text">
                        <h1>Маша, 37 лет.</h1>
                        Нянчила наших детей. <br/>
                        Как выяснилось, не только их.
                    </div>
                    <div className="img">
                        <img src={ img1 } alt="Маша"/>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="text">
                        <h1>Галина, 33 года.</h1>
                        Была записана у мужа как “Лёха Ламинат”. <br/>
                        А у нас никогда не было ламината.
                    </div>
                    <div className="img">
                        <img src={ img2 } alt="Галина"/>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="text">
                        <h1>Светлана, 41 год.</h1>
                        Может и не любовница, но могла бы ей быть. Взгляд слишком хитрый.
                    </div>
                    <div className="img"><img src={ img3 } alt="Светлана"/></div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="text">
                        <h1>Валя</h1>
                        Предлагала мне деньги, чтобы я сама ушла <br/> от мужа. Деньги брала у него же.
                    </div>
                    <div className="img"><img src={ img4 } alt="Валя"/></div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="text">
                        <h1>Анфиса, 34-36.</h1>
                        Лайкает все фотки моего парня, считаю, что она тоже должна тут быть.. <br/>
                        Проверьте лайки своих парней @anfissa1988
                    </div>
                    <div className="img"><img src={ img5 } alt="Анфиса"/></div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="text">
                        <h1>Марина, 40 лет.</h1>
                        Страна должна знать в лицо таких “великих” семейных психологов
                    </div>
                    <div className="img"><img src={ img6 } alt="Марина"/></div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="text">
                        <h1>Паша, 35.</h1>
                        Друг моего мужа. Да и такое бывает!!!!!!
                    </div>
                    <div className="img"><img src={ img7 } alt="Паша"/></div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="text">
                        <h1>Тварь</h1>
                        возраст не спрашивала.
                    </div>
                    <div className="img"><img src={ img8 } alt="Тварь"/></div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="text">
                        <h1>Алена, 36.</h1>
                        Моя старшая сестра. Видимо, когда родители говорили, что у нас все общее -
                        она не так поняла.
                    </div>
                    <div className="img"><img src={ img9 } alt="Алена"/></div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="text">
                        <h1>аташа, 35 лет.</h1>
                        Уводила мужа все 10 лет нашего брака. Увела. Целеустремленная.
                    </div>
                    <div className="img"><img src={ img10 } alt="Тварь"/></div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}