import React, {useState} from 'react'
import leonov from "../../../img/content/news/items/1.png"
import talkWithWriters from "../../../img/content/news/items/2.png"
import saintPatric from "../../../img/content/news/items/3.png"
import overViews1 from "../../../img/content/news/overwievs/1.png"
import overViews2 from "../../../img/content/news/overwievs/2.png"
import overViews3 from "../../../img/content/news/overwievs/3.png"
import overViews4 from "../../../img/content/news/overwievs/4.png"
import overViews5 from "../../../img/content/news/overwievs/5.png"
import overViews6 from "../../../img/content/news/overwievs/6.png"
import overViews7 from "../../../img/content/news/overwievs/7.png"
import overViews8 from "../../../img/content/news/overwievs/8.png"
import overViews9 from "../../../img/content/news/overwievs/9.png"
import overViews10 from "../../../img/content/news/overwievs/10.png"
import overViews11 from "../../../img/content/news/overwievs/11.png"
import overViews12 from "../../../img/content/news/overwievs/12.png"
import overViews13 from "../../../img/content/news/overwievs/13.png"
import overViews14 from "../../../img/content/news/overwievs/14.png"
import overViews15 from "../../../img/content/news/overwievs/15.png"
import overViews16 from "../../../img/content/news/overwievs/16.png"
import {NewsPoster} from "./NewsPoster/NewsPoster"
import {NewsItem} from "./NewsItem/NewsItem"
import {OverviewItem} from "./OverviewItem/OverviewItem"
import {NewsBallet} from "./NewsBallet/NewsBallet"
import Pagination from "../../Pagination/Pagination"
import {Fade} from "react-reveal"


