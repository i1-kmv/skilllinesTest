import React from 'react'
import leonov from "../../../img/content/news/items/1.png"
import itemFlag from "../../../img/content/news/items/item-flag.svg"
import talkWithWriters from "../../../img/content/news/items/2.png"
import saintPatric from "../../../img/content/news/items/3.png"
import overViews1 from "../../../img/content/news/overwievs/1.png"
import view from "../../../img/content/news/overwievs/view.svg"
import comments from "../../../img/content/news/overwievs/comments.svg"
import overViews2 from "../../../img/content/news/overwievs/2.png"
import overViews3 from "../../../img/content/news/overwievs/3.png"
import overViews4 from "../../../img/content/news/overwievs/4.png"
import previous from "../../../img/content/news/pagination/previous.svg"
import next from "../../../img/content/news/pagination/next.svg"
import shape from "../../../img/content/posters/Shape.svg"
import {NewsPoster} from "./NewsPoster/NewsPoster";
import {NewsItem} from "./NewsItem/NewsItem";
import {OverviewItem} from "./OverviewItem/OverviewItem";
import {NewsBallet} from "./NewsBallet/NewsBallet";


export const NewsBlock = () => {

    const newsItems = [
        {title: ' Открытие нового памятника Евгению Леонову', subtitle: '10 сентября в 15:00 был открыт памятник писателю', src: leonov, alt: 'Евгений Леонов'},
        {title: 'Беседы с писателями', subtitle: 'Русские писатели говорят о важности искусства', src: talkWithWriters, alt: 'Беседы с писателями'},
        {title: 'День и ночь св. Патрика: встреча старых друзей', subtitle: 'Не Джойсом единым живет Ирландия!', src: saintPatric, alt: 'День святого Патрика'},
    ]

    const overviewItems = [
        {title:   '«Шальные годы» Монпарнаса', subtitle: 'В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»', background: overViews1 },
        {title:   'Анатомия за 30 секунд', subtitle: 'Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос', background: overViews2 },
        {title:   'Русские балетные сезоны', subtitle: 'В Новом Иерусалиме стартовал необычный культурно-развлекательный спектакль, который покажут в новом театре', background: overViews3 },
        {title:   'Сферические чудаки', subtitle: 'Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»', background: overViews4},
    ]

    return (
        <div className="news-block">
            <div className="news-title">
                <span>НОВОСТИ</span>
            </div>
            <div className="news-culture">
                <NewsPoster/>
                <div className="news-culture__items">
                    {newsItems.map((item,index) => {
                        return <NewsItem
                            key={`${item}_${index}`}
                            src={item.src} alt={item.alt}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    })}
                </div>
            </div>
            <div className="news-overview">
                <div className="news-overview__title news-title">
                    <span>ОБЗОРЫ</span>
                </div>
                <div className="news-overview__items">
                    {overviewItems.map((item,index) => {
                    return (
                        <OverviewItem key={`${item}_${index}`} title={item.title} subtitle={item.subtitle} background={item.background}/>
                    )
                })}
                </div>
            </div>
            <div className="news-pagination">
                <div className="news-pagination__previous">
                    <img src={previous} alt="previous"/>
                </div>
                <ul className="news-pagination__items">
                    <li className="news-pagination__item "><a className="news-pagination__item-link "
                                                              href="">1</a></li>
                    <li className="news-pagination__item"><a className="news-pagination__item-link"
                                                             href="">2</a></li>
                    <li className="news-pagination__item"><a className="news-pagination__item-link"
                                                             href="">3</a></li>
                    <li className="news-pagination__item"><a className="news-pagination__item-link"
                                                             href="">4</a></li>
                    <li className="news-pagination__item"><a className="news-pagination__item-link"
                                                             href="">5</a></li>
                </ul>
                <div className="news-pagination__dots">
                    <span>...</span>
                </div>
                <div className="news-pagination__last">
                    <a className="news-pagination__last-link" href="">35</a>
                </div>
                <div className="news-pagination__next">
                    <img src={next} alt="next"/>
                </div>
            </div>
            <NewsBallet/>
        </div>
    )
}