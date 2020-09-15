import Link from 'next/link'
import styled from 'styled-components'
import { Facebook } from '@styled-icons/boxicons-logos/Facebook'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'
import { Twitter } from '@styled-icons/boxicons-logos/Twitter'

import ImgWebP from '../shared/img-webp'

const StyleFooter = styled.footer`
  background-color: #1e1e1e;
  color: ${({ theme }) => theme.color.greyTextFooter};
  font-size: 0.9em;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.footer};
  .footer__inner {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    max-width: 1400px;
    padding: 60px 20px 20px 20px;
    @media ${({ theme }) => theme.breakpoint.xs} {
      padding: 60px 40px 20px 40px;
    }
    @media ${({ theme }) => theme.breakpoint.sm} {
      padding: 60px 50px 40px 50px;
    }
    @media ${({ theme }) => theme.breakpoint.lg} {
      align-items: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .footer__inner__about {
      padding: 0 0 40px 0;
      width: 100%;
      p {
        padding: 0 20px;
        &:first-child {
          color: ${({ theme }) => theme.color.white};
          font-family: ${({ theme }) => theme.font.copy.name}, sans-serif;
          font-weight: ${({ theme }) => theme.font.copy.medium};
          padding: 0 0 40px 0;
        }
      }
      @media ${({ theme }) => theme.breakpoint.lg} {
        box-sizing: border-box;
        padding: 0 40px 40px 0;
        width: 50%;
      }
    }
    .footer__inner__contact {
      padding: 0 0 40px 0;
      width: 100%;
      p {
        &:first-child {
          color: ${({ theme }) => theme.color.white};
          font-family: ${({ theme }) => theme.font.copy.name}, sans-serif;
          font-weight: ${({ theme }) => theme.font.copy.medium};
          padding: 0 0 40px 0;
        }
        &:last-child {
          padding: 40px 0 0 0;
        }
      }
      @media ${({ theme }) => theme.breakpoint.lg} {
        width: 25%;
      }
    }
    .footer__inner__social {
      padding: 0 0 40px 0;
      width: 100%;
      div {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        a {
          color: ${({ theme }) => theme.color.greyTextFooter};
          margin: 0 10px;
          transition: all 0.25s ease-out;
          &:first-child {
            margin: 0 10px 0 0;
            &:hover {
              color: #00acee;
            }
          }
          &:nth-child(2) {
            &:hover {
              color: #3b5998;
            }
          }
          &:nth-child(3) {
            &:hover {
              color: #0e76a8;
            }
          }
          svg {
            height: 30px;
            width: auto;
          }
        }
      }
      p {
        color: ${({ theme }) => theme.color.white};
        font-family: ${({ theme }) => theme.font.copy.name}, sans-serif;
        font-weight: ${({ theme }) => theme.font.copy.medium};
        padding: 0 0 40px 0;
      }
      @media ${({ theme }) => theme.breakpoint.lg} {
        width: 25%;
      }
    }
    .footer__inner__legal {
      font-size: 0.8em;
      text-align: right;
      width: 100%;
      a {
        color: ${({ theme }) => theme.color.greyTextFooter};
        font-family: ${({ theme }) => theme.font.copy.name}, sans-serif;
        font-weight: ${({ theme }) => theme.font.copy.medium};
        text-decoration: none;
      }
      @media ${({ theme }) => theme.breakpoint.lg} {
        margin: 0 auto;
        max-width: 1200px;
      }
    }
  }
`

export default function Footer({ noFooter }) {
  if (noFooter) {
    return null
  }

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
            <Link href='https://twitter.com/eqworkscorp/'>
              <a rel='noopener noreferrer' target='_blank'>
                <Twitter aria-label='Twitter icon' role='img' />
              </a>
            </Link>
            <Link href='https://www.facebook.com/eqworkscorp/'>
              <a rel='noopener noreferrer' target='_blank'>
                <Facebook aria-label='Facebook icon' role='img' />
              </a>
            </Link>
            <Link href='https://www.linkedin.com/company/eq-works/'>
              <a rel='noopener noreferrer' target='_blank'>
                <Linkedin aria-label='Twitter icon' role='img' />
              </a>
            </Link>
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
