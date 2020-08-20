import { useRouter } from 'next/router'
import styled from 'styled-components'

import * as StyleConstant from '../../utils/style-constants'
import { breakpoint } from '../../utils/style-breakpoints'

import Header from './header'
import NavBar from './nav-bar'
import Footer from './footer'

const StyleContent = styled.div`
  background-color: ${StyleConstant.color.white};
  flex: 1;
`

const NoHeroPaddingStyle = styled.div`
  padding: 0;
  ${breakpoint.sm`
    padding: ${StyleConstant.height.navBarMD} 0 0 0;
  `}
`

const noHeroRoutes = ['/posts/[slug]']

const Layout = (props) => {
  const router = useRouter()

  return (
    <>
      <Header />
      <StyleContent>
        <NavBar noHero={noHeroRoutes.includes(router.pathname)} />
        {noHeroRoutes.includes(router.pathname) && <NoHeroPaddingStyle />}
        {props.children}
      </StyleContent>
      <Footer />
    </>
  )
}

export default Layout
