import React from 'react'
import Header from './header/Header'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'

const Layout = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout