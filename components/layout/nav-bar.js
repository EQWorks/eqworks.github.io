import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import * as StyleConstant from '../../utils/style-constants'
import { breakpoint } from '../../utils/style-breakpoints'

const StyleNav = styled.nav`
  align-items: center;
  box-sizing: border-box;
  flex-direction: row;
  left: 0;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: ${StyleConstant.zIndex.navBar};
  .navbar {
    background-color: ${StyleConstant.color.white};
    display: flex;
    height: ${StyleConstant.height.navBar};
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
        background-color: ${StyleConstant.color.greyLight};
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
    background-color: ${(props) =>
      props.isTop && !props.noHero ? 'none' : `${StyleConstant.color.white}`};
    box-sizing: border-box;
    display: none;
    padding: ${(props) => (props.isTop ? '18px' : '0px 18px')};
    position: absolute;
    transition: background-color 0.5s ease-out;
    width: 100%;
    .navbar--md__left {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      width: 15%;
      a {
        align-items: center;
        display: flex;
        justify-content: center;
        img {
          height: ${(props) => (props.isTop ? '50px' : '35px')};
          width: auto;
        }
      }
    }
    .navbar--md__right {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      width: 85%;
      ul {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        list-style-type: none;
        padding: 0;
        li {
          a,
          p {
            color: ${(props) =>
              props.noHero || !props.isTop
                ? `${StyleConstant.color.black}`
                : `${StyleConstant.color.white}`};
            cursor: pointer;
            display: inline-block;
            font-family: titleMedium, sans-serif;
            padding: 0 15px;
            text-decoration: none;
            text-transform: uppercase;
            transition: color 0.5s ease-out;
            ${breakpoint.sm`
              font-size: 0.74em;
            `}
            ${breakpoint.md`
              font-size: 0.8em;
            `}
          }
          &:last-child {
            a {
              padding: 0 0 0 15px;
            }
          }
        }
      }
    }
    .navbar--md__right__sub-links {
      color: ${StyleConstant.color.white};
      padding: 20px 0 0 0;
      position: absolute;
      width: 225px;
      ul {
        align-items: flex-start;
        background-color: ${StyleConstant.color.black};
        display: flex;
        flex-direction: column;
        justify-content: center;
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 100%;
        li {
          margin: 0;
          padding: 0;
          width: 100%;
          a {
            box-sizing: border-box;
            color: ${StyleConstant.color.white};
            display: inline-block;
            padding: 20px;
            width: 100%;
          }
          &:last-child {
            a {
              padding: 20px;
            }
          }
        }
      }
    }
    ${breakpoint.sm`
      display: flex;
      justify-content: space-between;
    `}
  }
`

const StyleNavLinks = styled.div`
  align-items: flex-start;
  background-color: ${StyleConstant.color.white};
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  min-height: 1000px;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100vw;
  .navbar__links__inner {
    width: 66%;
    .navbar__links__inner__list {
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        a,
        p {
          color: ${StyleConstant.color.greyMedium};
          cursor: pointer;
          display: inline-block;
          font-family: titleMedium, sans-serif;
          font-size: 1.75em;
          padding: 20px 0;
          text-decoration: none;
          transition: color 0.2s ease-out;
          &:hover {
            color: ${StyleConstant.color.NavBarLinksListHover};
          }
        }
        li {
          border-bottom: 1px solid ${StyleConstant.color.greyBorder};
        }
      }
      .navbar__links__inner__list--sub {
        li {
          a,
          p:not(:first-child) {
            font-family: titleRegular, sans-serif;
            font-size: 1.5em;
          }
        }
      }
    }
    .navbar__links__inner__close {
      img {
        cursor: pointer;
        height: 18px;
        margin: 50px 0;
        width: auto;
      }
    }
  }
`

const NavBar = ({ noHero }) => {
  const [isTop, setIsTop] = useState(true)
  const [showNavBarLinks, toggleNavBarLinks] = useState(false)
  const [showNavBarProductsSubLinks, toggleNavBarProductsSubLinks] = useState(
    false
  )
  const [
    showNavBarMdProductsSubLinks,
    toggleNavBarMdProductsSubLinks
  ] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsTop(false)
      } else {
        setIsTop(true)
      }
    })
  })

  const handleSubLinkClick = () => {
    toggleNavBarLinks(!showNavBarLinks)
    toggleNavBarProductsSubLinks(!showNavBarProductsSubLinks)
  }

  return (
    <StyleNav noHero={noHero} isTop={isTop}>
      <div className='navbar'>
        <div className='navbar__left'>
          <Link href='/'>
            <a>
              <img
                alt='eq works logo'
                src='/images/components/logo-eq-works-square-blue.png'
              />
            </a>
          </Link>
        </div>
        <div
          className='navbar__right'
          onClick={() => toggleNavBarLinks(!showNavBarLinks)}
        >
          <div />
          <div />
          <div />
        </div>
        {showNavBarLinks && (
          <StyleNavLinks>
            <div className='navbar__links__inner'>
              <div className='navbar__links__inner__close'>
                <img
                  alt='close button'
                  onClick={() => toggleNavBarLinks(!showNavBarLinks)}
                  src='/images/components/icon-x-grey.png'
                />
              </div>
              <div className='navbar__links__inner__list'>
                <ul>
                  <li>
                    <Link href='/'>
                      <a onClick={() => toggleNavBarLinks(!showNavBarLinks)}>
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        toggleNavBarProductsSubLinks(
                          !showNavBarProductsSubLinks
                        )
                      }
                    >
                      Products →
                    </p>
                    {showNavBarProductsSubLinks && (
                      <StyleNavLinks>
                        <div className='navbar__links__inner'>
                          <div className='navbar__links__inner__close'>
                            <img
                              alt='close button'
                              onClick={() =>
                                toggleNavBarLinks(!showNavBarLinks)
                              }
                              src='/images/components/icon-x-grey.png'
                            />
                          </div>
                          <div className='navbar__links__inner__list'>
                            <ul className='navbar__links__inner__list--sub'>
                              <li>
                                <p
                                  onClick={() =>
                                    toggleNavBarProductsSubLinks(
                                      !showNavBarProductsSubLinks
                                    )
                                  }
                                >
                                  ← Products
                                </p>
                              </li>
                              <li>
                                <Link href='/atom'>
                                  <a onClick={handleSubLinkClick}>Atom</a>
                                </Link>
                              </li>
                              <li>
                                <Link href='/locus'>
                                  <a onClick={handleSubLinkClick}>Locus</a>
                                </Link>
                              </li>
                              <li>
                                <Link href='/visilink'>
                                  <a onClick={handleSubLinkClick}>Visilink</a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </StyleNavLinks>
                    )}
                  </li>
                  <li>
                    <Link href='/marketers'>
                      <a onClick={() => toggleNavBarLinks(!showNavBarLinks)}>
                        Marketers
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/investors'>
                      <a onClick={() => toggleNavBarLinks(!showNavBarLinks)}>
                        Investors
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/careers'>
                      <a onClick={() => toggleNavBarLinks(!showNavBarLinks)}>
                        Careers
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact'>
                      <a onClick={() => toggleNavBarLinks(!showNavBarLinks)}>
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </StyleNavLinks>
        )}
      </div>
      <div className='navbar--md'>
        <div className='navbar--md__left'>
          <Link href='/'>
            <a>
              <img
                alt='eq works logo'
                src={
                  isTop && !noHero
                    ? '/images/components/logo-eq-works-white.png'
                    : '/images/components/logo-eq-works-blue.png'
                }
              />
            </a>
          </Link>
        </div>
        <div className='navbar--md__right'>
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
            <li
              onMouseEnter={() =>
                toggleNavBarMdProductsSubLinks(!showNavBarMdProductsSubLinks)
              }
              onMouseLeave={() =>
                toggleNavBarMdProductsSubLinks(!showNavBarMdProductsSubLinks)
              }
              tabIndex='0'
            >
              <p>Products</p>
              {showNavBarMdProductsSubLinks && (
                <div className='navbar--md__right__sub-links'>
                  <ul>
                    <li>
                      <Link href='/atom'>
                        <a>Atom</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/locus'>
                        <a>Locus</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/visilink'>
                        <a>Visilink</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
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
            <li>
              <Link href='/contact'>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </StyleNav>
  )
}

export default NavBar
