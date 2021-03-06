import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <article className="notFoundPage">
        <h1> μπ, μμ§ νμ΄μ§λ₯Ό μμ μ€μ΄μμ : ( </h1>
        <p>μ΄μ  νμ΄μ§λ‘ λμκ°μ λ€λ₯Έ νμ΄μ§λ₯Ό λ°©λ¬Έν΄λ³΄μΈμ! π </p>
      </article>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
