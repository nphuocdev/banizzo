import React from "react"
import { Helmet } from "react-helmet"
// import { useStaticQuery, graphql } from 'gatsby'

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         description

//       }
//     }
//   }
// `

const Seo = ({ title, description }) => {
  // const {site}= useStaticQuery(query)
  // const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={title}
      meta={[{ name: `description`, content: description }]}
      // href={[{ rel: `stylesheet`, font }]}`
    ></Helmet>
  )
}

export default Seo
