import React from "react"
//import { Link } from 'gatsby'
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import "../styles/global.css"
import Seo from "../components/SEO"

const Home = () => {
  return (
    <Layout className="box-border  ">
        <Seo title="Home" description= "xinchao"/>
      <main className=" px-24 ">
        <h1>xin chào</h1>
      </main>
    </Layout>
  )
}

export default Home
