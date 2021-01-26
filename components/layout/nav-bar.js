import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import ImgWebP from '../shared/img-webp'

const StyleNav = styled.nav`
  align-items: center;
  box-sizing: border-box;
  flex-direction: row;
  left: 0;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.navBar};
  .navbar {
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    height: ${({ theme }) => theme.height.navBar};
    justify-content: space-between;
    padding: 0 18px;
    @media ${({ theme }) => theme.breakpoint.sm} {
      display: none;
    }
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
        background-color: ${({ theme }) => theme.color.greyMedium};
        height: 2px;
        margin: 3px 0;
        width: 25px;
      }
      @media ${({ theme }) => theme.breakpoint.sm} {
        display: none;
      }
    }
  }
  .navbar--md {
    background-color: ${(props) =>
    props.isTop && !props.noHero ? 'none' : '#FFFFFF'};
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
    props.noHero || !props.isTop ? '#000000' : '#FFFFFF'};
            cursor: pointer;
            display: inline-block;
            font-family: ${({ theme }) => theme.font.name}, sans-serif;
            font-weight: ${({ theme }) => theme.font.semiBold};
            padding: 0 15px;
            text-decoration: none;
            text-transform: uppercase;
            transition: color 0.5s ease-out;
            @media ${({ theme }) => theme.breakpoint.sm} {
              font-size: 0.74em;
            }
            @media ${({ theme }) => theme.breakpoint.md} {
              font-size: 0.8em;
            }
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
      color: ${({ theme }) => theme.color.white};
      padding: 20px 0 0 0;
      position: absolute;
      width: 225px;
      ul {
        align-items: flex-start;
        background-color: ${({ theme }) => theme.color.black};
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
            color: ${({ theme }) => theme.color.white};
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
    @media ${({ theme }) => theme.breakpoint.sm} {
      display: flex;
      justify-content: space-between;
    }
  }
`

const StyleNavLinks = styled.div`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.color.white};
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
          color: ${({ theme }) => theme.color.greyMedium};
          cursor: pointer;
          display: inline-block;
          font-family: ${({ theme }) => theme.font.name}, sans-serif;
          font-weight: ${({ theme }) => theme.font.semiBold};
          font-size: 1.75em;
          padding: 20px 0;
          text-decoration: none;
          transition: color 0.2s ease-out;
          &:hover {
            color: ${({ theme }) => theme.color.navBarLinksListHover};
          }
        }
        li {
          border-bottom: 1px solid ${({ theme }) => theme.color.greyBorder};
        }
      }
      .navbar__links__inner__list--sub {
        li {
          a,
          p:not(:first-child) {
            font-family: ${({ theme }) => theme.font.name}, sans-serif;
            font-weight: ${({ theme }) => theme.font.regular};
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

export default function NavBar({ noHero }) {
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
              <ImgWebP
                alt='eq works logo'
                fallback='/images/components/fallback/logo-eq-works-square-blue.png'
                src='/images/components/logo-eq-works-square-blue.webp'
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
                <ImgWebP
                  alt='close button'
                  fallback='/images/components/fallback/icon-x-grey.png'
                  onClick={() => toggleNavBarLinks(!showNavBarLinks)}
                  src='/images/components/icon-x-grey.webp'
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
                            <ImgWebP
                              alt='close button'
                              fallback='/images/components/fallback/icon-x-grey.png'
                              onClick={() =>
                                toggleNavBarLinks(!showNavBarLinks)
                              }
                              src='/images/components/icon-x-grey.webp'
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
              <ImgWebP
                alt='eq works logo'
                fallback={
                  isTop && !noHero
                    ? '/images/components/fallback/logo-eq-works-white.png'
                    : '/images/components/fallback/logo-eq-works-blue.png'
                }
                src={
                  isTop && !noHero
                    ? '/images/components/logo-eq-works-white.webp'
                    : '/images/components/logo-eq-works-blue.webp'
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
