import React from 'react'
import Home from './pages/Home'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

let multiPage = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home/>}></Route>
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