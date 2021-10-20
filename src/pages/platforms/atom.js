import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import VerticalBoxList from '../../components/verticalBoxList/verticalBoxList'
import AtomLogoWhite from '../../svgs/atomLogoWhite.svg'
import LocationIcon from '../../svgs/noun_Location_532307.svg'
import MapIcon from '../../svgs/noun_Maps_4137468.svg'
import HomeIcon from '../../svgs/noun_House_4145489.svg'

const PAtomPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle} footerLogos>
      <Seo title='Platforms | Atom' />

      <header className='blockheader data'>
        <Container className='container'>
          <Row>
            <Col>
              <span className='hdrIntroWhite'>EQ Works Proprietary DSP </span>
              <div style={{ marginTop: `2rem` }}>
                <AtomLogoWhite className='headerLogo atomLogo' />{' '}
                <h1 className='left noMargin'>
                  {' '}
                  The Leading Geospatial Marketing Platform{' '}
                </h1>
              </div>
              <p>
                Atom is the next generation geospatial DSP built for a
                privacy-forward, identity-free future. No longer requiring all
                of the <a href='#geospatial'>unique identifiers</a> like
                deviceIDs and cookies that are currently being phased out, EQ’s
                geospatial DSP utilizes a users current location and the
                insights, propensities, and behaviour implied by that location.
              </p>
            </Col>
          </Row>
        </Container>
      </header>

      <section className='sectionBlueAngleDown'>
        <Container className='container'>
          <Row>
            <Col>
              <p className='centered'>
                Leveraging our highly sophisticated POI management protocols and
                hyperlocal toolset for real time targeting, EQ is proud to
                release GeoCohorts - the next generation privacy-forward
                methodology for aggregating and targeting users at scale.
                <br />
                Whatever your target market is, Atom is here to satisfy all of
                your programmatic media buying needs.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pageRow'>
        <VerticalBoxList>
          <div>
            <h3>Consumers on the Go</h3>
            <p className='centered fontSm'>
              While hyperlocal targeting may not be a new concept, doing it
              accurately, at scale and deriving valuable insights for campaigns
              has often fallen by the wayside in favour of broad categories with
              uniform radii. Atom comes with a categorized, global POI list that
              enables users to target the exact locations they want. Whether it
              is a global chain or all “mom&amp;pop” coffee shops, combining
              custom polygon mapping and location by location reporting, Atom
              enables hyperlocal marketers to reach who they want, when they
              want, and derive the insights they need for campaign optimization
              or general business learnings.
            </p>
          </div>

          <div>
            <h3>Geocohorts</h3>
            <p className='centered fontSm'>
              Building, activating and reporting on profiles based on where
              people work, live and play enables marketers to reach consumers
              that match their target, in a scalable and effective manner. But
              doing this in a privacy-first and data driven manner has been hard
              to do - until now. This is why we are proud to introduce
              GeoCohorts. Utilizing our Atom DSP, GeoCohorts combine millions of
              different data points to aggregate profiles and propensities up to
              the postal code level, and then allows for media activation on
              those findings through those postal codes. With 100’s of pre-built
              GeoCohorts immediately available, customizing, activating and
              reporting on a cohort of users has never been easier, more
              privacy-centric or future-proofed for the changes happening in the
              ecosystem.
            </p>
          </div>

          <div>
            <h3>Audience Creation &amp; Activation</h3>
            <p className='centered fontSm'>
              Every Atom account comes with 100’s of pre-built audiences that
              can be activated immediately. Our Locus builder tool allows for
              customization of new GeoCohorts from EQ’s data and its numerous
              partnerships, as well as onboarding and joining of brand or agency
              1st party data. Atom uses machine learning optimization designed
              with geography at its core, enabling the bidding to surface and
              focus on the audience subsets to reach your KPI.
            </p>
          </div>

          <div>
            <h3>Insights</h3>
            <p className='centered fontSm'>
              With powerful insights and geospatial visualizations, GeoCohorts
              are designed to not only drive digital media effectiveness, but
              business insights as a whole, outside of programmatic media.
              Understanding not just who your message is resonating with, but
              also where, gives a comprehensive profile that enables marketers
              to plan and execute in a privacy-first, cookie-free manner.
            </p>
          </div>
        </VerticalBoxList>
      </section>

      <section className='sectionGreyRoundedTop pageRow' id='geospatial'>
        <Container className='container'>
          <Row className='pageRow lined' style={{ paddingTop: `0` }}>
            <Col>
              <h2>Why Geospatial?</h2>
              <p className='centered'>
                Consumer privacy has constantly been at the front of adtech news
                for the last few years, but only recently has the effect of
                those
                <br />
                conversations started to shift for all the players inside of the
                ecosystem.
              </p>
              <p className='centered'>
                Legislative shifts, such as the European GDPR rules and CCPA in
                California, have changed how consumer data collection, consent
                and usage should be handled, but only at the regional level and
                the general effect wasn’t felt by the average media buyer.
                However, starting with the Safari and Firefox 3rd party cookies
                changes in 2019, Apple’s ATT enforcement that was released in
                May 2021 and Google’s announcement that they are phasing out 3rd
                party cookies in early 2022, this all changes. The tool sets
                used by media buyers to create audiences, activate upon them,
                and measure campaign effectiveness all rely on identifiers that
                won’t be available anymore.
              </p>
            </Col>
          </Row>

          <Row className='pageRow' justify='center'>
            <Col lg={12}>
              <h2>Future State &amp; Demystifying Geospatial</h2>
              <p className='centered'>
                In the current landscape, an impressions full user profile,
                contextual environment and location are all known to the DSP,
                making a single path to purchase a viable solution. This is
                better for media buyers, but not for consumer privacy. In the
                new ecosystem, the trade off will form 4 new paths to purchase
                that use bits of information but can’t be correlated to the
                others, these are:
              </p>

              <div
                className='flexContainer justifyCenter alignCenter wordCluster'
                style={{ margin: `2rem 0` }}
              >
                <span className='darkColor'>
                  <strong>Contextual</strong>
                </span>
                <span className='darkColor'>
                  <strong>Interest Groups or FLoCs</strong>
                </span>
                <span className='darkColor'>
                  <strong>GeoSpatial</strong>
                </span>
                <span className='darkColor'>
                  <strong>Hashed Email IDs</strong>
                </span>
              </div>

              <p className='centered'>
                All of these new paths to purchase have different pros and cons,
                and use different methodologies to infer attributes of the user.
                One thing is certain, and that is the large majority of media
                buying next year will move from 1:1 targeting to an aggregate
                methodology of forming groups, or cohorts, or users that have
                similar attributes instead of an identifier of an exact
                attribute on a user. GeoSpatial itself requires a bit of
                demystifying. It is not solely targeting where someone is now,
                but using where someone lives, works and plays to build a
                profile to predict and influence future actions.
              </p>
            </Col>
          </Row>

          <Row className='pageRow' justify='center'>
            <Col className='imageCol' md={3}>
              <div className='flexContainer column justifyCenter'>
                <div>
                  <div className='blueIcon' style={{ margin: `0 auto` }}>
                    <LocationIcon />
                  </div>
                </div>
                <h3 className='noMargin' style={{ marginBottom: `.5rem` }}>
                  Where You Are
                </h3>
                <p className='centered' style={{ marginTop: `0` }}>
                  Proximity Location Targeting
                </p>
              </div>
            </Col>

            <Col className='imageCol' md={3}>
              <div className='flexContainer column justifyCenter'>
                <div>
                  <div className='blueIcon' style={{ margin: `0 auto` }}>
                    <MapIcon />
                  </div>
                </div>
                <h3 className='noMargin' style={{ marginBottom: `.5rem` }}>
                  Where You’ve Been
                </h3>
                <p className='centered' style={{ marginTop: `0` }}>
                  Past Visitation
                </p>
              </div>
            </Col>

            <Col className='imageCol' md={3}>
              <div className='flexContainer column justifyCenter'>
                <div>
                  <div className='blueIcon' style={{ margin: `0 auto` }}>
                    <HomeIcon />
                  </div>
                </div>
                <h3 className='noMargin' style={{ marginBottom: `.5rem` }}>
                  Where You Live
                </h3>
                <p className='centered' style={{ marginTop: `0` }}>
                  Postal Segmentation
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className='container'>
        <Row className='pageRow'>
          <Col className='imageCol'>
            <StaticImage
              alt=''
              src='../../images/mockups/DashboardsMockup.png'
              layout='fullWidth'
            />
          </Col>
        </Row>
      </Container>

      <section className='linkBanner pageRow' style={{ marginTop: `0` }}>
        <Link to='/company/book-a-demo/'>
          Book a demo to discover atom &#187;
        </Link>
      </section>

      <Container className='container'>
        <Row className='pageRow'>
          <Col lg={12} xl={12}>
            <h2>A Bright Future for Media &amp; Privacy</h2>

            <p className='centered'>
              The unique structural properties of geospatial allows data to be
              assigned highly accurately to an atomic geo level, say a
              household, while elegantly zooming out to higher aggregations
              during activation such as postal codes or custom geo grids for
              unique campaign needs. All this can be achieved while retaining
              properties of people that live, work or are observed there. The
              true power of geo cohorts get unlocked in their ability to
              intelligently zoom out and aggregate geographically until you’re
              not exposing or targeting any one user, or deanonymizing them.
            </p>

            <p className='centered'>
              Consumers awareness of privacy is changing, and with that so is
              the entire programmatic ecosystem. If not properly prepared, this
              will be an extremely hard time for marketers and agencies.
              However, with the proper innovation, toolsets, and media planning
              philosophy we can harness the power of programmatic media while
              putting consumer privacy at the center and building back trust in
              the industry.
            </p>
          </Col>
          <Col className='imageCol'>
            <div style={{ maxWidth: `800px`, margin: `0 auto` }}>
              <StaticImage
                alt=''
                src='../../images/mockups/Atom Diagram-01.png'
                layout='fullWidth'
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default PAtomPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
