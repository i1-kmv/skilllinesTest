import React from 'react'


export const MobileButton = (props) => {

    const setMobileModeHandler = () => props.setMobileMenuMode(true)

    return (
        <div className="mobile" onClick={setMobileModeHandler} >
            <button className="mobile-button ">
                <span className="mobile-button__line"></span>
                <span className="mobile-button__line"></span>
                <span className="mobile-button__line"></span>
            </button>
        </div>
    )
}