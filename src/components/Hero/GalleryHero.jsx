import React, {useRef} from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import {Hero} from "./Hero";


export const GalleryHero = () => {

    let responsive = {
        1280: {items: 1}
    }

    const carousel = useRef(null)

    const handleOnDragStart = (e) => e.preventDefault()
    return (
        <AliceCarousel
            ref={(el) => (carousel.current = el)}
            mouseTrackingEnabled
            responsive={responsive}
            infinite={true}
            buttonDisabled={true}
            autoHeight={false}
        >
           <Hero carousel={carousel} num={1}/>
           <Hero carousel={carousel} num={2}/>
           <Hero carousel={carousel} num={3}/>
        </AliceCarousel>
    )
}