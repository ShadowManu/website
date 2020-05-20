import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Portrait = ({ className }) => {
  const data = useStaticQuery(graphql`
    query Portrait {
      image: file(relativePath: { eq: "portrait.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const fluid = data.image.childImageSharp.fluid

  return <Img fluid={fluid} className={className} imgStyle={imgStyle} />
}

const imgStyle = { objectPosition: "50% 20%" }

export default Portrait
