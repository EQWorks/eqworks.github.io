import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'

const NavStyled = styled.nav`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  left: 0;
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.navBar};
  .desktop {
    align-items: center;
    box-sizing: border-box;
    display: none;
    justify-content: space-between;
    padding: 0;
    @media ${({ theme }) => theme.breakpoint.sm} {
      display: flex;
    }
    .desktop__left {
      align-items: stretch;
      display: flex;
      justify-content: flex-start;
      .desktop__links {
        align-items: center;
        box-sizing: border-box;
        display: flex;
        ul {
          align-items: center;
          box-sizing: border-box;
          display: flex;
          height: 100%;
          list-style: none;
          padding: 0;
        }
        ul li {
          align-items: center;
          box-sizing: border-box;
          display: flex;
          height: 100%;
          position: relative;
          text-align: left;
        }
        ul li a, ul li p {
          color: ${({ theme }) => theme.color.white};
          display: block;
          font-weight: ${({ theme }) => theme.font.light};
          padding: ${({ theme }) => theme.spacing[1]}px ${({ theme }) => theme.spacing[2]}px;
          text-decoration: none;
        }
        ul li a:hover {
          color: ${({ theme }) => theme.color.white};
        }
        ul li ul.dropdown {
          background-color: ${({ theme }) => theme.color.white};
          display: none;
          left: 0;
          min-width: 100%;
          position: absolute;
          top: 100%;
          z-index: ${({ theme }) => theme.zIndex.navBar};
        }
        ul li ul.dropdown li {
          height: auto;
          margin: 0;
          padding: 0;
        }
        ul li ul.dropdown li a {
          color: ${({ theme }) => theme.color.black};
          background-color: ${({ theme }) => theme.color.white};
          font-weight: ${({ theme }) => theme.font.light};
        }
        ul li:hover ul.dropdown {
          display: block;
        }
        ul li ul.dropdown li {
          display: block;
        }
      }
      .desktop__logo {
        a {
          align-items: center;
          display: flex;
          justify-content: center;
          margin: 0 ${({ theme }) => theme.spacing[2]}px;
          padding: ${({ theme }) => theme.spacing[2]}px 0;
        }
        img {
          height: 40px;
          text-align: left;
        }
      }
    }
    .desktop__right {
      box-sizing: border-box;
      display: flex;
      height: ${({ theme }) => theme.height.navBarMD};
      a {
        align-items: center;
        color: ${({ theme }) => theme.color.white};
        display: flex;
        text-decoration: none;
      }
      a:first-child {
        font-size: 0.9em;
        font-weight: ${({ theme }) => theme.font.light};
        padding: 0 ${({ theme }) => theme.spacing[3]}px 0 0;
      }
      a:last-child {
        background-color: ${({ theme }) => theme.color.greyBorder};
        color: ${({ theme }) => theme.color.black};
        font-weight: ${({ theme }) => theme.font.semiBold};
        padding: 0 ${({ theme }) => theme.spacing[2]}px;
      }
    }
  }
  .mobile {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing[1]}px;
    @media ${({ theme }) => theme.breakpoint.sm} {
      display: none;
    }
    .mobile__left {
      align-items: center;
      display: flex;
      justify-content: flex-start;
      a {
        align-items: center;
        display: flex;
        justify-content: center;
        img {
          height: 40px;
          text-align: left;
        }
      }
    }
    .mobile__right {
      height: 100%;
      button {
        align-items: center;
        background: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        div {
          background-color: ${({ theme }) => theme.color.white};
          height: 3px;
          margin: 3px 0;
          width: 30px;
        }
      }
    }
  }
  .mobile__links {
    background-color: ${({ theme }) => theme.color.white};
    box-sizing: border-box;
    color: ${({ theme }) => theme.color.black};
    height: calc(100vh - ${({ theme }) => theme.height.navBar});
    overflow-y: scroll;
    padding: ${({ theme }) => theme.spacing[2]}px ${({ theme }) => theme.spacing[2]}px;
    position: absolute;
    width: 100%;
    z-index: ${({ theme }) => theme.zIndex.navBar};
    ul {
      margin: 0 auto;
      max-width: 500px;
      list-style-type: none;
      padding: 0;
      li {
        border-bottom: 1px solid ${({ theme }) => theme.color.greyBorder};
        box-sizing: border-box;
        padding: ${({ theme }) => theme.spacing[2]}px 0;
        &:first-child {
          padding: 0 0 ${({ theme }) => theme.spacing[2]}px 0;
        }
        &:last-child {
          border-bottom: none;
          padding: ${({ theme }) => theme.spacing[2]}px 0 0 0;
        }
        a {
          color: ${({ theme }) => theme.color.black};
          display: block;
          font-size: 1.5em;
          text-decoration: none;
        }
        details {
          summary {
            cursor: pointer;
            font-size: 1.5em;
          }
          ul {
            font-size: 0.75em;
            margin: 0 0 0 ${({ theme }) => theme.spacing[3]}px;
            li {
              &:first-child {
                padding: ${({ theme }) => theme.spacing[2]}px 0;
              }
            }
          }
        }
      }
    }
  }
`

export default function Section() {
  const [mobileLinks, setMobileLinks] = React.useState(false);

  React.useEffect(() => {
    if (mobileLinks) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [mobileLinks])

  return (
    <NavStyled>
      <div className='mobile'>
        <div className='mobile__left'>
          <Link href='/'>
            <a><img alt='EQ Works company logo' src='/images/components/fallback/logo-eq.svg' /></a>
          </Link>
        </div>
        <div className='mobile__right'>
          <button onClick={() => setMobileLinks(!mobileLinks)}>
            <div />
            <div />
            <div />
          </button>
        </div>
      </div>
      {mobileLinks && (
        <div className='mobile__links'>
          <ul>
            <li>
              <Link href='/'>
                <a onClick={() => setMobileLinks(!mobileLinks)}>Home</a>
              </Link>
            </li>
            <li>
              <details>
                <summary>Products</summary>
                <ul>
                  <li>
                    <Link href='/locus'>
                      <a onClick={() => setMobileLinks(!mobileLinks)}>Locus</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/atom'>
                      <a onClick={() => setMobileLinks(!mobileLinks)}>Atom</a>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href='/marketers'>
                <a onClick={() => setMobileLinks(!mobileLinks)}>Marketers</a>
              </Link>
            </li>
            <li>
              <Link href='/investors'>
                <a onClick={() => setMobileLinks(!mobileLinks)}>Investors</a>
              </Link>
            </li>
            <li>
              <Link href='/careers'>
                <a onClick={() => setMobileLinks(!mobileLinks)}>Careers</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a onClick={() => setMobileLinks(!mobileLinks)}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
      <div className='desktop'>
        <div className='desktop__left'>
          <div className='desktop__logo'>
            <Link href='/'>
              <a><img alt='EQ Works company logo' src='/images/components/fallback/logo-eq.svg' /></a>
            </Link>
          </div>
          <div className='desktop__links'>
            <ul>
              <li>
                <p>Products &#9662;</p>
                <ul className='dropdown'>
                  <li>
                    <Link href='/locus'>
                      <a>Locus</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/atom'>
                      <a>Atom</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href='/marketers'>
                  <a>Marketers</a>
                </Link>
              </li>
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
            </ul>
          </div>
        </div>
        <div className='desktop__right'>
          <Link href='/covid-19'>
            <a>COVID-19</a>
          </Link>
          <Link href='/contact'>
            <a>GET IN TOUCH »</a>
          </Link>
        </div>
      </div>
    </NavStyled>
  )
}
