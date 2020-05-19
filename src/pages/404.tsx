import React from "react"

import SEO from "../components/seo"
import Shell from "../components/shell"

const NotFoundPage = () => (
  <Shell>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Shell>
)

export default NotFoundPage
