import React, {useRef} from 'react'
import right from "../../img/slider/right.svg"
import left from "../../img/slider/left.svg"
import {Fade} from "react-reveal"
import {Gallery} from "./Gallery"

export const Slider = () => {

    const carousel = useRef(null)

    return (
        <Fade bottom>
            <div className="slider">
                <div className="container">
                    <div className="slider-block">
                        <div onClick={() => carousel.current && carousel.current.slideNext()} className="slider-arrow__right">
                            <img src={right} alt=""/>
                        </div>
                        <Gallery carousel={carousel}/>
                        <div onClick={() => carousel.current && carousel.current.slidePrev()} className="slider-arrow__left">
                            <img src={left} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
