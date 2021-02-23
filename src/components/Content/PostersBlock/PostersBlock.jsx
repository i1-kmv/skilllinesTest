import React from 'react'
import ballsBg from '../../../img/content/posters/balls-bg.png'
import fotosetBg from '../../../img/content/posters/fotoset-bg.png'
import birdsBg from '../../../img/content/posters/birds-bg.png'
import {PosterItem} from "./PosterItem/PosterItem"


export const PostersBlock = () => {

    const posterItems = [
        {title: 'ВОЗДУШНЫЕ ШАРЫ', background: ballsBg},
        {title: 'НЕОБЫЧНАЯ ФОТОСЕССИЯ', background: fotosetBg },
        {title: 'Выставка птиц', background: birdsBg}
    ]

    return (
        <div className="poster-block">
            {posterItems.map((item, index) => {
                return (
                    <PosterItem key={`${item.title}_${index}`}
                                background={`url(${item.background})`}
                                title={item.title}
                    />
                )})}
        </div>
    )
}