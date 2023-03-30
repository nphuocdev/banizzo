import React, { useState } from "react"
// import { useStaticQuery,graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { navbardata } from "../data/navbardata"
import { sidebardata } from "../data/navbardata"
import { FaAngleDown, FaAngleRight } from "react-icons/fa"
import { FaSearch, FaBars, FaChevronDown } from "react-icons/fa"
import logo from "../images/logo.png"
import {
  FaPlus,
  FaRegTimesCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa"
const Testing = () => {
  // const data = useStaticQuery(query)
  // const nodes = data.allContentfulNavbar.nodes
  const [search, setSearch] = useState(false)
  const [sidebar, setSidebar] = useState(false)

  const handleClick = () => {
    setSearch(!search)
  }
  const handleClickSB = () => {
    setSidebar(!sidebar)
  }
  return (
    <nav class="px-4 md:px-14 lg:px-24 ">
      <div className="container md:justify-center lg:justify-center flex h-20 w-full  m-auto z-10 ">
        {/* logo */}
        <div className="my-5  py-2 items-center  ">
          <a href="">
            {/* <StaticImage
              src="../images/logo.png"
              alt="logo"
              className=" w-36 "
            /> */}
            <img src={logo} />
          </a>
        </div>
        {/* menu */}
        <div className="grow">
          <div className=" text-white flex  px-4  justify-end">
            {navbardata.map((items, index) => {
              return (
                <ul className="group  hidden lg:block  ">
                  <li
                    key={index}
                    className=" font-semibold  px-4  inline-flex items-center z-10  hover:text-orange-600"
                  >
                    <a key={index} className="px-1 py-8">
                      {items.title}
                    </a>
                    {items.children != null && <FaAngleDown />}
                  </li>

                  {items.children != null && items.title != "Page" && (
                    <ul className="group invisible top-32 opacity-0 group-hover:opacity-100 duration-300 group-hover:top-20 group-hover:visible  bg-indigo-900 w-64 p-3 absolute  text-white group-hover:block z-10">
                      {items.children.map((data, id) => {
                        return (
                          <li key={id}>
                            <a
                              key={id}
                              className="hover:text-orange-600 py-2 px-4 justify-between flex items-center"
                              href="#"
                            >
                              {data.name}
                              {data.childname != null &&
                                items.title == "Blog" && <FaAngleRight />}
                            </a>

                            {/* ul con  */}
                            {data.childname != null && data.name == "Blog" && (
                              <ul className="group">
                                <ul className="group invisible right-40 opacity-0 group-hover:opacity-100 duration-300 group-hover:right-64 group-hover:visible  bg-indigo-900 w-64 p-3 absolute  text-white z-10">
                                  {data.childname.map((data1, id1) => {
                                    return (
                                      <li key={id1}>
                                        <a
                                          key={id1}
                                          className="hover:text-orange-600 py-2 px-4  block"
                                          href="#"
                                        >
                                          {data1.name1}
                                        </a>
                                      </li>
                                    )
                                  })}
                                </ul>
                              </ul>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  )}

                  {items.children != null && items.title == "Page" && (
                    <div className="group invisible top-32 opacity-0 group-hover:opacity-100 duration-300 group-hover:top-20 group-hover:visible w-screen absolute left-0 mb-96  text-white  group-hover:block z-10">
                      <ul className=" px-12 py-10 bg-indigo-900 grid grid-rows-1 grid-flow-col ">
                        {items.children.map((data, id) => {
                          return (
                            <li key={id} className="font-semibold py-4 px-4">
                              <a key={id} className="text-lg " href="#">
                                {data.name}
                              </a>

                              {data.childname != null && (
                                <ul className="group ">
                                  {data.childname.map((data1, id1) => {
                                    console.log(data1)
                                    return (
                                      <li
                                        key={id1}
                                        className="py-2 hover:text-orange-600"
                                      >
                                        <a
                                          key={id1}
                                          className="mr-1 text-left"
                                          href="#"
                                        >
                                          {data1.name1}
                                        </a>
                                      </li>
                                    )
                                  })}
                                </ul>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )}
                </ul>
              )
            })}

            <div className=" grid  grid-cols-2 mt-2 py-3 ">
              <FaSearch
                onClick={() => handleClick()}
                className="text-white  mx-3 my-5 text-lg  cursor-pointer"
              />
              <div
                // group invisible top-32 opacity-0 group-hover:opacity-100 duration-300 group-hover:top-20 group-hover:visible
                className={
                  search
                    ? "bg-indigo-900 p-2 absolute  top-20 right-16 z-10 w-72  "
                    : "hidden"
                }
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className=" p-3  rounded-l-md rounded-r-md w-full"
                />
              </div>

              <FaBars
                onClick={() => handleClickSB()}
                className="text-white mx-3  my-5 cursor-pointer"
              />
            </div>
            <div
              className={
                sidebar ? " fixed  top-0 right-0 h-full z-10 " : "hidden"
              }
            >
              <div className="bg-slate-600 w-96 h-full px-7 py-10 ">
                <div className="flex pb-24 xl:pb-24 ">
                  {/* <StaticImage
                    className=" "
                    alt="logo "
                    src="../images/logo.png"
                  /> */}
                  <img src={logo} />
                  <FaRegTimesCircle
                    onClick={() => handleClickSB()}
                    className="  text-4xl  ml-28  text-white z-10 hover:text-orange-600 transition delay-200   "
                  />
                </div>

                <div className=" pb-16 xl:pb-24 hidden lg:block">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="p-3  rounded-l-md rounded-r-md w-full"
                  />
                </div>
                <StaticImage
                  className="mb-6 lg:h-56 lg:mb-10  hidden lg:block"
                  alt="map"
                  src="../images/map.jpg"
                />

                {sidebardata.map((item, index) => {
                  return (
                    <ul className="  hidden lg:grid lg:grid-rows-3 ">
                      {item.children.map((data, id) => {
                        return (
                          <li className="grid grid-cols-10 gap-4 items-center py-1">
                            {data.icon}
                            <a href="/" className="col-span-9">
                              {data.name}
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  )
                })}

                {sidebardata.map((item, index) => {
                  return (
                    <ul className="hidden lg:flex lg:gap-2  lg:text-white ">
                      {item.social.map((data, id) => {
                        return (
                          <li className=" rounded bg-orange-600 p-2">
                            <a href="/">{data.icon}</a>
                          </li>
                        )
                      })}
                    </ul>
                  )
                })}

                {sidebardata.map((item1, index) => {
                  return (
                    <div className="pb-12 block lg:hidden ">
                      <div className=" overflow-scroll h-96">
                        {navbardata.map((items, index) => {
                          return (
                            <ul className="  text-white  ">
                              <li className="flex justify-between border-t-2 border-r-2 mr-1 p-3 ">
                                <a href="/" className="  border-y-slate-400">
                                  {items.title}
                                </a>
                                <FaPlus className=" text-lg cursor-pointer  " />
                              </li>
                            </ul>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Testing

// const query = graphql`
//   query {
//     allContentfulNavbar {
//       nodes {
//         title
//         list
//       }
//     }
//   }
// `
