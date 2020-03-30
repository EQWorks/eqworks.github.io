import Link from 'next/link'
import styled from 'styled-components'
import * as GlobalStyles from '../utils/style-variables'
import { breakpoint } from '../utils/style-breakpoints'

const StyleFooter = styled.footer`
  align-items: center;
  background-color: #1E1E1E;
  color: #808080;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.9em;
  padding: 60px 20px 20px 20px;
  .footer__about {
    padding: 0 0 40px 0;
    width: 100%;
    p {
      padding: 0 20px;
      &:first-child {
        color: ${GlobalStyles.colors.white};
        font-family: copyMedium, sans-serif;
        padding: 0 0 40px 0;
      }
    }
    ${breakpoint.lg`
      width: 50%;
    `}
  }
  .footer__contact {
    padding: 0 0 40px 0;
    width: 100%;
    p {
      &:first-child {
        color: ${GlobalStyles.colors.white};
        font-family: copyMedium, sans-serif;
        padding: 0 0 40px 0;
      }
      &:last-child {
        padding: 40px 0 0 0;
      }
    }
    ${breakpoint.lg`
      width: 25%;
    `}
  }
  .footer__social {
    padding: 0 0 40px 0;
    width: 100%;
    div {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      img {
        height: 24px;
        padding: 0 10px;
        width: auto;
      }
    }
    p {
      color: ${GlobalStyles.colors.white};
      font-family: copyMedium, sans-serif;
      padding: 0 0 40px 0;
    }
    ${breakpoint.lg`
      width: 25%;
    `}
  }
  .footer__legal {
    font-size: 0.8em;
    text-align: right;
    width: 100%;
    a {
      color: #808080;
      font-family: copyMedium, sans-serif;
      text-decoration: none;
    }
  }
  ${breakpoint.xs`
    padding: 60px 40px 20px 40px;
  `}
  ${breakpoint.sm`
    padding: 60px 50px 20px 50px;
  `}
  ${breakpoint.lg`
    flex-direction: row;
    flex-wrap: wrap;
  `}
`

export default function Footer () {
  return (
    <StyleFooter>
      <div className='footer__about'>
        <p>About</p>
        <p>EQ Works [www.eqworks.com] provides a smarter way to target customers using Location Behavior. Using first-party, location-based behavior signals, advanced data analytics, and proprietary software, EQ Works creates and targets customized, performance-boosting audience segments. Proprietary algorithms and data, combined with Artificial Intelligence, generate attribution models that connect consumer behavior in the physical world to behavior in the digital world, helping solve complex challenges for brands and&nbsp;agencies.</p>
      </div>
      <div className='footer__contact'>
        <p>EQ Works Toronto</p>
        <p>
          1235 Bay Street, Suite 401<br />
          Toronto, ON M5R 3K4
        </p>
        <p>Tel. +1 888-597-8889</p>
      </div>
      <div className='footer__social'>
        <p>Find Us</p>
        <div>
          <img src='/images/logo-twitter-grey.png' />
          <img src='/images/logo-facebook-grey.png' />
          <img src='/images/logo-linkedin-grey.png' />
        </div>
      </div>
      <div className='footer__legal'>
        <p>© 2020 EQ Works | <Link href='/privacy-policy'><a>Privacy Policy</a></Link> | <Link href='/browser-opt-out'><a>Browser Opt-Out</a></Link></p>
      </div>
    </StyleFooter>
  )
}
