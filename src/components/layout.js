import React, { Children } from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import Background from "./background"
// import Sidebar from "./sidebar"
import Testing from "./testing"
const Layout = ({ children }) => {
  return (
    <>
      <Testing/> 
     {/* <Navbar className=" fixed  " />  */}
     <Background/> 
      {/* {children}  */} 
      {/* <Footer />   */}
    </>
  )
}

export default Layout
