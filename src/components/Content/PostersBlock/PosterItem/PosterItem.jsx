import React from 'react'
import shape from "../../../../img/content/posters/Shape.svg";



export const PosterItem = (props) => {
    return (
        <div className="poster-item"  style={{backgroundImage: props.background}}>
            <div className="poster-item__title" style={{color: props.title === 'ВОЗДУШНЫЕ ШАРЫ' ? '#1A1C1C' : '#FFFFFF'}}>
                <span>{props.title}</span>
            </div>
            <div className="poster-item__button">
                <div className="poster-item__button-wrap">
                    <a className="poster-item__button-link" href="#">смотреть</a>
                    <div className="poster-item__button-image">
                        <img src={shape} alt="#"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
