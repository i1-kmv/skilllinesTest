import React from 'react'
import close from "../../../img/mobile/close.svg"
import {MobileMenuItem} from "./MobileMenuItem"



export const MobileMenu = (props) => {

    const mobileMenuItems = ['НОВОСТИ', 'ОБЗОРЫ', 'МУЗЫКА', 'АРХИТЕКТУРА', 'КИНО', ' ТЕАТР', 'ЛИТЕРАТУРА', 'РЕЛИГИЯ', 'ЖИВОПИСЬ' ]

    const setMobileModeHandler = () => props.setMobileMenuMode(false)

   return (
       <div className="mobile-menu" >
           <div className="mobile-menu__close" onClick={setMobileModeHandler}>
               <img src={close} alt=""/>
           </div>
           <ul className="mobile-menu__items">
               {mobileMenuItems.map((item, index) => {
                   return (
                       <MobileMenuItem item={item} key={`${item}_${index}`}/>
                   )
               })}
           </ul>
       </div>
   )
}