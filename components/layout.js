import { useRouter } from 'next/router'
import styled from 'styled-components'
import * as GlobalStyles from '../utils/style-variables'

import Header from './header'
import NavBar from './nav-bar'
import NoHeroPadding from './no-hero-padding'
import Footer from './footer'

const StyleContent = styled.div`
  background-color: ${GlobalStyles.colors.white};
  flex: 1;
`

const noHeroRoutes = ['/posts/[slug]']

export default function Layout(props) {
  const router = useRouter()

  return (
    <>
      <Header />
      <StyleContent>
        <NavBar noHero={noHeroRoutes.includes(router.pathname)} />
        {noHeroRoutes.includes(router.pathname) && (
          <NoHeroPadding />
        )}
        {props.children}
      </StyleContent>
      <Footer />
    </>
  )
}
