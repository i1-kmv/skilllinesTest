import React from 'react'
import {MobileButton} from "./MobileButton";
import {MobileMenu} from "./MobileMenu/MobileMenu";

export const Mobile = (props) => {

    return (
        <>
            {!props.mobileMenuMode && <MobileButton setMobileMenuMode={props.setMobileMenuMode}/>}
            { props.mobileMenuMode && <MobileMenu setMobileMenuMode={props.setMobileMenuMode}/>}
        </>
    )
}