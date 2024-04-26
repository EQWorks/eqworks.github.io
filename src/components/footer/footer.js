import * as React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'
import { useMediaQuery } from 'react-responsive'

import Button from '../button/button'
import FooterLinkList from './footerLinkList'
import PartnersLogos from '../partnersLogos/partnersLogos'
import Logo from '../../svgs/logo.svg'
import Twitter from '../../svgs/twitter.svg'
import LinkedIn from '../../svgs/linkedin.svg'
import Github from '../../svgs/github.svg'
import Facebook from '../../svgs/facebookWhite.svg'
import GooglePartner from '../../svgs/googlepartner.svg'
import * as componentStyles from './footer.module.scss'

const Footer = ({ linkHdr, linkPath, linkText, showPartners, colorLogos }) => {
  const isScreenSm = useMediaQuery({ maxWidth: 850 })

  return (
    <>
      {showPartners && (
        <PartnersLogos dark={!colorLogos} colorLogos={colorLogos} />
      )}

      <footer className={componentStyles.footer}>
        <Container className='container'>
          <Row>
            <Col>
              {isScreenSm ? (
                <Link
                  style={{ border: `0`, display: `block`, marginTop: `3rem` }}
                  to='/'
                >
                  <Logo
                    style={{
                      width: `3rem`,
                      height: `3rem`,
                      display: `block`,
                      margin: `0 auto`
                    }}
                  />
                </Link>
              ) : (
                <div className={componentStyles.connect}>
                  <h2>{linkHdr ? linkHdr : `Let’s Grow Together`}</h2>
                  <Button
                    linkPath={linkPath ? linkPath : '/company/contact-us/'}
                    text={linkText ? linkText : 'Connect Here'}
                    variation='light outline'
                  />
                </div>
              )}
            </Col>
          </Row>
        </Container>

        {isScreenSm ? (
          <div style={{ margin: `0 auto` }}>
            <FooterLinkList
              linkArr={[
                {
                  path: '/platforms/locus/',
                  text: 'LOCUS'
                },
                {
                  path: '/platforms/atom/',
                  text: 'ATOM'
                },
                {
                  path: '/company/about-us/',
                  text: 'ABOUT US'
                },
                {
                  path: '/company/investors/',
                  text: 'INVESTORS'
                },
                {
                  path: '/company/news-and-events/',
                  text: 'NEWS & EVENTS'
                },
                {
                  path: '/company/book-a-demo/',
                  text: 'BOOK A DEMO'
                }
              ]}
            />
          </div>
        ) : (
          <Container className='container'>
            <Row>
              <Col md={2}>
                <Link style={{ border: `0` }} to='/'>
                  <Logo
                    style={{
                      width: `3rem`,
                      height: `3rem`,
                      marginBottom: `2rem`
                    }}
                  />
                </Link>
              </Col>

              <Col>
                <div className={componentStyles.linkListCont}>
                  <FooterLinkList
                    header='Solutions'
                    linkArr={[
                      {
                        path: '/solutions/customer-analytics/',
                        text: 'Customer Analytics'
                      },
                      {
                        path: '/solutions/customer-acquisition/',
                        text: 'Customer Acquisition'
                      },
                      {
                        path: '/solutions/competitive-analysis/',
                        text: 'Competitive Analysis'
                      },
                      {
                        path: '/solutions/advertising-and-marketing/',
                        text: 'Advertising & Marketing'
                      },
                      {
                        path: '/solutions/automotive/',
                        text: 'Automotive'
                      },
                      {
                        path: '/solutions/insurance/',
                        text: 'Insurance'
                      },
                      {
                        path: '/solutions/media-and-telco/',
                        text: 'Media & Teleco'
                      },
                      {
                        path: '/solutions/retail/',
                        text: 'Retail'
                      },
                      {
                        path: '/solutions/real-estate/',
                        text: 'Real Estate'
                      },
                      {
                        path: '/solutions/ooh-data-revolution/',
                        text: 'Out of Home'
                      }
                    ]}
                  />
                  <FooterLinkList
                    header='Platforms'
                    linkArr={[
                      {
                        path: '/platforms/locus/',
                        text: 'LOCUS'
                      },
                      {
                        path: '/platforms/locus/connection-hub/',
                        text: 'Connection Hub'
                      },
                      {
                        path: '/platforms/locus/dag-builder/',
                        text: 'Builder'
                      },
                      {
                        path: '/platforms/locus/dashboards/',
                        text: 'Dashboards'
                      },
                      {
                        path: '/platforms/locus/marketplace/',
                        text: 'Marketplace'
                      },
                      {
                        path: '/platforms/environments/locus-notebook/',
                        text: 'Locus Notebook'
                      },
                      {
                        path: '/platforms/environments/locus-ql/',
                        text: 'Locus QL'
                      },
                      {
                        path: '/platforms/atom/',
                        text: 'Atom'
                      },
                      {
                        path: '/platforms/atom/creative-studio/',
                        text: 'Creative Studio'
                      },
                      {
                        path: 'https://www.paymi.com/',
                        text: 'Paymi',
                        external: true
                      }
                    ]}
                  />
                  <FooterLinkList
                    header='Learn'
                    linkArr={[
                      // {
                      //     path: "/",
                      //     text: "Blog"
                      // },
                      {
                        path: '/learn/case-studies/',
                        text: 'Case Studies'
                      },
                      {
                        path: '/company/book-a-demo/',
                        text: 'Book A Demo'
                      }
                    ]}
                  />
                  <FooterLinkList
                    header='Company'
                    linkArr={[
                      {
                        path: '/company/about-us/',
                        text: 'About Us'
                      },
                      {
                        path: '/company/investors/',
                        text: 'Investors'
                      },
                      {
                        path: '/company/careers/',
                        text: 'Careers'
                      },
                      {
                        path: '/company/news-and-events/',
                        text: 'News & Events'
                      },
                      {
                        path: '/company/contact-us/',
                        text: 'Contact Us'
                      }
                    ]}
                  />
                  <div>
                    <span className={componentStyles.listHdr}>Contact Us</span>
                    <ul className={componentStyles.linkList}>
                      <li>
                        <a href='mailto:info@eqworks.com'>info@eqworks.com</a>
                      </li>
                      <li>
                        1235 Bay Street, Suite 401
                        <br />
                        Toronto, ON M5R 3K4
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        )}

        <Container className='container'>
          {isScreenSm && (
            <Row className='pageRowSm'>
              <Col>
                <div className='flexContainer justifyCenter'>
                  <Button
                    linkPath={linkPath ? linkPath : '/company/contact-us/'}
                    style={{ width: `100%` }}
                    text={linkText ? linkText : 'Connect Here'}
                    variation='light outline'
                  />
                </div>
              </Col>
            </Row>
          )}

          <Row>
            <Col>
              <div className={componentStyles.copyright}>
                <span>
                  © {new Date().getFullYear()} EQ Inc. All Rights Reserved. |{' '}
                  <Link to='/privacy-policy'>Privacy Policy</Link>
                </span>

                <div className={componentStyles.googlePartnerLogo}>
                  <a
                    aria-label='Google Partners badge'
                    href='https://www.google.com/partners/agency?id=8776625749'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <GooglePartner />
                  </a>
                </div>

                <ul className={componentStyles.logoLinks}>
                  <li>
                    <a
                      aria-label='EQ Works Twitter page'
                      href='https://twitter.com/eqworkscorp?lang=en'
                      rel='noreferrer'
                      target='_blank'
                    >
                      <Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label='EQ Works LinkedIn page'
                      href='https://www.linkedin.com/company/eq-works/mycompany/'
                      rel='noreferrer'
                      target='_blank'
                    >
                      <LinkedIn />
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label='EQ Works Github page'
                      href='https://github.com/EQWorks'
                      rel='noreferrer'
                      target='_blank'
                    >
                      <Github style={{ marginTop: `.1rem` }} />
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label='EQ Works Facebook page'
                      href='https://www.facebook.com/eqworkscorp'
                      rel='noreferrer'
                      target='_blank'
                    >
                      <Facebook />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