export const NewsBlock = () => {

    const [currentPage, setPageNumber] = useState(1)

    const newsItems = [
        {
            title: ' Открытие нового памятника Евгению Леонову',
            subtitle: '10 сентября в 15:00 был открыт памятник писателю',
            src: leonov,
            alt: 'Евгений Леонов'
        },
        {
            title: 'Беседы с писателями',
            subtitle: 'Русские писатели говорят о важности искусства',
            src: talkWithWriters,
            alt: 'Беседы с писателями'
        },
        {
            title: 'День и ночь св. Патрика: встреча старых друзей',
            subtitle: 'Не Джойсом единым живет Ирландия!',
            src: saintPatric,
            alt: 'День святого Патрика'
        },
    ]

    const overviewItems = [
        [{
            title: '«Шальные годы» Монпарнаса',
            subtitle: 'В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»',
            background: overViews1
        },
            {
                title: 'Анатомия за 30 секунд',
                subtitle: 'Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос',
                background: overViews2
            },
            {
                title: 'Русские балетные сезоны',
                subtitle: 'В Новом Иерусалиме стартовал необычный культурно-развлекательный спектакль, который покажут в новом театре',
                background: overViews3
            },
            {
                title: 'Сферические чудаки',
                subtitle: 'Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»',
                background: overViews4
            },
        ],
        [
            {
                title: '«Шальные годы» Монпарнаса1',
                subtitle: 'В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»',
                background: overViews5
            },
            {
                title: 'Анатомия за 30 секунд1',
                subtitle: 'Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос',
                background: overViews6
            },
            {
                title: 'Русские балетные сезоны1',
                subtitle: 'В Новом Иерусалиме стартовал необычный культурно-развлекательный спектакль, который покажут в новом театре',
                background: overViews7
            },
            {
                title: 'Сферические чудаки1',
                subtitle: 'Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»',
                background: overViews8
            },
        ],
        [
            {
                title: '«Шальные годы» Монпарнаса2',
                subtitle: 'В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»',
                background: overViews9
            },
            {
                title: 'Анатомия за 30 секунд2',
                subtitle: 'Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос',
                background: overViews10
            },
            {
                title: 'Русские балетные сезоны2',
                subtitle: 'В Новом Иерусалиме стартовал необычный культурно-развлекательный спектакль, который покажут в новом театре',
                background: overViews11
            },
            {
                title: 'Сферические чудаки2',
                subtitle: 'Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»',
                background: overViews12
            },
        ],
        [
            {
                title: '«Шальные годы» Монпарнаса3',
                subtitle: 'В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»',
                background: overViews13
            },
            {
                title: 'Анатомия за 30 секунд3',
                subtitle: 'Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос',
                background: overViews14
            },
            {
                title: 'Русские балетные сезоны3',
                subtitle: 'В Новом Иерусалиме стартовал необычный культурно-развлекательный спектакль, который покажут в новом театре',
                background: overViews15
            },
            {
                title: 'Сферические чудаки3',
                subtitle: 'Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»',
                background: overViews16
            },
        ],
        [
            {
                title: '«Шальные годы» Монпарнаса4',
                subtitle: 'В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»',
                background: overViews1
            },
            {
                title: 'Анатомия за 30 секунд4',
                subtitle: 'Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос',
                background: overViews2
            },
            {
                title: 'Русские балетные сезоны4',
                subtitle: 'В Новом Иерусалиме стартовал необычный культурно-развлекательный спектакль, который покажут в новом театре',
                background: overViews3
            },
            {
                title: 'Сферические чудаки4',
                subtitle: 'Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»',
                background: overViews4
            },
        ],
        [
            {
                title: '«Шальные годы» Монпарнаса5',
                subtitle: 'В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»',
                background: overViews5
            },
            {
                title: 'Анатомия за 30 секунд5',
                subtitle: 'Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос',
                background: overViews6
            },
            {
                title: 'Русские балетные сезоны5',
                subtitle: 'В Новом Иерусалиме стартовал необычный культурно-развлекательный спектакль, который покажут в новом театре',
                background: overViews7
            },
            {
                title: 'Сферические чудаки5',
                subtitle: 'Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»',
                background: overViews8
            },
        ],
        [
            {
                title: '«Шальные годы» Монпарнаса7',
                subtitle: 'В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»',
                background: overViews9
            },
            {
                title: 'Анатомия за 30 секунд7',
                subtitle: 'Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос',
                background: overViews10
            },
            {
                title: 'Русские балетные сезоны7',
                subtitle: 'В Новом Иерусалиме стартовал необычный культурно-развлекательный спектакль, который покажут в новом театре',
                background: overViews11
            },
            {
                title: 'Сферические чудаки7',
                subtitle: 'Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»',
                background: overViews12
            },
        ],
        [
            {
                title: '«Шальные годы» Монпарнаса8',
                subtitle: 'В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»',
                background: overViews13
            },
            {
                title: 'Анатомия за 30 секунд8',
                subtitle: 'Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос',
                background: overViews14
            },
            {
                title: 'Русские балетные сезоны8',
                subtitle: 'В Новом Иерусалиме стартовал необычный культурно-развлекательный спектакль, который покажут в новом театре',
                background: overViews15
            },
            {
                title: 'Сферические чудаки8',
                subtitle: 'Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»',
                background: overViews16
            },
        ],
        [
            {
                title: '«Шальные годы» Монпарнаса9',
                subtitle: 'В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»',
                background: overViews1
            },
            {
                title: 'Анатомия за 30 секунд9',
                subtitle: 'Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос',
                background: overViews2
            },
            {
                title: 'Русские балетные сезоны9',
                subtitle: 'В Новом Иерусалиме стартовал необычный культурно-развлекательный спектакль, который покажут в новом театре',
                background: overViews3
            },
            {
                title: 'Сферические чудаки9',
                subtitle: 'Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»',
                background: overViews4
            },
        ],
        [
            {
                title: '«Шальные годы» Монпарнаса10',
                subtitle: 'В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»',
                background: overViews5
            },
            {
                title: 'Анатомия за 30 секунд10',
                subtitle: 'Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос',
                background: overViews6
            },
            {
                title: 'Русские балетные сезоны10',
                subtitle: 'В Новом Иерусалиме стартовал необычный культурно-развлекательный спектакль, который покажут в новом театре',
                background: overViews7
            },
            {
                title: 'Сферические чудаки10',
                subtitle: 'Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»',
                background: overViews8
            },
        ],
    ]

    return (
        <div className="news-block" id='news'>
            <div className="news-title">
                <span>НОВОСТИ</span>
            </div>
            <Fade left>
                <div className="news-culture">
                    <NewsPoster/>
                    <div className="news-culture__items">
                        {newsItems.map((item, index) => {
                            return <NewsItem
                                key={`${item}_${index}`}
                                src={item.src} alt={item.alt}
                                title={item.title}
                                subtitle={item.subtitle}
                            />
                        })}
                    </div>
                </div>
                <div className="news-overview" id="overviews">
                    <div className="news-overview__title news-title">
                        <span>ОБЗОРЫ</span>
                    </div>
                    <div className="news-overview__items">
                        {overviewItems.splice(currentPage - 1, 1).map((item, index) => {
                            return <React.Fragment key={`${item}_${index}`}>
                                {
                                    item.map((item, index) => {
                                        return (
                                            <OverviewItem key={`${item}_${index}`} title={item.title}
                                                          subtitle={item.subtitle} background={item.background}/>
                                        )
                                    })
                                }
                            </React.Fragment>
                        })}
                    </div>
                </div>
                <div className="news-pagination">
                    <Pagination
                        changePageNumber={setPageNumber}
                        currentPage={currentPage}
                        itemsOnPage={1}
                        totalItems={overviewItems.length + 1}
                    />
                </div>
                <NewsBallet/>
            </Fade>
        </div>
    )
}