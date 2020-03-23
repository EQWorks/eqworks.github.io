import Link from 'next/link'
import styled from 'styled-components'
import * as GlobalStyles from '../public/styles/_variables'
import { respondTo } from '../public/styles/_respondTo'

const StyleLink = styled.a`
  background-color: blue;
  color: red;
  cursor: pointer;

  @media (min-width: ${GlobalStyles.breakpoints.xs}) {
    background-color: green;
  }
  ${respondTo.xs`
    color: orange
  `}

  @media (min-width: ${GlobalStyles.breakpoints.sm}) {
    background-color: yellow;
  }
  ${respondTo.sm`
    color: yellow
  `}

  @media (min-width: ${GlobalStyles.breakpoints.md}) {
    background-color: orange;
  }
  ${respondTo.md`
    color: green
  `}

  @media (min-width: ${GlobalStyles.breakpoints.lg}) {
    background-color: red;
  }
  ${respondTo.lg`
    color: blue
  `}
`

export default function NavBar () {
  return (
    <nav>
      <Link href='/'>
        <StyleLink>Home</StyleLink>
      </Link>
      <Link href='/atom'>
        <StyleLink>Atom</StyleLink>
      </Link>
    </nav>
  )
}
