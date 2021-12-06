import * as React from 'react'

import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import SlideShow from '../../components/slideshow/slideshow'
import Button from '../../components/button/button'
import SubscriptionForm from '../../components/subscriptionForm/subscriptionForm'
import ExternalNewsTile from '../../components/externalNewsTile/externalNewsTile'

export const pageQuery = graphql`
  {
    siteData: site {
      siteMetadata {
        title
      }
    }

    youTubeVids: allContentfulYouTubeVideo(
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          id
          title
          url
        }
      }
    }
  }
`

const NewsPage = ({ data, location }) => {
  const siteTitle = data.siteData.siteMetadata.title || `Title`

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
        <Row>
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

        <Row justify='center' align='stretch'>
          <Col lg={5} sm={12}>
            <ExternalNewsTile
              image='/investOntarioArticleBanner.png'
              date='November 9, 2021'
              header='EQ Works is revolutionizing how companies understand their customers from its “home base” in Toronto'
              body='Knowledge is power, but many companies have historically known very little about their customers—at least until data analytics companies like EQ Works came along.'
              linkPath='https://www.investontario.ca/success-stories/eq-works-revolutionizing-how-companies-understand-their-customers-its-home-base-toronto?utm_source=linkedin&utm_medium=social&utm_campaign=weekly'
            />
          </Col>

          <Col lg={5} sm={12}>
            <ExternalNewsTile
              image='/paymiArticleBanner.png'
              date='October 28, 2021'
              header='Paymi revamps its strategy to improve its youth appeal'
              body='A new look, onboarding process and rewards messaging aim to help the cashback app simplify its relationship with users and brands.'
              linkPath='https://strategyonline.ca/2021/10/28/paymi-revamps-its-strategy-to-improve-its-youth-appeal/'
            />
          </Col>
        </Row>
      </Container>

      <Container className='container pageRow'>
        {data.youTubeVids.edges.length > 0 && (
          <Row>
            {data.youTubeVids.edges.map((video, i) => (
              <Col md={6} sm={12} key={i}>
                <iframe
                  src={video.node.url}
                  title={video.node.title}
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      <section className='sectionGreyRoundedTop'>
        <Container className='container'>
          <Row className=''>
            <Col lg={12}>
              <h2>Events</h2>
            </Col>
          </Row>

          <Row className='pageRowSm'>
            <Col>
              <h3>Upcoming Events</h3>
              {/* <p className='centered'>
                There are currently no upcoming events.
              </p> */}

              <div className='eventRow'>
                <img alt='' src='/eventImg4.png' />

                <div>
                  <div className='dateInfo'>
                    <div className='dateIndicator true'></div>
                    <span>December 7, 2021 | 9:15 am EST</span>
                  </div>

                  <p className='bold'>
                    <span className='bold darkColor'>
                      SNN Network Canada Virtual Event 2021 | Big Data &amp; Artificial Intelligence Panel
                    </span>
                    <br />
                    <span className='fontSm'>
                      SNN Network with lead sponsor, Small Cap Discoveries, are proud to present the "SNN Network Canada Virtual Event" on December 7-9, 2021. SNN Network and Small Cap Discoveries, the leading Canadian MicroCap newsletter, have teamed up to highlight our neighbors to the North: CANADA!
                    </span>
                  </p>

                  <div
                    className='buttonContainer flexContainer mobileColumn'
                    style={{ marginTop: `1rem` }}
                  >
                    <Button
                      aria-label='View Small Cap Growth Virtual Investor Conference page'
                      external
                      linkPath='https://canada.snn.network/agenda?track_id=18292'
                      text='Watch Now'
                    />
                  </div>
                </div>
              </div>


              <div className='eventRow'>
                <img alt='' src='/eventImg4.png' />

                <div>
                  <div className='dateInfo'>
                    <div className='dateIndicator true'></div>
                    <span>December 9, 2021 | 10:00 am EST</span>
                  </div>

                  <p className='bold'>
                    <span className='bold darkColor'>
                      EQ Works Corporate Presentation
                    </span>
                    <br />
                    <span className='fontSm'>
                      Hear from CEO Geoffrey Rotstein about the Company’s comprehensive data platforms, which utilize proprietary mapping applications, predictive algorithms, and data partnerships to build targeted and strategic marketing acquisition campaigns for its clients
                    </span>
                  </p>

                  <div
                    className='buttonContainer flexContainer mobileColumn'
                    style={{ marginTop: `1rem` }}
                  >
                    <Button
                      aria-label='Sign up for EQ Works Corporate Presentation'
                      external
                      linkPath='https://www.webcaster4.com/Webcast/Page/2813/43864'
                      text='Watch Now'
                    />
                  </div>
                </div>
              </div>

            </Col>
          </Row>

          <Row className='pageRowSm'>
            <Col>
              <h3>Recent Past Events</h3>

              <div className='eventRow'>
                <img alt='' src='/eventImg3.png' />

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
                    className='buttonContainer flexContainer mobileColumn'
                    style={{ marginTop: `1rem` }}
                  >
                    <Button
                      aria-label='View Small Cap Growth Virtual Investor Conference page'
                      external
                      linkPath='/SC_621528_4_12_1_0.mp4'
                      text='Learn More'
                    />
                  </div>
                </div>
              </div>

              <div className='eventRow'>
                <img alt='' src='/eventImg2.png' />

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
                    className='buttonContainer flexContainer mobileColumn'
                    style={{ marginTop: `1rem` }}
                  >
                    <Button
                      aria-label='View Canaccord Genuity 41st Annual Growth Conference (Virtual) page'
                      external
                      linkPath='https://www.canaccordgenuity.com/capital-markets/about-us/events/archive/'
                      text='Learn More'
                    />
                  </div>
                </div>
              </div>

              <div className='eventRow'>
                <img alt='' src='/eventImg.png' />

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
                    className='buttonContainer flexContainer mobileColumn'
                    style={{ marginTop: `1rem` }}
                  >
                    <Button
                      aria-label='View AtomNext Geospatial DSP Webinar page'
                      external
                      linkPath='https://www.bigmarker.com/conferences/94dacc6e8211/'
                      text='Watch Now'
                    />

                    <Button
                      aria-label='Download AtomNext Geospatial DSP Webinar PDF'
                      external
                      linkPath='/EQ - GeoSpatial Webinar Takeaway - May 2021.pdf'
                      text='Download PDF'
                      variation='outline'
                    />
                  </div>
                </div>
              </div>
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
      </section>
    </Layout>
  )
}

export default NewsPage
