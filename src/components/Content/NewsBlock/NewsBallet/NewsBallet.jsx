import React from 'react'
import shape from "../../../../img/content/posters/Shape.svg"


export const NewsBallet = () => {
    return (
        <div className="news-ballet">
            <div className="news-ballet__title">
                <span>Ох, уж этот балет</span>
            </div>
            <div className="news-ballet__button">
                <div className="news-ballet__button-wrap">
                    <span className="news-ballet__button-link">смотреть</span>
                    <div className="news-ballet__button-image">
                        <img src={shape} alt="#"/>
                    </div>
                </div>
            </div>
        </div>
    )
}