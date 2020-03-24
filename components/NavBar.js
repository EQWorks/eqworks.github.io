import Link from 'next/link'
import styled from 'styled-components'
import * as GlobalStyles from '../utils/style-variables'
import { breakpoint } from '../utils/style-breakpoints'

const StyleNav = styled.nav`
  background-color: red;
  height: ${GlobalStyles.heights.navBar};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`

const StyleLink = styled.a`
  background-color: blue;
  color: red;
  cursor: pointer;

  ${breakpoint.xs`
    color: orange
  `}
`

export default function NavBar () {
  return (
    <StyleNav>
      <Link href='/'>
        <StyleLink>Home</StyleLink>
      </Link>
      <Link href='/atom'>
        <StyleLink>Atom</StyleLink>
      </Link>
    </StyleNav>
  )
}
