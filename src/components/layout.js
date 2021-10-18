import * as React from 'react'
import Nav from './nav/nav'
import Footer from './footer/footer'
import { ScreenClassProvider } from 'react-grid-system'

const Layout = ({
  footerLogos,
  colorLogos,
  footerHdr,
  footerPath,
  footerTxt,
  children
}) => {
  return (
    <ScreenClassProvider className='global-wrapper'>
      <Nav />

      <main>{children}</main>

      <Footer
        showPartners={footerLogos}
        linkHdr={footerHdr}
        linkPath={footerPath}
        linkText={footerTxt}
        colorLogos={colorLogos}
      />
    </ScreenClassProvider>
  )
}

export default Layout
