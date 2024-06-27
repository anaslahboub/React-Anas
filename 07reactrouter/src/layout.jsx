import React from 'react'
import { Outlet } from "react-router-dom"
import Footer from "./component/Footer/Footer"
import Header from "./component/Header/Header"

function layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
   </>
  )
}

export default layout