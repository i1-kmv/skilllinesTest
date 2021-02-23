import React from 'react'
import close from "../../../img/mobile/close.svg"
import {MobileMenuItem} from "./MobileMenuItem"



export const MobileMenu = (props) => {

    const mobileMenuItems = [
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

    const setMobileModeHandler = () => props.setMobileMenuMode(false)

   return (
       <div className="mobile-menu" >
           <div className="mobile-menu__close" onClick={setMobileModeHandler}>
               <img className="mobile-menu__close-img" src={close} alt=""/>
           </div>
           <ul className="mobile-menu__items">
               {mobileMenuItems.map((item, index) => {
                   return (
                       <MobileMenuItem item={item.title} key={`${item}_${index}`} href={item.href} setMobileModeHandler={setMobileModeHandler}/>
                   )
               })}
           </ul>
       </div>
   )
}