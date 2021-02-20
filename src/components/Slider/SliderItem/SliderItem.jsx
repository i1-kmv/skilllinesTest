import React from 'react'
import item1 from "../../../img/slider/1.png";


export const SliderItem = (props) => {
    return (
        <div className="slider-item">
            <img className="slider-item__image " src={props.src} alt="#"/>
            <div className="slider-item__onhover">
                <h6 className="slider-item__onhover-title">
                    {props.title}
                </h6>
                <a href="" className="slider-item__onhover-button">смотреть</a>
            </div>
        </div>
    )
}