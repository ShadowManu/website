import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  description?: string
  lang?: string
  meta?: object[]
  title?: string
}

const SEO: React.FC<Props> = ({ description, lang, meta, title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const metaDescription = description || data.site.siteMetadata.description

  const allMeta = [
    { name: `description`, content: metaDescription },
    { property: `og:title`, content: title },
    { property: `og:description`, content: metaDescription },
    { property: `og:type`, content: `website` },
    { name: `twitter:card`, content: `summary` },
    { name: `twitter:creator`, content: data.site.siteMetadata.author },
    { name: `twitter:title`, content: title },
    { name: `twitter:description`, content: metaDescription },
    ...meta,
  ]

  return (
    <Helmet
      htmlAttributes={{ lang }}
      defaultTitle={`${data.site.siteMetadata.title}`}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={allMeta}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
