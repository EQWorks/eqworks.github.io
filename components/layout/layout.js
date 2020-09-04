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
    padding: calc(${({ theme }) => theme.height.navBarMD} / 2);
  }
`

const NO_HERO_ROUTES = [
  '/atom',
  '/case-study/[slug]',
  '/locus',
  '/press-release/[slug]'
]
const NO_FOOTER_ROUTES = ['/atom', '/locus']

export default function Layout(props) {
  const router = useRouter()

  return (
    <>
      <Header />
      <StyleContent>
        <NavBar noHero={NO_HERO_ROUTES.includes(router.pathname)} />
        {NO_HERO_ROUTES.includes(router.pathname) && <NoHeroPaddingStyle />}
        {props.children}
      </StyleContent>
      <Footer noFooter={NO_FOOTER_ROUTES.includes(router.pathname)} />
    </>
  )
}
