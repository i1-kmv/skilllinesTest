import React from 'react'


export const MenuItem = (props) => {
    return (
        <li className="navbar-menu__item">
            <a href={props.href} className="navbar-menu__link">
                {props.title}
            </a>
        </li>
    )
}