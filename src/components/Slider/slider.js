import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
//import "swiper/css/navigation"

import "./slider.scss"
//import "swiper/css/bundle"


import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 } from '../../assets/img/girls'

import { Navigation } from "swiper"

export default function Slider() {
    return (
        <>
            <div className="swiper-button-prev-unique" />
            <div className="swiper-button-next-unique" />
            <Swiper
                //slidesPerView={4}
                spaceBetween={30}
                slidesPerGroup={1}
                breakpointsBase={"swiper"}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={{
                    nextEl: '.swiper-button-next-unique, .swiper-button-next-unique-mobile',
                    prevEl: '.swiper-button-prev-unique, .swiper-button-prev-unique-mobile'
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1
                    },
                    800: {
                        slidesPerView: 2
                    },
                    1200: {
                        slidesPerView: 4
                    }
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="img">
                        <img src={ img1 } alt="Маша"/>
                    </div>
                    <div className="text">
                        <h2>Маша, 37 лет.</h2>
                        Нянчила наших детей. <br/>
                        Как выяснилось, не только их.
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="img">
                        <img src={ img2 } alt="Галина"/>
                    </div>
                    <div className="text">
                        <h2>Галина, 33 года.</h2>
                        Была записана у мужа как “Лёха Ламинат”.
                        А у нас никогда не было ламината.
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="img">
                        <img src={ img3 } alt="Светлана"/>
                    </div>
                    <div className="text">
                        <h2>Светлана, 41 год.</h2>
                        Может и не любовница, но могла бы ей быть. Взгляд слишком хитрый.
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="img">
                        <img src={ img4 } alt="Валя"/>
                    </div>
                    <div className="text">
                        <h2>Валя</h2>
                        Предлагала мне деньги, чтобы я сама ушла <br/> от мужа. Деньги брала у него же.
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="img">
                        <img src={ img5 } alt="Анфиса"/>
                    </div>
                    <div className="text">
                        <h2>Анфиса, 34-36.</h2>
                        Лайкает все фотки моего
                        парня, считаю, что она тоже должна тут быть. Проверьте лайки своих парней anfissa1988
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="img">
                        <img src={ img6 } alt="Марина"/>
                    </div>
                    <div className="text">
                        <h2>Марина, 40 лет.</h2>
                        Страна должна знать в лицо таких “великих” семейных психологов
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="img">
                        <img src={ img7 } alt="Паша"/>
                    </div>
                    <div className="text">
                        <h2>Паша, 35.</h2>
                        Друг моего мужа. Да и такое бывает!!!!!!
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="img">
                        <img src={ img8 } alt="Тварь"/>
                    </div>
                    <div className="text">
                        <h2>Тварь</h2>
                        возраст не спрашивала.
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="img">
                        <img src={ img9 } alt="Алена"/>
                    </div>
                    <div className="text">
                        <h2>Алена, 36.</h2>
                        Моя старшая сестра. Видимо, когда родители говорили, что у нас все общее -
                        она не так поняла.
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="img">
                        <img src={ img10 } alt="Тварь"/>
                    </div>
                    <div className="text">
                        <h2>аташа, 35 лет.</h2>
                        Уводила мужа все 10 лет нашего брака. Увела. Целеустремленная.
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}