import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import LocusLogoWhite from '../../svgs/locusLogoWhite.svg'
import LocusLogo from '../../svgs/locusLogo.svg'
import DashboardSlideshow from '../../components/dashboardSlideshow/dashboardSlideshow'

const PLocusPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle} footerLogos>
      <Seo title='Platforms | Locus' />

      <header className='blockheader data'>
        <Container className='container'>
          <Row>
            <Col>
              <span className='hdrIntroWhite'>EQ Works Proprietary DMP</span>
              <div>
                <LocusLogoWhite className='headerLogo' />
                <h1 className='left noMargin' style={{ display: `inline` }}>
                  EQ’s Geospatial Analytics Platform
                </h1>
              </div>
              <p>
                Locus is the next generation, geospatial insights and analytics
                platform for location data enrichment, foot traffic analysis,
                customer analysis, competitor analysis, audience profiling,
                segment creation and location planning.
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
                With multiple environments to work in, Locus provides a
                streamlined method of deep analysis of geospatial data for
                everyone from tech challenged marketers, to deep query analysis
                for data scientists and analysts, to top level metrics for data
                driven execs hungry to find their next success.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pageRow'>
        <Container className='container'>
          <Row>
            <Col>
              <DashboardSlideshow>
                <div className='locusSlide'>
                  <div>
                    <LocusLogo style={{ maxWidth: `100%` }} />
                    <h2
                      className='left'
                      style={{ color: `#747474`, margin: `.5rem 0` }}
                    >
                      Query Lab
                    </h2>
                  </div>

                  <div>
                    <p>
                      LOCUS Query Lab (QL) is a no-code SQL-driven data engine
                      that enables people of all skill levels to explore,
                      analyze and visualize customer first-party data alongside
                      EQ’s own proprietary human movement datasets and the
                      extended EQ data marketplace.
                    </p>
                    <Link
                      aria-label='Learn more about LOCUS QL'
                      to='/platforms/environments/locus-ql/'
                    >
                      <strong className='uppercase primaryColor'>
                        Learn More &#187;
                      </strong>
                    </Link>
                  </div>
                </div>

                <div className='locusSlide'>
                  <div>
                    <LocusLogo style={{ maxWidth: `100%` }} />
                    <h2
                      className='left'
                      style={{ color: `#747474`, margin: `.5rem 0` }}
                    >
                      Notebook
                    </h2>
                  </div>

                  <div>
                    <p>
                      EQ Works has launched a Notebook product that enables Data
                      Scientists and Analysts to explore, analyze and visualize
                      customer first-party data alongside EQ’s own proprietary
                      human movement datasets and the extended EQ data
                      marketplace.
                    </p>
                    <Link
                      aria-label='Learn more about LOCUS Notebook'
                      to='/platforms/environments/locus-notebook/'
                    >
                      <strong className='uppercase primaryColor'>
                        Learn More &#187;
                      </strong>
                    </Link>
                  </div>
                </div>
              </DashboardSlideshow>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='linkBanner pageRow' style={{ marginTop: `0` }}>
        <Link to='/company/book-a-demo/'>
          Book a demo to discover locus &#187;
        </Link>
      </section>

      <Container className='container'>
        <Row align='center' className='pageRow lined' justify='between'>
          <Col md={6} sm={12}>
            <div style={{ maxWidth: `28rem` }}>
              <h2 className='left'>
                <span className='hdrIntro'>Locus Capability 01 </span>
                Connection Hub
              </h2>
              <p>
                This provides for the most secure, efficient and seamless way to
                connect other data sources or your data lake to LOCUS.
                Connection Hub has integrated data lineage governance and
                transformation capabilities built-in to allow for further
                integration with tools such as LOCUS Notebook and LOCUS QL.
              </p>
              <Link
                aria-label='Learn more about connection hub'
                to='/platforms/locus/connection-hub/'
              >
                <strong className='uppercase primaryColor'>
                  Learn More &#187;
                </strong>
              </Link>
            </div>
          </Col>

          <Col className='imageCol'>
            <StaticImage
              alt=''
              layout='fullWidth'
              src='../../images/mockups/ConectionHubMockup.png'
            />
          </Col>
        </Row>

        <Row
          align='center'
          className='pageRow mobileFlexReverse lined'
          justify='between'
        >
          <Col md={6} className='imageCol'>
            <StaticImage
              alt=''
              layout='fullWidth'
              src='../../images/mockups/DAGBuilderMockup.png'
            />
          </Col>

          <Col md={6}>
            <div className='flexContainer justifyEnd'>
              <div style={{ maxWidth: `28rem` }}>
                <h2 className='left'>
                  <span className='hdrIntro'>Locus Capability 02 </span>
                  DAG Builder
                </h2>
                <p>
                  EQ builds its own directed acyclical graph processor on top of
                  the popular Apache Airflow framework. The DAG Builder has been
                  engineered to crunch (and munch) your geospatial workflows
                  with over twenty (20) built-in helper stages.
                </p>
                <Link
                  aria-label='Learn more about DAG Builder'
                  to='/platforms/locus/dag-builder/'
                >
                  <strong className='uppercase primaryColor'>
                    Learn More &#187;
                  </strong>
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <Row align='center' className='pageRow lined' justify='between'>
          <Col md={6}>
            <div style={{ maxWidth: `28rem` }}>
              <h2 className='left'>
                <span className='hdrIntro'>Locus Capability 03 </span>
                Marketplace
              </h2>
              <p>
                When you’re deep in analysis, having access to every
                geospatially-aligned dataset at your fingertips is a
                game-changer. That’s why we’ve done the heavy lifting to work
                with and integrate the most valuable data vendors, to avoid
                painful procurement processes, validation and clean up. We’ve
                got thousands of datasets ready to go within the LOCUS
                Marketplace.
              </p>
              <Link
                aria-label='Learn more about marketplace'
                to='/platforms/locus/marketplace/'
              >
                <strong className='uppercase primaryColor'>
                  Learn More &#187;
                </strong>
              </Link>
            </div>
          </Col>

          <Col className='imageCol' md={6}>
            <StaticImage
              alt=''
              layout='fullWidth'
              src='../../images/mockups/MarketplaceMockup.png'
            />
          </Col>
        </Row>

        <Row
          align='center'
          className='pageRow mobileFlexReverse lined'
          justify='between'
        >
          <Col md={6} className='imageCol'>
            <StaticImage
              alt=''
              layout='fullWidth'
              src='../../images/mockups/Locus Dashboards Mockup.png'
            />
          </Col>

          <Col md={6}>
            <div className='flexContainer justifyEnd'>
              <div style={{ maxWidth: `28rem` }}>
                <h2 className='left'>
                  <span className='hdrIntro'>Locus Capability 04 </span>
                  Dashboards
                </h2>
                <p>
                  LOCUS dashboards and maps enable you to visualize the insights
                  in an easy to use and powerful way. Combine data sets, create
                  custom views and drill down to individual location-level
                  insights, all in one place. LOCUS dashboards allow you to pull
                  the insights, the way you need it, allowing for custom colour
                  schemes, templates and reports on-demand - all without
                  requiring deep technical expertise. Book your demo today.
                </p>
                <Link
                  aria-label='Learn more about dashboards'
                  to='/platforms/locus/dashboards/'
                >
                  <strong className='uppercase primaryColor'>
                    Learn More &#187;
                  </strong>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default PLocusPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
