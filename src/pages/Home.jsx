import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/banner/Banner'
import SaleOffer from '../components/saleOffer/SaleOffer'
import NewArrivals from '../components/newArrivals/NewArrivals'
import BeastPhone from '../components/beastPhone/BeastPhone'
import Offer from '../components/special offer/Offer'

const Home = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <Banner/>
        <SaleOffer/>
        <NewArrivals/>
        <BeastPhone/>
        <Offer/>
    </>
  )
}

export default Home