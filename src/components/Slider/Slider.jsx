import React, {useRef} from 'react'
import right from "../../img/slider/right.svg"
import left from "../../img/slider/left.svg"
import item1 from "../../img/slider/1.png"
import item2 from "../../img/slider/2.png"
import item3 from "../../img/slider/3.png"
import item4 from "../../img/slider/4.png"
import {Fade} from "react-reveal";
import {Gallery} from "./Gallery";

export const Slider = () => {

    const sliderItems = [
        {title: 'Как все успевать', src: item1 },
        {title: 'Заголовок', src: item2 },
        {title: 'Заголовок', src: item3 },
        {title: 'Заголовок', src: item4 },
    ]

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
