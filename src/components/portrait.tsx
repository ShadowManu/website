import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Portrait = () => {
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

  return <Img fluid={fluid} style={styles.style} imgStyle={styles.imgStyle} />
}

const styles = {
  style: {
    minHeight: "200px",
    height: "calc(100vh - 200px)",
  },
  imgStyle: {
    objectPosition: "50% 30%",
  },
}

export default Portrait
