import React from 'react'
import {MenuItem} from "../Navbar/MenuItem/MenuItem";
import {FooterItem} from "./FooterItem/FooterItem";

export const Footer = () => {

    const menuItems = [
        {title: ' НОВОСТИ', href: '#'},
        {title: ' ОБЗОРЫ', href: '#'},
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
                    <h1 className="footer-title">Новости культуры</h1>
                    <div className="footer-menu">
                        <ul className="footer-menu__items">
                            {menuItems.map((item, index) => {
                                return (
                                    <FooterItem href={item.href} title={item.title} key={`${item}_${index}`}/>
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