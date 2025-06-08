import React from 'react'
import ImageSlider from '../components/Cashier/home/img-slider/slider'
import TopMenu from '../components/Cashier/home/andalan/topMenu'
import MyLayout from '../layouts/layout'
import Marquee from '../components/Cashier/home/marquee/Marquee'

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