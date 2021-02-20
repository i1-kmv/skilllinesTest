import React from 'react'
import shape from "../../../img/mobile/Shape.svg"


export const MobileMenuItem = (props) => {
    return (
        <li className="mobile-menu__item">
            <a href="#" className="mobile-menu__link">
                {props.item}
            </a>
            <img src={shape} alt="" className="mobile-menu__image"/>
        </li>
    )
}