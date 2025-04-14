import React from 'react'
import ImageSlider from '../components/home/img-slider/slider'
import TopMenu from '../components/home/andalan/topMenu'
import Promo from '../components/home/promo/promo'
import MyLayout from '../layouts/layout'
import Marquee from '../components/home/marquee/Marquee'

const HomePage = () => {
    return (
        <>
            <MyLayout active={'home'}>
                    <ImageSlider />
                    <TopMenu />
                    <Marquee />
            </MyLayout>
        </>
    )
}

export default HomePage