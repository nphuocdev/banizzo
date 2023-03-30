import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaPinterestP } from "react-icons/fa"
const Footer = () => {
  return (
    <footer className=" bg-slate-900 bottom-0 ">
      <div className=" grid grid-rows-1 text-white px-24 items-center ">
        <div className=" grid gap-x-10 grid-cols-12 h-96 py-24">
          <div className="  col-span-4   ">
            <StaticImage
              src="../images/logo.png"
              alt=" logo"
              className="mb-10 "
            />
            <p className="pb-8 text-base">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </p>
            <ul className="flex  gap-5 ">
              <li className="  bg-orange-600 rounded p-3 ">
                <a href="https://www.facebook.com/" alt="facebook">
                  <FaFacebookF className=" text-2xl " />
                </a>
              </li>
              <li className="  bg-orange-600 rounded p-3 ">
                <a href="https://www.instagram.com/" alt="Twitter">
                  <FaTwitter className=" text-2xl " />
                </a>
              </li>
              <li className="  bg-orange-600 rounded p-3 ">
                <a href="https://www.linkedin.com/" alt="Instagram">
                  <FaInstagram className=" text-2xl " />
                </a>
              </li>
              <li className="  bg-orange-600 rounded p-3 ">
                <a href="https://www.pinterest.com/" alt="Pinterest">
                  <FaPinterestP className=" text-2xl " />
                </a>
              </li>
            </ul>
          </div>
          <div className=" col-span-2">
            <h2 className="footer__widget-title text-lg font-semibold pb-8 ">
              My Account
            </h2>
            <ul className="footer__menu text-base  ">
              <li className="pb-1">
                <a href="/">Terms &amp; Conditions</a>
              </li>
              <li className="pb-1">
                <a href="/ " className="py-1 ">
                  Privacy Policy
                </a>
              </li>
              <li className="pb-1">
                <a href="/ " className="py-1 ">
                  Affiliates
                </a>
              </li>
              <li className="pb-1">
                <a href="/ " className="py-1 ">
                  Return Policy
                </a>
              </li>
              <li className="pb-1">
                <a href="/ " className="py-1 ">
                  Web Development
                </a>
              </li>
            </ul>
          </div>
          <div className=" col-span-2">
            <h2 className="footer__widget-title text-lg font-semibold pb-8">
              Our Company
            </h2>
            <ul className="footer__menu text-base ">
              <li className=" pb-1">
                <a href="/ " className="py-1 ">
                  My Account
                </a>
              </li>
              <li className="pb-1">
                <a href="/ " className="py-1 ">
                  Order History
                </a>
              </li>
              <li className="pb-1">
                <a href="/ " className="py-1 ">
                  Returns
                </a>
              </li>
              <li className="pb-1">
                <a href="/ " className="py-1 ">
                  Wish List
                </a>
              </li>
              <li className="pb-1">
                <a href="/ " className="py-1 ">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
          <div className=" col-span-4">
            <h2 className=" text-lg font-semibold pb-8 ">Newsletter</h2>
            <p className="">
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
            <div className=" h-28 pt-10   ">
              <form>
                <input
                  type="text"
                  className="py-5 pl-6 pr-36 rounded-r-full rounded-l-full  absolute"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="absolute  px-5 py-3 ml-56 mt-2 text-black font-medium  bg-orange-500 rounded-3xl inline-block submit"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="  bg-slate-900 border-t-2 border-indigo-300 row-span-1 py-10 text-center -mb-12">
        <p className="text-white">
          © 2023 — Banizzo by{" "}
          <a href="https://codexup.com/" className="text-orange-500">
            CodeXup
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
