import React from 'react'
import left from "../../img/hero/arrow-left.svg"
import right from "../../img/hero/arrow-right.svg"

export const Hero = (props) => {

    return (
        <div className="hero">
            <div className="hero-block">
                <div className="hero-new">
                        <span className="hero-new__link">
                            новое
                        </span>
                         <span>{props.num}</span>
                </div>
                <div className="hero-title">
                        <span>
                          Подводный отель
                        </span>
                </div>
                <div className="hero-navigation">
                    <div className="hero-navigation__previos">
                        <span onClick={() => props.carousel.current && props.carousel.current.slidePrev()}>Предыдущая</span>
                    </div>
                    <div className="hero-navigation__arrows">
                        <img onClick={() => props.carousel.current && props.carousel.current.slidePrev()} className="hero-navigation__arrows-left" src={left} alt=""/>
                        <img onClick={() => props.carousel.current && props.carousel.current.slideNext()} className="hero-navigation__arrows-right" src={right} alt=""/>
                    </div>
                    <div className="hero-navigation__next">
                        <span onClick={() => props.carousel.current && props.carousel.current.slideNext()}>Следущая</span>
                    </div>
                </div>
                <div className="hero-description">
                        <span>Как известно, Дубай – город контрастов. Самые революционные
                          и фантастические мечты архитекторов способен воплотить в жизнь этот мегаполис, построенный на нефти и за счет нефти
                        </span>
                </div>
            </div>
        </div>
    )
}