import React from 'react'
import left from "../../img/hero/arrow-left.svg"
import right from "../../img/hero/arrow-right.svg"

export const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="hero-block">
                    <div className="hero-new">
                        <span className="hero-new__link">
                            новое
                        </span>
                    </div>
                    <div className="hero-title">
                        <span>
                          Подводный отель
                        </span>
                    </div>
                    <div className="hero-navigation">
                        <div className="hero-navigation__previos">
                            <span>Предыдущая</span>
                        </div>
                        <div className="hero-navigation__arrows">
                            <img className="hero-navigation__arrows-left" src={left} alt=""/>
                            <img className="hero-navigation__arrows-right" src={right} alt=""/>
                        </div>
                        <div className="hero-navigation__next">
                            <span>Следущая</span>
                        </div>
                    </div>
                    <div className="hero-description">
                        <span>Как известно, Дубай – город контрастов. Самые революционные
                          и фантастические мечты архитекторов способен воплотить в жизнь этот мегаполис, построенный на нефти и за счет нефти
                        </span>
                    </div>
                    <div className="hero-dots">
                        <div className="hero-dots__item hero-dots__item-active"><span className="hero-dots__item-link"/></div>
                        <div className="hero-dots__item"><span href="#" className="hero-dots__item-link"/></div>
                        <div className="hero-dots__item"><span href="#" className="hero-dots__item-link"/></div>
                        <div className="hero-dots__item"><span href="#" className="hero-dots__item-link"/></div>
                        <div className="hero-dots__item"><span href="#" className="hero-dots__item-link"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}