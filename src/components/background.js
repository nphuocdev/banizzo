import React from "react"
import { StaticImage } from "gatsby-plugin-image"
// import Navbar from "./navbar"
import "../styles/global.css"
import bgr from "../images/hero-bg.jpeg"
import bgr2 from "../images/overlay.png"

const Background = () => {
  return (
    <div className=" relative -z-10 ">
      {/* <StaticImage
        src="../images/hero-bg.jpeg"
        alt="bgr"
        className=" h-full w-full -mt-20 absolute -z-10 "
        layout="constrained"
        
      /> */}
      <img
        src={bgr}
        alt="bgr"
        className=" h-full  w-full -mt-20 absolute -z-10"
      />
      <img
        src={bgr2}
        alt="bgr"
        className=" h-full  w-full -mt-20 absolute -z-10"
      />
      {/* <StaticImage
        src="../images/overlay.png"
        alt="bgr"
        className=" h-full  w-full -mt-20 absolute -z-10"
        layout="constrained"
      /> */}
      <div className="px-4 md:px-14 lg:px-24">
        <div className=" container justify-center mx-auto pt-28 pb-36  ">
          <h1 className="text-orange-600 text-lg font-bold pb-4 relative block  ">
            {" "}
            BUSINESS SOLUTION{" "}
          </h1>
          <h2 className="text-white text-4xl xl:text-9xl lg:text-7xl md:text-6xl whitespace-nowrap  font-bold pb-7 relative ">
            {" "}
            WE ARE DIGITAL <br />
            <span className="text-orange-600  "> AGENCY.</span>
          </h2>
          <p className="text-white text-lg max-w-xl pb-8 block">
            There are many variations of passages of Lorem Ipsum available, the
            majority have suffered alteration in some form by injected humour.
          </p>
          <button
            type="submit"
            className="text-sm px-7 py-4 rounded-md cursor-pointer text-white submit bg-gradient-to-r from-pink-500 to-orange-500"
          >
            DISCOVERY MORE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Background
