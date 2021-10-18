import * as React from 'react'
// import { Link } from "gatsby"
import Nav from './nav/nav'
import Footer from './footer/footer'
import HomeHero from './homeHero'
import { ScreenClassProvider } from 'react-grid-system'

const Layout = ({ location, title, children }) => {
  return (
    <ScreenClassProvider className='global-wrapper'>
      {/* <header className="global-header">{header}</header> */}
      <Nav />
      <HomeHero />

      <main>{children}</main>

      <Footer />
    </ScreenClassProvider>
  )
}

export default Layout
