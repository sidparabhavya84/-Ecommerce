import React from 'react'
import Slider from '../Slider/Slider'
import Foot from '../Foot/Foot'
import Service from '../Service/Service'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Product from '../Product/Product'
import Review from '../Review/Review'


function Home() {
    return (
        <>
            <Slider />
            <Product />
            <About />
            <Service />
            <Contact />
            {/* <Review /> */}
        </>
    )
}

export default Home