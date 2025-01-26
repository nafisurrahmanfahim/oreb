import React from 'react'
import Home from './pages/Home'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Shop from './pages/Shop'
import Layout from './components/Layout'
import ProductDetails from './components/product/ProductDetails'
import About from './pages/About'

let multiPage = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout/>} >
      <Route index element={<Home/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/shop/:id' element={<ProductDetails/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Route>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={multiPage}></RouterProvider>
    </>
  )
}

export default App