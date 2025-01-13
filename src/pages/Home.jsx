import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/banner/Banner'
import SaleOffer from '../components/saleOffer/SaleOffer'
import NewArrivals from '../components/newArrivals/NewArrivals'

const Home = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <Banner/>
        <SaleOffer/>
        <NewArrivals/>
    </>
  )
}

export default Home