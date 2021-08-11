import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Aboutpage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    return(
        <Layout location={location} title={siteTitle}>
        <Seo title="about" />
            <article className="aboutMe">
                <h4>안녕하세요, hyesse입니다. 반갑습니다. 👋🏼👋🏼</h4>
                <p>원래는 개인 일상 기록용으로 네이버와 티스토리에 블로그를 운영했었는데, <br />명색에 <strike>퍼블리셔</strike>라는 사람이 자기 개인 블로그 하나쯤 가지고 있어야 하지 않나 하는 생각에 개발하게 된 블로그입니다.</p>
                <p>퍼블리셔의 삶이 길진 않았지만 개인적으로 일을 하면 할수록 욕심이 생겼습니다. <br /> <span className="color_point">백엔드 개발자들에게 무시당하기 일쑤였고(그렇다고 백엔드 개발자를 욕하는 건 아닙니다)</span>자바스크립트가 어렵다고만 생각했기 때문에, 이번 블로그를 만들면서 그동안 제가 갈고닦은 노력과 큰돈 들여 책 사고 인강듣고 했던 것들이 헛된 게 아니라는 걸 입증하는 시간이 되었던 것 같습니다. (+ 무시당할만한 사람도 아니구나 하는 생각도 들었네요🔥)</p>
                <p>이 블로그는 Gatsby + Netlify로 개발되었고, 앞으로 제 개인 프로젝트들을 기록할 예정입니다. </p>
                <p>그럼 방문해주신 모든 분들, 건강하시고 돈 많이 버시길 바라겠습니다! </p>
            </article>
        </Layout>
    )
}

export default Aboutpage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`