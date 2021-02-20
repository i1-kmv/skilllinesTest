import React, {useState} from 'react'
import {Navbar} from "./components/Navbar/Navbar";
import './sass/style.sass'
import {Hero} from "./components/Hero/Hero";
import {Content} from "./components/Content/Content";
import {Slider} from "./components/Slider/Slider";
import {Footer} from "./components/Footer/Footer";
import {Mobile} from "./components/Mobile/Mobile.jsx";


function App() {

    const [mobileMenuMode, setMobileMenuMode] = useState(false)

    return (
        <>
            <Mobile mobileMenuMode={mobileMenuMode} setMobileMenuMode={setMobileMenuMode}/>
            <Navbar/>
            <Hero/>
            <Content/>
            <Slider/>
            <Footer/>
        </>
    );
}

export default App;
