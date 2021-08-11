import React from 'react'
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Seo from "../components/seo"
import '../../src/portfolio.css'

import Healthmax_main from '../images/'

const Portfolio = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    return(
        <div className="container">
            <Seo title="Portfolio" />
            
            <div className="p-headerWrap">
                <header>
                    <a className="headerMenu-home" href="jacascript:void(0)">home</a>
                    <a className="headerMenu-aboutme" href="jacascript:void(0)">about me</a>
                    <a className="headerMenu-works" href="jacascript:void(0)">works</a>
                    <a className="headerMenu-contact" href="jacascript:void(0)">contact</a>
                    <Link to="/"><a className="headerMenu-blog">blog</a></Link>
                </header>
            </div>
            <section className="section-0">
                section-0-home<br />
                메인 미정<br />
                메인 미정<br />
                메인 미정<br />
                메인 미정<br />
                메인 미정<br />
                메인 미정<br />
                메인 미정<br />
                메인 미정<br />
                메인 미정<br />
                메인 미정<br />
                스크롤을 해주세요.<br />
                <span className="scrollImg">
                    <span className="scrollBall"></span>
                </span>
            </section>
            <section className="section-1">
                section-1-about me
                <div className="aboutme">
                  <div className="aboutmeTitle">
                    <h1>저는 </h1>
                    <ul className="aboutmeKeyword">
                      <li>일을 즐길줄 아는</li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                    <h1>는 사람입니다.</h1>
                    </div>
                    <div className="aboutmeConWrap">
                      <div className="aboutmeCon">
                        시간가는 줄 모르고 푹 빠져서 일을 즐기는 사람입니다.  업무를 통해 한단계씩 성장해나가는 모습을 보는 것에 큰 에너지를 받습니다. 힘들거나 어려워도 즐길 수 있기 때문에 지금 이 자리까지 올 수 있었던 것 같습니다.  
                      </div>
                      <div className="aboutmeCon">
                        공부하는 걸 좋아합니다. 하루에 내가 어떤 걸 배우고 모르던 걸 알게 되었는지를 정리할 때 뿌듯하기도 하고, 그로써 프론트엔드라는 직무와 함께 끝까지 발전해 나가고 싶다는 생각을 하기도 합니다. 새로운 분야를 공부하고 배워나가는 것에 있어 두려움이 없고 계속해서 배워나가고 싶습니다.
                      </div>
                      <div className="aboutmeCon">
                        책임감이 강해 끝까지 해결하려고 노력합니다. 주어진 일은 어떻게 해서든 끝을 보려는 성격이고, 완벽주의적인 성격 탓에 꼭 내 손으로 끝을 마무리 지어야 직성이 풀립니다. 
                      </div>
                    </div>
                </div>
                <div className="timelineWrap">
                  <span className="line-hori"></span>
                  <span className="timeline-dot"></span>
                  <div className="timelineCon">

                  </div>
                </div>
            </section>
            <section className="section-2">
                section-2 works
                <div className="worksWrap">
                    <div className="worksFrame">
                      <img src={  } alt="healthmax-main" />
                    </div>
                    <div className="worksFrame">
                    
                    </div>
                    <div className="worksFrame">
                    
                    </div>
                    <div className="worksFrame">
                    
                    </div>
                </div>
            </section>
            <section className="section-3">
                section-3-contact
                <div className="contactWrap">

                </div>
            </section>
            <footer>
              <div className="footerWrap">

              </div>
            </footer>
        </div>
    )
}

export default Portfolio

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