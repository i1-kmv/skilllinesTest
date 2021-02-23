import React from 'react'
import {Link} from "react-scroll"


export const MenuItem = (props) => {
    return (
        <li className={props.liClassName}>
            <Link to={props.href} spy={true}
                  className={props.linkClassName}
                  smooth={true}
                  offset={-70}
                  duration={1500}
            >
                {props.title}
            </Link>
        </li>
    )
}