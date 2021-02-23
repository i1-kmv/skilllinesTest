import React from 'react'
import {Bounce} from "react-reveal"
import {MenuItem} from "../Navbar/MenuItem/MenuItem"


export const Footer = () => {

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
        <div className="footer">
            <div className="container">
                <div className="footer-block">
                    <Bounce><h1 className="footer-title">Новости культуры</h1></Bounce>
                    <div className="footer-menu">
                        <ul className="footer-menu__items">
                            {menuItems.map((item, index) => {
                                return (
                                    <MenuItem href={item.href} title={item.title} key={`${item}_${index}`} liClassName={"footer-menu__item"} linkClassName={"footer-menu__link"}/>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="footer-rights">
                    <span>© 2018 Новости культуры. Все права защищены.</span>
                </div>
            </div>
        </div>
    )
}