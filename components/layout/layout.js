import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import * as gtag from '../../api/google-analytics.js'

import Header from './header'
import NavBar from './nav-bar'
import Footer from './footer'

const StyleContent = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  flex: 1;
`

const NO_FOOTER_ROUTES = ['/atom', '/locus']

export default function Layout(props) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Header />
      <StyleContent>
        <NavBar />
        {props.children}
      </StyleContent>
      <Footer noFooter={NO_FOOTER_ROUTES.includes(router.pathname)} />
    </>
  )
}
