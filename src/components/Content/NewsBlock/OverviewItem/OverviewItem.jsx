import React from 'react'
import itemFlag from "../../../../img/content/news/items/item-flag.svg";
import view from "../../../../img/content/news/overwievs/view.svg";
import comments from "../../../../img/content/news/overwievs/comments.svg";


export const OverviewItem = (props) => {
    return (
        <div className="news-overview__item">
            <div className="news-overview__item-image">
                <img className="news-overview__item-image-picture"
                     src={props.background} alt="#"/>
                <div className="news-overview__item-onhover">
                    <div className="news-overview__item-onhover-flag">
                        <img src={itemFlag} alt="#"/>
                    </div>
                    <div className="news-overview__item-onhover-info">
                        <div className="news-overview__item-onhover-info-views">
                            <img src={view} alt="#"/>
                            <span>37</span>
                        </div>
                        <div className="news-overview__item-onhover-info-comments">
                            <img src={comments} alt=""/>
                            <span>2</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news-overview__item-title">
                <span>
                    {props.title}
                </span>
            </div>
            <div className="news-overview__item-subtitle">
                <span>
                    {props.subtitle}
                </span>
            </div>
        </div>
    )
}