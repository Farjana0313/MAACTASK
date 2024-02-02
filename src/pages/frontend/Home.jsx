import React from 'react'
import AboutUs from '../../components/frontend/AboutUs'
import Banner from '../../components/frontend/Banner'
import ClinetSection from '../../components/frontend/ClinetSection'
import Footer from '../../components/frontend/Footer'
import Header from '../../components/frontend/Header'
import ProductFeature from '../../components/frontend/ProductFeature'
import Question from '../../components/frontend/Question'
import TabImg from '../../components/frontend/TabImg'
import "../../App.css"

export default function Home() {
    return (
        <>
            <Header />
            <Banner />
            <TabImg />
            <ProductFeature />
            <AboutUs />
            <Question />
            <ClinetSection />
            <Footer />
        </>
    )
}

