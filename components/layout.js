import { useRouter } from 'next/router'
import styled from 'styled-components'
import * as GlobalStyles from '../utils/style-constants'
import { breakpoint } from '../utils/style-breakpoints'

import Header from './header'
import NavBar from './nav-bar'
import Footer from './footer'

const StyleContent = styled.div`
  background-color: ${GlobalStyles.color.white};
  flex: 1;
`

const NoHeroPaddingStyle = styled.div`
  padding: 0;
  ${breakpoint.sm`
    padding: ${GlobalStyles.height.navBarMD} 0 0 0;
  `}
`

const noHeroRoutes = ['/posts/[slug]']

export default function Layout(props) {
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
