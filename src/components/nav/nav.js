import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'gatsby'
import ClassNames from 'classnames'
import { Container, Row, Col } from 'react-grid-system'
import Button from '../button/button'

import Logo from '../../svgs/logo.svg'
import * as componentStyles from './nav.module.scss'
import classNames from 'classnames'

const isBrowser = typeof window !== 'undefined'

const Nav = () => {
  const [dropdownActive, setDropDown] = useState(null)
  const [y, setY] = useState(isBrowser ? window.scrollY : 0)
  const [navVisible, setNavVisible] = useState(true)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const clickHandler = (dropDown) => {
    if (dropDown === dropdownActive) setDropDown(null)
    else setDropDown(dropDown)
  }

  const handleNavigation = useCallback(
    (e) => {
      if (!isBrowser) {
        setNavVisible(true)
        document.body.style.overflow = 'unset'
      } else {
        const window = e.currentTarget
        if (y > window.scrollY || window.scrollY <= 100) {
          setNavVisible(true)
        } else if (y < window.scrollY) {
          setNavVisible(false)
          setDropDown(null)
        }
        setY(window.scrollY)
      }
    },
    [y]
  )

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation, navVisible])

  return (
    <nav
      className={
        navVisible
          ? componentStyles.navbar
          : ClassNames(componentStyles.navbar, componentStyles.hidden)
      }
    >
      <Container className='container'>
        <Row align='center'>
          <Col>
            <div className={componentStyles.navContainer}>
              <Link className={componentStyles.logoLink} to='/'>
                <Logo />
              </Link>

              <button
                aria-expanded={drawerOpen}
                aria-haspopup='true'
                aria-label='Open the menu'
                aria-roledescription='Open the menu'
                className={componentStyles.hamburger}
                id='topnav-menuBtn'
                onClick={() => handleDrawerToggle()}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>

              <ul
                className={
                  drawerOpen
                    ? classNames(
                        componentStyles.navList,
                        componentStyles.active
                      )
                    : componentStyles.navList
                }
              >
                <li role='none' className={componentStyles.dropdown}>
                  <button
                    aria-haspopup='true'
                    aria-expanded={dropdownActive === 'solutions'}
                    onClick={() => clickHandler('solutions')}
                  >
                    <span>Solutions</span>
                  </button>

                  <div
                    className={
                      dropdownActive === 'solutions'
                        ? `${componentStyles.dropdownMenu} ${componentStyles.active}`
                        : componentStyles.dropdownMenu
                    }
                  >
                    <div>
                      <strong>By Use Case</strong>
                      <ul>
                        <li>
                          <Link to='/solutions/customer-analytics/'>
                            Customer Analytics
                          </Link>
                        </li>
                        <li>
                          <Link to='/solutions/customer-acquisition/'>
                            Customer Acquisition
                          </Link>
                        </li>
                        <li>
                          <Link to='/solutions/competitive-analysis/'>
                            Competitive Analysis
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <strong>By Industry</strong>
                      <ul>
                        <li>
                          <Link to='/solutions/advertising-and-marketing/'>
                            Advertising &amp; Marketing
                          </Link>
                        </li>
                        <li>
                          <Link to='/solutions/automotive/'>Automotive</Link>
                        </li>
                        <li>
                          <Link to='/solutions/insurance/'>Insurance</Link>
                        </li>
                        <li>
                          <Link to='/solutions/media-and-telco/'>
                            Media &amp; Telco
                          </Link>
                        </li>
                        <li>
                          <Link to='/solutions/retail/'>Retail</Link>
                        </li>
                        <li>
                          <Link to='/solutions/real-estate/'>Real Estate</Link>
                        </li>
                        <li>
                          <Link to='/solutions/ooh-data-revolution/'>
                            Out of Home
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li role='none' className={componentStyles.dropdown}>
                  <button
                    aria-expanded={dropdownActive === 'platforms'}
                    aria-haspopup='true'
                    href='#'
                    onClick={() => clickHandler('platforms')}
                  >
                    <span>Platforms</span>
                  </button>

                  <div
                    className={
                      dropdownActive === 'platforms'
                        ? `${componentStyles.dropdownMenu} ${componentStyles.active}`
                        : componentStyles.dropdownMenu
                    }
                  >
                    <div>
                      <ul>
                        <li>
                          <Link to='/platforms/locus/'>
                            <strong>LOCUS</strong>
                          </Link>
                        </li>
                        <li>
                          <Link to='/platforms/locus/connection-hub/'>
                            Connection Hub
                          </Link>
                        </li>
                        <li>
                          <Link to='/platforms/locus/dag-builder/'>
                            Builder
                          </Link>
                        </li>
                        <li>
                          <Link to='/platforms/locus/dashboards/'>
                            Dashboards
                          </Link>
                        </li>
                        <li>
                          <Link to='/platforms/locus/marketplace/'>
                            Marketplace
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <strong>Environments</strong>
                      <ul>
                        <li>
                          <Link to='/platforms/environments/locus-notebook/'>
                            LOCUS Notebook
                          </Link>
                        </li>
                        <li>
                          <Link to='/platforms/environments/locus-ql/'>
                            LOCUS QL
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul>
                        <li>
                          <Link to='/platforms/atom/'>
                            <strong>Atom</strong>
                          </Link>
                        </li>
                        <li>
                          <Link to='/platforms/atom/'>Geocohorts</Link>
                        </li>
                        <li>
                          <Link to='/platforms/atom/creative-studio/'>
                            Creative Studio
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul>
                        <li>
                          <a
                            href='https://www.paymi.com/'
                            rel='noreferrer'
                            target='_blank'
                          >
                            <strong>Paymi</strong>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li role='none' className={componentStyles.dropdown}>
                  <button
                    aria-expanded={dropdownActive === 'learn'}
                    aria-haspopup='true'
                    onClick={() => clickHandler('learn')}
                  >
                    <span>Learn</span>
                  </button>

                  <div
                    className={
                      dropdownActive === 'learn'
                        ? `${componentStyles.dropdownMenu} ${componentStyles.active}`
                        : componentStyles.dropdownMenu
                    }
                  >
                    <div>
                      <ul>
                        <li>
                          <Link to='/learn/case-studies/'>Case Studies</Link>
                        </li>
                        <li>
                          <Link to='/company/book-a-demo/'>Book A Demo</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li role='none' className={componentStyles.dropdown}>
                  <button
                    aria-expanded={dropdownActive === 'company'}
                    aria-haspopup='true'
                    onClick={() => clickHandler('company')}
                  >
                    <span>Company</span>
                  </button>

                  <div
                    className={
                      dropdownActive === 'company'
                        ? `${componentStyles.dropdownMenu} ${componentStyles.active}`
                        : componentStyles.dropdownMenu
                    }
                  >
                    <div>
                      <ul>
                        <li>
                          <Link to='/company/about-us/'>About Us</Link>
                        </li>
                        <li>
                          <Link to='/company/investors/'>Investors</Link>
                        </li>
                        <li>
                          <Link to='/company/careers/'>Careers</Link>
                        </li>
                        <li>
                          <Link to='/company/news-and-events/'>
                            News &amp; Events
                          </Link>
                        </li>
                        <li>
                          <Link to='/company/contact-us/'>Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>

          <Col md={3} className={componentStyles.contactBtn}>
            <Button
              linkPath='/company/contact-us/'
              role='presentation'
              small
              text='Get In Touch'
              variation='light outline'
            />
          </Col>
        </Row>
      </Container>
    </nav>
  )
}

export default Nav
