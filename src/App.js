import React, {useState} from 'react'
import {Navbar} from "./components/Navbar/Navbar"
import './sass/style.sass'
import {Hero} from "./components/Hero/Hero"
import {Content} from "./components/Content/Content"
import {Slider} from "./components/Slider/Slider"
import {Footer} from "./components/Footer/Footer"
import {Mobile} from "./components/Mobile/Mobile.jsx"
import {GalleryHero} from "./components/Hero/GalleryHero";


function App() {

    const [mobileMenuMode, setMobileMenuMode] = useState(false)

    return (
        <>
            <Mobile mobileMenuMode={mobileMenuMode} setMobileMenuMode={setMobileMenuMode}/>
            <Navbar/>
            <GalleryHero/>
            <Content/>
            <Slider/>
            <Footer/>
        </>
    );
}

export default App;
