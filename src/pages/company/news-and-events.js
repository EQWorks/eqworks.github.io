import * as React from 'react'

import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import SlideShow from '../../components/slideshow/slideshow'
import Button from '../../components/button/button'
import SubscriptionForm from '../../components/subscriptionForm/subscriptionForm'

const NewsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='News and Events' />

      <header className='blockheader technology'>
        <h1>News &amp; Events</h1>
        <p className='centered'>
          Ideas, Innovations and Solutions are always top of mind for us at EQ
          Works. Learn about what is happening at our company, where we are
          speaking or events we are hosting for the community, and how we are
          delivering results.
        </p>
      </header>

      <Container className='container pageRow'>
        <Row className=''>
          <Col lg={12}>
            <h2>News Releases</h2>
          </Col>

          <Col lg={12}>
            <SlideShow />
          </Col>
        </Row>
      </Container>

      <Container className='container pageRow'>
        <Row className='pageRowSm'>
          <Col>
            <h2>EQ In the News</h2>
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={12}>
            <iframe
              src='https://www.youtube.com/embed/Cp_DPsdAqmg'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </Col>
          <Col md={6} sm={12}>
            <iframe
              src='https://www.youtube.com/embed/ap1ucdHdip0'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>

      <Container className='container pageRow'>
        <Row className=''>
          <Col>
            <SubscriptionForm />
          </Col>
        </Row>
      </Container>

      <section className='sectionGreyRoundedTop'>
        <Container className='container'>
          <Row className=''>
            <Col lg={12}>
              <h2>Events</h2>
              {/* <p className="centered">
                            At EQ and in the Community
                        </p> */}
            </Col>
          </Row>

          <Row className='pageRowSm'>
            <Col>
              <h3>Upcoming Events</h3>
              <p className='centered'>
                There are currently no upcoming events.
              </p>
            </Col>
          </Row>

          <Row className='pageRowSm'>
            <Col>
              <h3>Recent Past Events</h3>

              <div className='eventRow'>
                <img src='/eventImg3.png' alt='' />

                <div>
                  <div className='dateInfo'>
                    <div className='dateIndicator false'></div>
                    <span>October 7, 2021 | 9:00am – 4:00pm EST</span>
                  </div>

                  <p className='bold'>
                    <span className='bold darkColor'>
                      Small Cap Growth Virtual Investor Conference
                    </span>
                    <br />
                    <span className='fontSm'>
                      The preeminent online investor conference series with an
                      interactive forum for CEO’s and investors. CEO Geoffrey
                      Rotstein presenting the EQ Works industry leading
                      platforms and data/AI intelligence solutions.
                    </span>
                  </p>

                  <div
                    style={{ marginTop: `1rem` }}
                    className='buttonContainer flexContainer mobileColumn'
                  >
                    <Button
                      linkPath='https://www.virtualinvestorconferences.com/?DisplayItem=E621528&utm_source=EQ&utm_medium=direct+link&utm_campaign=010721SmallCapVIC&utm_id=010721SmallCapVIC'
                      text='Learn More'
                      external
                    />
                  </div>
                </div>
              </div>

              <div className='eventRow'>
                <img src='/eventImg2.png' alt='' />

                <div>
                  <div className='dateInfo'>
                    <div className='dateIndicator false'></div>
                    <span>August 12, 2021 | 4:00pm – 8:00pm EST</span>
                  </div>

                  <p className='bold'>
                    <span className='bold darkColor'>
                      Canaccord Genuity 41st Annual Growth Conference (Virtual)
                    </span>
                    <br />
                    <span className='fontSm'>
                      An informative and engaging event, bringing together
                      leading industry thought leaders and the investment
                      community.
                    </span>
                  </p>

                  <div
                    style={{ marginTop: `1rem` }}
                    className='buttonContainer flexContainer mobileColumn'
                  >
                    <Button
                      linkPath='https://www.canaccordgenuity.com/capital-markets/about-us/events/archive/'
                      text='Learn More'
                      external
                    />
                  </div>
                </div>
              </div>

              <div className='eventRow'>
                <img src='/eventImg.png' alt='' />

                <div>
                  <div className='dateInfo'>
                    <div className='dateIndicator false'></div>
                    <span>May 11, 2021 | 11:00am – 12:00pm EST</span>
                  </div>

                  <p className='bold'>
                    <span className='bold darkColor'>
                      AtomNext Geospatial DSP Webinar
                    </span>
                    <br />
                    <span className='fontSm'>
                      Consumer privacy has constantly been at the front of
                      adtech news for the last few years, but only recently has
                      the effect of those conversations started to shift for all
                      the players inside of the ecosystem.
                    </span>
                  </p>

                  <div
                    style={{ marginTop: `1rem` }}
                    className='buttonContainer flexContainer mobileColumn'
                  >
                    <Button
                      linkPath='https://www.bigmarker.com/conferences/94dacc6e8211/'
                      text='Watch Now'
                      external
                    />

                    <Button
                      variation='outline'
                      linkPath='/EQ - GeoSpatial Webinar Takeaway - May 2021.pdf'
                      text='Download PDF'
                      external
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default NewsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
