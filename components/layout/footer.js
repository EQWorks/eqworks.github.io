import Link from 'next/link'
import styled from 'styled-components'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'
import { Twitter } from '@styled-icons/boxicons-logos/Twitter'

import Button from '../shared/button'

const StyleFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.blue};
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.footer};
  .cta {
    background-image: url('/images/components/fallback/footer-background.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    color: ${({ theme }) => theme.color.white};
    margin: 0 auto ${({ theme }) => theme.spacing[6]}px auto;
    padding: ${({ theme }) => theme.spacing[12]}px
      ${({ theme }) => theme.spacing[2]}px;
    text-align: center;
    @media ${({ theme }) => theme.breakpoint.sm} {
      margin: 0 auto ${({ theme }) => theme.spacing[8]}px auto;
    }
    @media ${({ theme }) => theme.breakpoint.md} {
      margin: 0 auto ${({ theme }) => theme.spacing[10]}px auto;
    }
    @media ${({ theme }) => theme.breakpoint.lg} {
      margin: 0 auto ${({ theme }) => theme.spacing[12]}px auto;
    }
    h2 {
      margin: 0 auto ${({ theme }) => theme.spacing[2]}px auto;
      text-transform: uppercase;
    }
  }
  .content {
    color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-wrap: wrap;
    font-size: 0.9em;
    justify-content: flex-start;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.width.page};
    padding: ${({ theme }) => theme.spacing[2]}px;
    .contact {
      margin: 0 0 ${({ theme }) => theme.spacing[4]}px 0;
      text-align: center;
      width: 100%;
      @media ${({ theme }) => theme.breakpoint.sm} {
        text-align: left;
        width: 25%;
      }
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
          margin: 0 0 ${({ theme }) => theme.spacing[1]}px 0;
          a {
            font-size: 0.9em;
            color: ${({ theme }) => theme.color.white};
            text-decoration: none;
          }
          p {
            font-size: 0.9em;
          }
        }
        .email {
          a {
            text-decoration: underline;
          }
        }
        .privacy {
          margin: 0 0 ${({ theme }) => theme.spacing[3]}px 0;
        }
        .social {
          margin: 0 0 ${({ theme }) => theme.spacing[3]}px 0;
          div {
            align-items: center;
            display: flex;
            justify-content: center;
            @media ${({ theme }) => theme.breakpoint.sm} {
              justify-content: flex-start;
            }
            a {
              margin: 0 ${({ theme }) => theme.spacing[1]}px 0 0;
              svg {
                max-width: 25px;
                width: 100%;
              }
            }
          }
        }
      }
      .line-break {
        display: inline;
        @media ${({ theme }) => theme.breakpoint.sm} {
          display: none;
        }
      }
      .logo {
        font-size: 1.75em;
        font-weight: ${({ theme }) => theme.font.semiBold};
        line-height: 1em;
        margin: 0 0 ${({ theme }) => theme.spacing[3]}px 0;
      }
    }
    .pages {
      box-sizing: border-box;
      padding: 0 ${({ theme }) => theme.spacing[2]}px
        ${({ theme }) => theme.spacing[4]}px 0;
      width: 50%;
      @media (min-width: 400px) {
        width: 33%;
      }
      @media ${({ theme }) => theme.breakpoint.xs} {
        width: 25%;
      }
      @media ${({ theme }) => theme.breakpoint.sm} {
        width: 15%;
      }
      p {
        font-size: 1em;
        font-weight: ${({ theme }) => theme.font.bold};
        margin: 0 0 ${({ theme }) => theme.spacing[2]}px 0;
        text-transform: uppercase;
      }
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
          margin: 0 0 ${({ theme }) => theme.spacing[1]}px 0;
          a {
            font-size: 0.9em;
            color: ${({ theme }) => theme.color.white};
            text-decoration: none;
          }
          p {
            font-size: 0.9em;
          }
        }
      }
    }
    .end {
      margin: 0;
    }
  }
  .no-cta-spacing {
    background-color: ${({ theme }) => theme.color.blue};
    height: ${({ theme }) => theme.spacing[6]}px;
    width: 100%;
  }
`

export default function Footer({ noFooter, noFooterCTA }) {
  if (noFooter) {
    return null
  }

  return (
    <StyleFooter>
      {!noFooterCTA && (
        <div className='cta'>
          <h2>LET'S GROW TOGETHER.</h2>
          <Button href='/contact' secondary text='Connect Here' />
        </div>
      )}
      {noFooterCTA && <div className='no-cta-spacing' />}
      <div className='content'>
        <div className='contact'>
          <p className='logo'>EQ WORKS</p>
          <ul>
            <li className='email'>
              <Link href='mailto:info@eqworks.com'>
                <a>info@eqworks.com</a>
              </Link>
            </li>
            <li className='privacy'>
              <Link href='/privacy-policy'>
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li className='social'>
              <div>
                <Link href='https://twitter.com/eqworkscorp/'>
                  <a rel='noopener noreferrer' target='_blank'>
                    <Twitter aria-label='Twitter icon' role='img' />
                  </a>
                </Link>
                <Link href='https://www.linkedin.com/company/eq-works/'>
                  <a rel='noopener noreferrer' target='_blank'>
                    <Linkedin aria-label='Twitter icon' role='img' />
                  </a>
                </Link>
                <Link href='https://www.github.com/EQWorks/'>
                  <a rel='noopener noreferrer' target='_blank'>
                    <Github aria-label='GitHub icon' role='img' />
                  </a>
                </Link>
              </div>
            </li>
            <li>
              <p>
                © 2020 EQ Inc.{' '}
                <span className='line-break'>
                  <br />
                </span>
                All Rights Reserved.
              </p>
            </li>
          </ul>
        </div>

        <div className='pages'>
          <p>Info</p>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/covid-19'>
                <a>Covid-19</a>
              </Link>
            </li>
            <li>
              <Link href='/marketers'>
                <a>Marketers</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className='pages'>
          <p>Products</p>
          <ul>
            <li>
              <Link href='/locus'>
                <a>Locus DMP</a>
              </Link>
            </li>
            <li>
              <Link href='/atom'>
                <a>Atom DSP</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className='pages'>
          <p>Insights</p>
          <ul>
            <li>
              <Link href='/press-releases'>
                <a>Press Releases</a>
              </Link>
            </li>
            <li>
              <Link href='/financial-reports'>
                <a>Financial Reports</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className='end pages'>
          <p>Company</p>
          <ul>
            <li>
              <Link href='/investors'>
                <a>Investors</a>
              </Link>
            </li>
            <li>
              <Link href='/careers'>
                <a>Careers</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </StyleFooter>
  )
}
