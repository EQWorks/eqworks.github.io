import { useRouter } from 'next/router'
import styled from 'styled-components'

import Header from './header'
import NavBar from './nav-bar'
import Footer from './footer'

const StyleContent = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  flex: 1;
`

const NoHeroPaddingStyle = styled.div`
  padding: 0;
  @media ${({ theme }) => theme.breakpoint.sm} {
    padding: ${({ theme }) => theme.height.navBarMD};
  }
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
