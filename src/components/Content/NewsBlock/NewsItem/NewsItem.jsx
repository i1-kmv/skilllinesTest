import React from 'react'
import itemFlag from "../../../../img/content/news/items/item-flag.svg"


export const NewsItem = (props) => {
    return (
        <div className="news-culture__item">
            <div className="news-culture__item-image">
                <img className="news-culture__item-image-item"
                     src={props.src} alt={props.alt}/>
                <div className="news-culture__item-onhover">
                    <img src={itemFlag} alt=""/>
                </div>
            </div>
            <div className="news-culture__item-content">
                <div className="news-culture__item-title">
                  <span>
                      {props.title}
                  </span>
                </div>
                <div className="news-culture__item-subtitle">
                  <span>
                      {props.subtitle}
                  </span>
                </div>
            </div>
        </div>
    )
}