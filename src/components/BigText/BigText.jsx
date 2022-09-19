import React from 'react'
import Marquee from 'react-fast-marquee'

const BigText = () => {
    return (
        <div className={ "marqueeBlock" }>
            <Marquee speed={ 100 } gradient={ false } pauseOnHover={true}>
                { Array.from({length: 10}, (_, i) =>
                    <React.Fragment key={ i }>
                        <div className={ "circle" }/>
                        <div>ОТКРОЕМ ПОЛНУЮ БАЗУ 3 ОКТЯБРЯ!</div>
                    </React.Fragment>) }
            </Marquee>
        </div>
    )
}

export default BigText