import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FaSearch, FaBars, FaAngleRight, FaChevronDown } from "react-icons/fa"
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

const Navbar = () => {
  const [search, setSearch] = useState(false)
  const [sidebar, setSidebar] = useState(false)

  const handleClick = () => {
    setSearch(!search)
  }
  const handleClickSB = () => {
    setSidebar(!sidebar)
  }
  // const [plus, setplus] = useState(false );
  // const handleClickplus = () => {
  //   setplus(!plus) ;

  // };

  return (
    <div className="container">
      <div className="h-20 w-full px-4 md:px-16 lg:px-24">
        <div className="flex justify-between z-10">
          {/* logo */}
          <div className=" my-5 mx-2 py-2 items-center  ">
            <a href="/">
              <StaticImage
                src="../images/logo.png"
                alt="logo"
                className=" w-36 "
              />
            </a>
          </div>

          <div className="  hidden lg:block grow ">
            <div className="text-white  float-right  px-4 flex ">
              {/*home*/}
              <ul className="group block ">
                <li className="  font-semibold py-2 px-4  inline-flex items-center z-10  hover:text-orange-600">
                  <a href="/" className="px-1 py-8 ">
                    Home
                  </a>
                  <FaChevronDown />
                </li>
                <ul className="  bg-indigo-900 w-64  absolute hidden text-white group-hover:block z-10">
                  <li>
                    <a
                      className=" hover:text-orange-600 py-2 px-4 block "
                      href="/"
                    >
                      digital Agency
                    </a>
                  </li>
                  <li>
                    <a
                      className=" hover:text-orange-600 py-2 px-4 block "
                      href="/"
                    >
                      digital Agency dark
                    </a>
                  </li>
                  <li>
                    <a
                      className="  hover:text-orange-600 py-2 px-4 block "
                      href="/"
                    >
                      digital Agency Banner Slider
                    </a>
                  </li>
                  <li>
                    <a
                      className="   hover:text-orange-600 py-2 px-4 block "
                      href="/"
                    >
                      Creative Agency
                    </a>
                  </li>
                  <li>
                    <a
                      className="   hover:text-orange-600 py-2 px-4 block "
                      href="/"
                    >
                      Creative Agency dark
                    </a>
                  </li>
                </ul>
              </ul>

              {/* about */}
              <ul className="group block ">
                <li className="  font-semibold py-2 px-4  inline-flex items-center  hover:text-orange-600">
                  <a href="/" className="px-1 py-8  ">
                    About
                  </a>
                </li>
              </ul>
              {/* service */}
              <ul className="group block ">
                <li className="  font-semibold py-2 px-4  inline-flex items-center  hover:text-orange-600">
                  <a href="/" className="px-1 py-8  ">
                    Service
                  </a>
                  <FaChevronDown />
                </li>
                <ul className="bg-indigo-900 w-64 absolute hidden text-white  group-hover:block">
                  <li>
                    <a
                      href="/"
                      className=" hover:text-orange-600 py-2 px-4 block "
                    >
                      Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className=" hover:text-orange-600 py-2 px-4 block "
                    >
                      Service Dark
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="  hover:text-orange-600 py-2 px-4 block "
                    >
                      Service V2
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="   hover:text-orange-600 py-2 px-4 block "
                    >
                      Service V2 Dark
                    </a>
                  </li>
                </ul>
              </ul>
              {/* page : căn chỉnh */}
              <ul className="group block ">
                <li className="  font-semibold  py-2 px-4   inline-flex items-center hover:text-orange-600">
                  <a href="/" className="px-1 py-8 ">
                    Page
                  </a>
                  <FaChevronDown />
                </li>
                <div className=" nav-page w-screen absolute left-0 mb-96 hidden text-white  group-hover:block z-10">
                  {/*hidden*/}
                  <div className=" px-12 py-10 bg-indigo-900 grid grid-rows-1 grid-flow-col ">
                    <ul>
                      <li className="  font-semibold py-2 px-4">
                        <a href="/" className="mr-1 text-lg ">
                          Home
                        </a>
                      </li>
                      <li className="   py-2 px-4  hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          digital Agency
                        </a>
                      </li>
                      <li className="   py-2 px-4  hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          digital Agency dark
                        </a>
                      </li>
                      <li className="   py-2 px-4  hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          digital Agency Banner Slider
                        </a>
                      </li>
                      <li className="   py-2 px-4  hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          Creative Agency
                        </a>
                      </li>
                      <li className="   py-2 px-4  hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          Creative Agency dark
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li className="  font-semibold py-2 px-4">
                        <a href="/" className="mr-1 text-lg ">
                          Service
                        </a>
                      </li>
                      <li className="   py-2 px-4  hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          Service
                        </a>
                      </li>
                      <li className="   py-2 px-4  hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          Service dark
                        </a>
                      </li>
                      <li className="   py-2 px-4  hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          Service v.2
                        </a>
                      </li>
                      <li className="   py-2 px-4  hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          Service v.2 dark
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li className="  font-semibold py-2 px-4 ">
                        <a href="/" className="mr-1 text-lg">
                          Portfolio
                        </a>
                      </li>
                      <li className="   py-2 px-4  hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          portfolio dark
                        </a>
                      </li>
                      <li className="   py-2 px-4  hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          portfolio v.2
                        </a>
                      </li>
                      <li className="   py-2 px-4  hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          portfolio v.2 dark
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li className="  font-semibold py-2 px-4 ">
                        <a href="/" className="mr-1 text-lg ">
                          Team
                        </a>
                      </li>
                      <li className="   py-2 px-4  hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          team{" "}
                        </a>
                      </li>
                      <li className="   py-2 px-4  hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          team dark
                        </a>
                      </li>
                      <li className="   py-2 px-4  hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          team detail
                        </a>
                      </li>
                      <li className="   py-2 px-4  hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          team detail dark
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li className="  font-semibold py-2 px-4">
                        <a href="/" className="mr-1 text-lg ">
                          Blog
                        </a>
                      </li>
                      <li className="   py-2 px-4   hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          Blog{" "}
                        </a>
                      </li>
                      <li className="   py-2 px-4   hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          Blog dark
                        </a>
                      </li>
                      <li className="   py-2 px-4   hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          Blog v.2
                        </a>
                      </li>
                      <li className="   py-2 px-4   hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          Blog v.2 dark
                        </a>
                      </li>
                      <li className="   py-2 px-4   hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          blog details
                        </a>
                      </li>
                      <li className="   py-2 px-4   hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          blog details dark
                        </a>
                      </li>
                      <li className="   py-2 px-4   hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          blog details v.2
                        </a>
                      </li>
                      <li className="   py-2 px-4   hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          blog details v.2 dark
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li className="  font-semibold py-2 px-4   ">
                        <a href="/" className="mr-1 text-lg ">
                          Others
                        </a>
                      </li>
                      <li className="   py-2 px-4   hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          about
                        </a>
                      </li>
                      <li className="   py-2 px-4   hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          Contact
                        </a>
                      </li>
                      <li className="   py-2 px-4   hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          Contact dark
                        </a>
                      </li>
                      <li className="   py-2 px-4   hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          FAQs
                        </a>
                      </li>
                      <li className="   py-2 px-4   hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          FAQs dark
                        </a>
                      </li>
                      <li className="   py-2 px-4   hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          404
                        </a>
                      </li>
                      <li className="   py-2 px-4   hover:text-orange-600">
                        <a href="/" className="mr-1  ">
                          404 dark
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
              {/* blog */}
              <ul className="group block ">
                <li className="  font-semibold py-2 px-4  inline-flex items-center  hover:text-orange-600">
                  <a href="/" className="px-1 py-8  ">
                    Blog
                  </a>
                  <FaChevronDown />
                </li>

                <ul className=" bg-indigo-900 w-64 absolute hidden  text-white  group-hover:block">
                  <ul className="group block ">
                    <li className="flex  hover:text-orange-600 ">
                      <a
                        className="  hover:text-orange-600 py-2 px-4 block    "
                        href="/"
                      >
                        Blog
                        <FaAngleRight className=" inline-flex text-lg" />
                      </a>
                    </li>
                    <ul className="bg-indigo-900">
                      <ul className="absolute bg-indigo-900   text-white  group-hover:block z-10">
                        <li>
                          <a
                            className=" hover:text-orange-600 py-2 px-4 block "
                            href="/"
                          >
                            Blog Detail
                          </a>
                        </li>
                        <li>
                          <a
                            className=" hover:text-orange-600 py-2 px-4 block "
                            href="/"
                          >
                            Blog Detail Dark
                          </a>
                        </li>
                        <li>
                          <a
                            className="  hover:text-orange-600 py-2 px-4 block "
                            href="/"
                          >
                            Blog Detail V2
                          </a>
                        </li>
                        <li>
                          <a
                            className="   hover:text-orange-600 py-2 px-4 block "
                            href="/"
                          >
                            Blog Detail V2 Dark
                          </a>
                        </li>
                      </ul>
                    </ul>
                  </ul>
                  <li>
                    <a
                      className="  hover:text-orange-600 py-2 px-4 block "
                      href="/"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="  hover:text-orange-600 py-2 px-4 block "
                      href="/"
                    >
                      Blog Dark
                    </a>  
                  </li>
                  <li>
                    <a
                      className="  hover:text-orange-600 py-2 px-4 block "
                      href="/"
                    >
                      Blog V2
                    </a>
                  </li>
                  <li>
                    <a
                      className="   hover:text-orange-600 py-2 px-4 block "
                      href="/"
                    >
                      Blog V2 Dark
                    </a>
                  </li>
                </ul>
              </ul>
              {/* </li> */}
              {/* <li className="p-8 px-5 flex-initial col-a-6 "> */}
              <ul className="group block ">
                <li className="  font-semibold  px-5 py-2  inline-flex  hover:text-orange-600">
                  <a href="/" className="px-1 py-8 ">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" grid  grid-cols-2 mt-2 py-3 ">
            <FaSearch
              onClick={() => handleClick()}
              className="text-white  mx-3 my-5 text-lg  cursor-pointer"
            />
            <div
              className={
                search? "bg-indigo-900 p-2 fixed  top-20 right-16 z-10   w-72 ": "hidden"
              }
            >
              <input
                type="text"
                placeholder="Search..."
                className="p-3  rounded-l-md rounded-r-md w-full"
              />
            </div>

            <FaBars
              onClick={() => handleClickSB()}
              className="text-white  mx-3  my-5 cursor-pointer"
            />
            {/* sidebar */}
            <div
              className={
                sidebar ? " fixed  top-0 right-0 h-full z-10 " : "hidden"}
            >
              <div className="bg-slate-600 w-96 h-full px-7 py-10 ">
                <div className="flex pb-24 ">
                  <StaticImage
                    className=" "
                    alt="logo "
                    src="../images/logo.png"
                  />
                  <FaRegTimesCircle
                    onClick={() => handleClickSB()}
                    className="  text-4xl  ml-28  text-white z-10 hover:text-orange-600 transition delay-200   "
                  />
                </div>

                <div className="pb-24 hidden lg:block">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="p-3  rounded-l-md rounded-r-md w-full"
                  />
                </div>
                <StaticImage className="mb-10 hidden lg:block" alt="map" src="../images/map.jpg"/>
                <ul className="  hidden lg:grid lg:grid-rows-3 ">
                  <li className="grid grid-cols-10 gap-4 items-center py-1">
                   
                    <FaMapMarkerAlt className=" col-span-1  text-orange-700  " />
                    <a href="/" className="col-span-9">
                      500 Treat Ave, Suite 200 San Francisco,CA 94110, USA-2105
                    </a>
                  </li>
                  <li className=" grid grid-cols-10 gap-4 items-center py-1">
                  
                    <FaPhoneAlt className=" col-span-1  text-orange-700" />
                    <a href="/" className="col-span-9  ">
                      +025 1098 259 145 (Support)
                    </a>
                  </li>
                  <li className=" grid grid-cols-10 gap-4 items-center py-1    ">
                   
                    <FaEnvelope className=" col-span-1  text-orange-700" />
                    <a href="/" className="col-span-9  ">
                      Info,gurudev@mail.com
                    </a>
                  </li>
                </ul>
                <ul className="hidden lg:flex lg:gap-2  lg:text-white ">
                  <a href="/" className=" p-2  rounded bg-orange-600">
                    <FaFacebookF />
                  </a>
                  <a href="/" className=" p-2  rounded bg-orange-600">
                    <FaTwitter />
                  </a>
                  <a href="/" className=" p-2  rounded bg-orange-600">
                    <FaInstagram />
                  </a>
                  <a href="/" className=" p-2  rounded bg-orange-600">
                    <FaPinterestP />
                  </a>
                </ul>

                <div className="pb-12 block lg:hidden ">
                  <div className=" overflow-scroll h-96">
                    <ul className="  text-white  ">
                      <li className="flex flex-row  border-t-2 border-r-2 mr-1 p-3 ">
                        <a href="/" className=" basis-60  border-y-slate-400">
                          {" "}
                          Home{" "}
                        </a>
                        <FaPlus className=" text-lg cursor-pointer  flex items-end" />
                      </li>

                      <li className="flex flex-row  border-t-2 border-r-2 mr-1  p-3 ">
                        <a href="/" className=" basis-60 ">
                          {" "}
                          About{" "}
                        </a>
                      </li>

                      <li className="flex flex-row  border-t-2 border-r-2 mr-1  p-3 ">
                        <a href="/" className=" basis-60  border-y-slate-400">
                          {" "}
                          Service{" "}
                        </a>
                        <a
                          href="/"
                          className=" text-lg cursor-pointer  flex items-end"
                        >
                          {" "}
                          <FaPlus />{" "}
                        </a>
                      </li>

                      <li className="flex flex-row  border-t-2 border-r-2 mr-1  p-3 ">
                        <a href="/" className=" basis-60  border-y-slate-400">
                          Portfolio{" "}
                        </a>
                        <a
                          href="/"
                          className=" text-lg cursor-pointer  flex items-end"
                        >
                          {" "}
                          <FaPlus />{" "}
                        </a>
                      </li>

                      <li className="flex flex-row  border-t-2 border-r-2 mr-1  p-3 ">
                        <a href="/" className=" basis-60  border-y-slate-400">
                          {" "}
                          Team
                        </a>
                        <a
                          href="/"
                          className=" text-lg cursor-pointer  flex items-end"
                        >
                          {" "}
                          <FaPlus />{" "}
                        </a>
                      </li>

                      <li className="flex flex-row  border-t-2 border-r-2 mr-1  p-3 ">
                        <a href="/" className=" basis-60  border-y-slate-400">
                          {" "}
                          Blog
                        </a>
                        <a
                          href="/"
                          className=" text-lg cursor-pointer  flex items-end"
                        >
                          {" "}
                          <FaPlus />{" "}
                        </a>
                      </li>

                      <li className="flex flex-row  border-t-2 border-r-2 mr-1  p-3 ">
                        <a href="/" className=" basis-60  border-y-slate-400">
                          {" "}
                          Others
                        </a>
                        <a
                          href="/"
                          className=" text-lg cursor-pointer  flex items-end"
                        >
                          {" "}
                          <FaPlus />{" "}
                        </a>
                      </li>

                      <li className="flex flex-row  border-t-2 border-r-2 mr-1  p-3 ">
                        <a href="/" className=" basis-60 ">
                          {" "}
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
