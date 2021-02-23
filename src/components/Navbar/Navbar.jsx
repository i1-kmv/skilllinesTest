import React from 'react'
import {MenuItem} from "./MenuItem/MenuItem"


export const Navbar = () => {

    const menuItems = [
        {title: ' НОВОСТИ', href: 'news'},
        {title: ' ОБЗОРЫ', href: 'overviews'},
        {title: ' МУЗЫКА', href: '#'},
        {title: ' АРХИТЕКТУРА', href: '#'},
        {title: ' КИНО', href: '#'},
        {title: ' ТЕАТР', href: '#'},
        {title: ' ЛИТЕРАТУРА', href: '#'},
        {title: ' РЕЛИГИЯ', href: '#'},
        {title: '  ЖИВОПИСЬ', href: '#'},
    ]

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar-block">
                    <h1 className="navbar-title">Новости культуры</h1>
                    <div className="navbar-menu">
                        <ul className="navbar-menu__items">
                            {menuItems.map((item, index) => {
                                return (
                                    <MenuItem href={item.href} title={item.title} key={`${item}_${index}`}
                                              liClassName={"navbar-menu__item"} linkClassName={"navbar-menu__link"}/>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}