import Link from 'next/link'
import styled from 'styled-components'
import * as StyleConstant from '../utils/style-constants'
import { breakpoint } from '../utils/style-breakpoints'

const StyleFooter = styled.footer`
  background-color: #1E1E1E;
  color: #808080;
  font-size: 0.9em;
  position: relative;
  z-index: ${StyleConstant.zIndex.footer};
  .footer__inner {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    max-width: 1400px;
    padding: 60px 20px 20px 20px;
    ${breakpoint.xs`
      padding: 60px 40px 20px 40px;
    `}
    ${breakpoint.sm`
      padding: 60px 50px 40px 50px;
    `}
    ${breakpoint.lg`
      align-items: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
    `}
    .footer__inner__about {
      padding: 0 0 40px 0;
      width: 100%;
      p {
        padding: 0 20px;
        &:first-child {
          color: ${StyleConstant.color.white};
          font-family: copyMedium, sans-serif;
          padding: 0 0 40px 0;
        }
      }
      ${breakpoint.lg`
        box-sizing: border-box;
        padding: 0 40px 40px 0;
        width: 50%;
      `}
    }
    .footer__inner__contact {
      padding: 0 0 40px 0;
      width: 100%;
      p {
        &:first-child {
          color: ${StyleConstant.color.white};
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
    .footer__inner__social {
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
        color: ${StyleConstant.color.white};
        font-family: copyMedium, sans-serif;
        padding: 0 0 40px 0;
      }
      ${breakpoint.lg`
        width: 25%;
      `}
    }
    .footer__inner__legal {
      font-size: 0.8em;
      text-align: right;
      width: 100%;
      a {
        color: #808080;
        font-family: copyMedium, sans-serif;
        text-decoration: none;
      }
      ${breakpoint.lg`
        margin: 0 auto;
        max-width: 1200px;
      `}
    }
  }
`

export default function Footer() {
  return (
    <StyleFooter>
      <div className='footer__inner'>
        <div className='footer__inner__about'>
          <p>About</p>
          <p>
            EQ Works [www.eqworks.com] provides a smarter way to target
            customers using Location Behavior. Using first-party, location-based
            behavior signals, advanced data analytics, and proprietary software,
            EQ Works creates and targets customized, performance-boosting
            audience segments. Proprietary algorithms and data, combined with
            Artificial Intelligence, generate attribution models that connect
            consumer behavior in the physical world to behavior in the digital
            world, helping solve complex challenges for brands
            and&nbsp;agencies.
          </p>
        </div>
        <div className='footer__inner__contact'>
          <p>EQ Works Toronto</p>
          <p>
            1235 Bay Street, Suite 401
            <br />
            Toronto, ON M5R 3K4
          </p>
          <p>Tel. +1 888-597-8889</p>
        </div>
        <div className='footer__inner__social'>
          <p>Find Us</p>
          <div>
            <img alt='twitter icon' src='/images/logo-twitter-grey.png' />
            <img alt='facebook icon' src='/images/logo-facebook-grey.png' />
            <img alt='linkedin icon' src='/images/logo-linkedin-grey.png' />
          </div>
        </div>
        <div className='footer__inner__legal'>
          <p>
            © 2020 EQ Works |{' '}
            <Link href='/privacy-policy'>
              <a>Privacy Policy</a>
            </Link>{' '}
            |{' '}
            <Link href='/browser-opt-out'>
              <a>Browser Opt-Out</a>
            </Link>
          </p>
        </div>
      </div>
    </StyleFooter>
  )
}
