import React from "react"
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
export const navbardata = [
  {
    title: "Home",
    path: "/",
    children: [
      { name: "digital Agency" },
      { name: "digital Agency dark" },
      { name: "digital Agency Banner Slider" },
      { name: "Creative Agency" },
      { name: "Creative Agency dark" },
    ],
  },

  {
    title: "About",
    path: "/",
  },
  {
    title: "Service",
    path: "/",
    children: [
      { name: "Service" },
      { name: "Service Dark" },
      { name: "Service V.2" },
      { name: "Service V.2 Dark" },
    ],
  },

  {
    title: "Page",
    path: "/",
    children: [
      {
        name: "Home",
        path: "/",
        childname: [
          { name1: "digital Agency" },
          { name1: "digital Agency dark" },
          { name1: "digital Agency Banner Slider" },
          { name1: "Creative Agency" },
          { name1: "Creative Agency dark" },
        ],
      },

      {
        name: "Service",
        path: "/",
        childname: [
          { name1: "Service" },
          { name1: "Service Dark" },
          { name1: "Service V.2" },
          { name1: "Service V.2 Dark" },
          { name1: "Price" },
          { name1: "Price Dark" },
          { name1: "Price V.2" },
          { name1: "Price V.2 Dark" },
        ],
      },
      {
        name: "Portfolio",
        path: "/",
        childname: [
          { name1: "Portfolio" },
          { name1: "Portfolio Dark" },
          { name1: "Portfolio V.2" },
          { name1: "Portfolio V.2 Dark" },
        ],
      },
      {
        name: "Team",
        path: "/",
        childname: [
          { name1: "Team" },
          { name1: "Team Dark" },
          { name1: "Team Detail" },
          { name1: " Team Detail Dark" },
        ],
      },
      {
        name: "Blog",
        path: "/",
        childname: [
          { name1: "Blog" },
          { name1: "Blog Dark" },
          { name1: "Blog V.2" },
          { name1: "Blog V.2 Dark" },
          { name1: "Blog Detail" },
          { name1: "Blog Detail Dark" },
          { name1: "Blog Detail V.2" },
          { name1: "Blog Detail V.2 Dark" },
        ],
      },

      {
        name: "Others",
        path: "/",
        childname: [
          { name1: "About" },
          { name1: "About Dark" },
          { name1: "Contact" },
          { name1: "Contact Dark" },
          { name1: "FAQs" },
          { name1: "FAQs Dark" },
          { name1: "404" },
          { name1: "404 Dark" },
        ],
      },
    ],
  },
  {
    title: "Blog",
    path: "/",
    children: [
      {
        name: "Blog",
        childname: [
          { name1: "Blog Detail" },
          { name1: "Blog Detail Dark" },
          { name1: "Blog Detail V.2" },
          { name1: "Blog Detail V.2 Dark" },
        ],
      },
      { name: "Blog Dark" },
      { name: "Blog V.2" },
      { name: "Blog V.2 Dark" },
    ],
  },

  {
    title: "Contact",
    path: "/",
  },
]

export const sidebardata = [
  {
    children: [
      {
        icon: <FaMapMarkerAlt className=" col-span-1  text-orange-700  " />,
        name: " 500 Treat Ave, Suite 200 San Francisco,CA 94110, USA-2105",
      },
      {
        icon: <FaPhoneAlt className=" col-span-1  text-orange-700  " />,
        name: "+025 1098 259 145 (Support)",
      },
      {
        icon: <FaEnvelope className=" col-span-1  text-orange-700  " />,
        name: " Info,gurudev@mail.com",
      },
    ],
    social: [
      { icon: <FaFacebookF className=" text-xl " /> },
      { icon: <FaTwitter className=" text-xl " /> },
      { icon: <FaInstagram className=" text-xl " /> },
      { icon: <FaPinterestP className=" text-xl " /> },
    ],
  },
]
