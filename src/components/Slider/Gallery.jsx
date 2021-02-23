import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import item1 from "../../img/slider/1.png";
import item2 from "../../img/slider/2.png";
import item3 from "../../img/slider/3.png";
import item4 from "../../img/slider/4.png";
import {SliderItem} from "./SliderItem/SliderItem";

export const Gallery = ({carousel}) => {

    const sliderItems = [
        {title: 'Как все успевать', src: item1 },
        {title: 'Заголовок', src: item2 },
        {title: 'Заголовок', src: item3 },
        {title: 'Заголовок', src: item4 },
    ]

    let responsive = {
        740: {item: 2},
        882: { items: 3},
        1182: {items: 4},


    }

    const handleOnDragStart = (e) => e.preventDefault()
    return (
        <AliceCarousel
            ref={carousel}
            mouseTrackingEnabled
            responsive={responsive}
            infinite={true}
            buttonDisabled={true}
            autoHeight={false}
        >
            {sliderItems.map((item, index) => {
                return (
                    <SliderItem key={`${item}_${index}`} title={item.title} src={item.src}/>
                )
            })}
        </AliceCarousel>
    )
}