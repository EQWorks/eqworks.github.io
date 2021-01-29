import Link from 'next/link'
import styled from 'styled-components'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'
import { Twitter } from '@styled-icons/boxicons-logos/Twitter'

const StyleFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.blue};
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.footer};
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
      width: 100%;
      @media ${({ theme }) => theme.breakpoint.sm} {
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
            justify-content: flex-start;
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
`

export default function Footer({ noFooter }) {
  if (noFooter) {
    return null
  }

  return (
    <StyleFooter>
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
                © 2020 EQ Inc.
                <br />
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
                <a>Locus DSP</a>
              </Link>
            </li>
            <li>
              <Link href='/atom'>
                <a>Atom DMP</a>
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
