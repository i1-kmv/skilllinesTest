import React from 'react'



export const SliderItem = (props) => {
    return (
        <div className="slider-item">
            <img className="slider-item__image " src={props.src} alt="#"/>
            <div className="slider-item__onhover">
                <h6 className="slider-item__onhover-title">
                    {props.title}
                </h6>
                <span href="#" className="slider-item__onhover-button">смотреть</span>
            </div>
        </div>
    )
}