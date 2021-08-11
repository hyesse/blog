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
        <h1> 앗🙊, 아직 페이지를 수정중이에요 : ( </h1>
        <p>이전 페이지로 돌아가서 다른 페이지를 방문해보세요! 🙉 </p>
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
