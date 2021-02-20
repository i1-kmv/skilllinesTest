import React from 'react'


export const FooterItem = (props) => {
    return(
        <li className="footer-menu__item">
            <a href={props.href} className="footer-menu__link">
                {props.title}
            </a>
        </li>
    )
}