import Link from 'next/link'
import styled from 'styled-components'
import * as GlobalStyles from '../utils/style-variables'
import { breakpoint } from '../utils/style-breakpoints'

const StyleNav = styled.nav`
  align-items: center;
  box-sizing: border-box;
  flex-direction: row;
  left: 0;
  position: sticky;
  top: 0;
  width: 100%;
  .navbar {
    background-color: ${GlobalStyles.colors.white};
    display: flex;
    height: 55px;
    justify-content: space-between;
    padding: 0 18px;
    ${breakpoint.sm`
      display: none;
    `}
    .navbar__left {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
      a {
        align-items: center;
        display: flex;
        justify-content: center;
        img {
          height: 25px;
          width: auto;
        }
      }
    }
    .navbar__right {
      align-items: center;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      div {
        background-color: ${GlobalStyles.colors.greyLight};
        height: 2px;
        margin: 3px 0;
        width: 25px;
      }
      ${breakpoint.sm`
        display: none;
      `}
    }
  }
  .navbar--md {
    display: none;
    .navbar--md__left {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: flex-start;
      width: 25%;
      a {
        align-items: center;
        display: flex;
        justify-content: center;
        img {
          height: 50px;
          width: auto;
        }
      }
    }
    .navbar--md__right {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      width: 75%;
      a {
        color: ${GlobalStyles.colors.white};
        cursor: pointer;
        font-family: titleRegular, sans-serif;
        font-size: 0.85em;
        margin: 0 20px;
        text-decoration: none;
        text-transform: uppercase;
        &:last-child {
          margin: 0 0 0 20px;
        }
      }
    }
    ${breakpoint.sm`
      display: flex;
      justify-content: space-between;
      padding: 18px;
    `}
  }
`

export default function NavBar () {
  return (
    <StyleNav>
      <div className='navbar'>
        <div className='navbar__left'>
          <Link href='/'>
            <a><img src='/images/logo-eq-works-square-blue.png' /></a>
          </Link>
        </div>
        <div className='navbar__right'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className='navbar--md'>
        <div className='navbar--md__left'>
          <Link href='/'>
            <a><img src='/images/logo-eq-works-white.png' /></a>
          </Link>
        </div>
        <div className='navbar--md__right'>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/atom'>
            <a>Atom</a>
          </Link>
          <Link href='/locus'>
            <a>Locus</a>
          </Link>
          <Link href='/visilink'>
            <a>Visilink</a>
          </Link>
          <Link href='/marketers'>
            <a>Marketers</a>
          </Link>
        </div>
      </div>
    </StyleNav>
  )
}
