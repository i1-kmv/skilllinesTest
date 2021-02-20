import React from 'react'
import right from "../../img/slider/right.svg"
import left from "../../img/slider/left.svg"
import item1 from "../../img/slider/1.png"
import item2 from "../../img/slider/2.png"
import item3 from "../../img/slider/3.png"
import item4 from "../../img/slider/4.png"
import {SliderItem} from "./SliderItem/SliderItem";

export const Slider = () => {

    const sliderItems = [
        {title: 'Как все успевать', src: item1 },
        {title: 'Заголовок', src: item2 },
        {title: 'Заголовок', src: item3 },
        {title: 'Заголовок', src: item4 },
    ]

    return (
        <div className="slider">
            <div className="container">
                <div className="slider-block">
                    <div className="slider-arrow__right">
                        <img src={right} alt=""/>
                    </div>
                    <div className="slider-arrow__left">
                        <img src={left} alt=""/>
                    </div>
                    {sliderItems.map((item,index) => {
                        return (
                            <SliderItem key={`${item}_${index}`} title={item.title} src={item.src}/>
                        )
                    })}
                </div>
                <div className="slider-dots">
                    <div className="slider-dots__item slider-dots__item-active"><a href=""
                                                                                   className="slider-dots__item-link"></a>
                    </div>
                    <div className="slider-dots__item"><a href="" className="slider-dots__item-link"></a></div>
                    <div className="slider-dots__item"><a href="" className="slider-dots__item-link"></a></div>
                    <div className="slider-dots__item"><a href="" className="slider-dots__item-link"></a></div>
                    <div className="slider-dots__item"><a href="" className="slider-dots__item-link"></a></div>
                </div>
            </div>
        </div>
    )
}
