import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import SolutionHdr from '../../components/headers/solutionsHeader01'
import CaseStudyGrid from '../../components/caseStudyGrid/caseStudyGrid'
import LogoLoop from '../../components/logoLoop/logoLoop'

const SCompetitiveAnalysisPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Solutions | Customer Acquisition' />

      <SolutionHdr header='Know The Unknown'>
        <p className='centered'>
          Use movement data to understand more about your customers and compete
          better against your competition.
        </p>
      </SolutionHdr>

      <Container className='container'>
        <Row className='pageRow'>
          <Col>
            <p className='centered'>
              You have great data on what’s happening inside your 4 walls
              (Digital and Physical) but you know nothing about what your
              customers do once they leave. With limited knowledge on your
              competitor’s customers, it makes it difficult to compete. Using
              LOCUS to query any location and layering on additional data, gives
              you deep competitive insights that almost make it feel wrong. Run
              reports to discover which locations are losing market share. Learn
              where your competitor’s customers live and layer on thousands of
              data points to help make better decision making for sales,
              marketing and store planning. Use LOCUS’ massive data pool of over
              18M users or bring your own data to empower LOCUS and provide
              powerful geospatial analytics to grow and increase your market
              share.
            </p>
          </Col>
        </Row>

        <Row align='stretch' className='pageRow'>
          <Col className='paddedCol' md={4} sm={12}>
            <div
              className='flexContainer column justifyBetween alignCenter'
              style={{ minHeight: `100%` }}
            >
              <StaticImage
                alt=''
                layout='fullWidth'
                src='../../images/mockups/VisitationReportMockup.png'
              />
              <p className='centered' style={{ flexGrow: `1` }}>
                <strong
                  className='darkColor'
                  style={{ display: `block`, marginBottom: `.5rem` }}
                >
                  Visitation Report
                </strong>
                <span className='fontSm'>
                  Analyze foot traffic trends across different time periods,
                  geographic areas or individual locations to analyze
                  performance and uncover trends.
                </span>
              </p>
              <Link
                aria-label="Learn more about dashbaords - visitation reports"
                className='uppercase primaryColor bold'
                to='/platforms/locus/dashboards/'
              >
                Learn More &#187;
              </Link>
            </div>
          </Col>

          <Col className='paddedCol' md={4} sm={12}>
            <div
              className='flexContainer column justifyBetween alignCenter'
              style={{ minHeight: `100%` }}
            >
              <StaticImage
                alt=''
                layout='fullWidth'
                src='../../images/mockups/CrossVisitationMockup.png'
              />
              <p className='centered' style={{ flexGrow: `1` }}>
                <strong
                  className='darkColor'
                  style={{ display: `block`, marginBottom: `.5rem` }}
                >
                  Cross Visit Map
                </strong>
                <span className='fontSm'>
                  Analyze foot traffic trends between your locations and your
                  competitors, uncovering seasonal trends and regional
                  differences in consumer behaviour and marketshare.
                </span>
              </p>
              <Link
                aria-label="Learn more about dashboards - cross visit map"
                className='uppercase primaryColor bold'
                to='/platforms/locus/dashboards/'
              >
                Learn More &#187;
              </Link>
            </div>
          </Col>

          <Col md={4} sm={12} className='paddedCol'>
            <div
              className='flexContainer column justifyBetween alignCenter'
              style={{ minHeight: `100%` }}
            >
              <StaticImage
                alt=''
                layout='fullWidth'
                src='../../images/mockups/notebookComp.png'
              />
              <p className='centered' style={{ flexGrow: `1` }}>
                <strong
                  className='darkColor'
                  style={{ display: `block`, marginBottom: `.5rem` }}
                >
                  LOCUS Notebook
                </strong>
                <span className='fontSm'>
                  EQ Works has launched a Notebook product that enables Data
                  Scientists and Analysts to explore, analyze and visualize
                  customer first-party data and the extended EQ marketplace.
                </span>
              </p>
              <Link
                aria-label="Learn more about LOCUS notebook"
                className='uppercase primaryColor bold'
                to='/platforms/environments/locus-notebook/'
              >
                Learn More &#187;
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <section className='sectionGreyRoundedTop'>
        <Container className='container'>
          <Row>
            <Col>
              <h2>Customer Value</h2>

              <ul className='checkListVertical'>
                <li>
                  <span className='check'>Target With Precision</span>
                  <span>
                    ATOM enables unparalleled targeting by radius or polygon at
                    any distance. Stop wasting money with “Spray and Pray”
                    tactics and drill down to target the people who need your
                    message the most.
                  </span>
                </li>

                <li>
                  <span className='check'>Valuable Data Assets</span>
                  <span>
                    ATOM is preloaded with valuable audience segments that can
                    be bought via channels like mobile, desktop, video and
                    connected TV. Get to market quickly and effectively with
                    data assets you can’t find on the other major platforms like
                    Google and Facebook.
                  </span>
                </li>

                <li>
                  <span className='check'>Real Time Reporting</span>
                  <span>
                    ATOM provides a reporting interface that gives you
                    geographical insights that aren’t available on other
                    platforms. Insights that can be applied and reapplied to
                    drive performance improvements and efficiencies.
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='linkBanner pageRow'>
        <Link 
          aria-label="Book a demo"
          to='/comapny/book-a-demo/'
        >
          Let us show you how &#187;
        </Link>
      </section>

      <Container className='container'>
        <Row className='pageRow'>
          <Col>
            <CaseStudyGrid />
          </Col>
        </Row>
        <Row className='pageRow'>
          <Col>
            <LogoLoop />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default SCompetitiveAnalysisPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
