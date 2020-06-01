import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Página não encontrada</h1>
    <p><i>Tente refinar sua pesquisa.</i></p>
  </Layout>
)

export default NotFoundPage
