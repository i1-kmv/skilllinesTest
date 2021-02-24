import React from 'react'
import shape from "../../../img/mobile/Shape.svg"
import {Link} from "react-scroll"


export const MobileMenuItem = (props) => {
    return (
        <Link to={props.href}
              className="mobile-menu__link"
        >
            <li className="mobile-menu__item" onClick={props.href != '#' ? props.setMobileModeHandler : () => {}}>
                {props.item}
                <img src={shape} alt="" className="mobile-menu__image"/>
            </li>
        </Link>


    )
}