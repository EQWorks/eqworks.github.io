import * as React from 'react'
import Nav from './nav/nav'
import Footer from './footer/footer'
import HomeHero from './homeHero'
import { ScreenClassProvider } from 'react-grid-system'

const Layout = ({ children }) => {
  return (
    <ScreenClassProvider className='global-wrapper'>
      <Nav />
      <HomeHero />
      <main>{children}</main>
      <Footer />
    </ScreenClassProvider>
  )
}

export default Layout
