import * as React from "react"
import { Link } from "gatsby"

import Bio from "../components/bio"

const Layout = ({ location, title, children }) => {
    if (typeof window === "undefined" || !window.document) {
        return 0
    }

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const mql = window.matchMedia('(max-width: 1024px');
  function menuShow(){

    let menu = document.querySelector('.headerMenu')
    let menuBtnName1 = document.querySelector('.mobileMenuBtn span:nth-child(1)')
    let menuBtnName2 = document.querySelector('.mobileMenuBtn span:nth-child(2)')

    if(mql) {
      if(menu.classList.contains('on')) {
        menu.classList.remove('on');
        menuBtnName1.innerHTML = 'ME';
        menuBtnName1.style.color = '#fafafa';
        menuBtnName2.innerHTML = 'NU'
        menuBtnName2.style.color = '#fafafa';
      } else {
        menu.classList.add('on');
        menuBtnName1.innerHTML = 'CLO';
        menuBtnName1.style.color = '#ecd504';
        menuBtnName2.innerHTML = 'SE'
        menuBtnName2.style.color = '#ecd504';
      }
    }
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <h1 className="main-headingLogo">
            <Link to="/">{title}</Link>
        </h1>
        <div className="mobileMenuBtn" onClick={ menuShow }>
          <span>ME</span>
          <span>NU</span>
        </div>
        <nav className="headerMenu"> 
          <h1 className="main-heading">
            <Link to="/">{title}</Link>
          </h1>
          <ul className="main-menu">
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li>
              <Link to="/tags">devDiary</Link>
            </li>
            <li><Link to="/portfolio">portfolio</Link></li>
          </ul>
          <Bio />
          
          </nav>
      </header>
      <div className="mainWrap">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <span>Gatsby & hyesse / hyesse All rights reserved.</span>
        </footer>
      </div>
    </div>
  )
}

export default Layout
