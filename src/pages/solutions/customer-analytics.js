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

const SCustomerAnalyticsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Solutions | Customer Analytics' />

      <SolutionHdr header='Better Tools, Better Data, Better Insights'>
        <p className='centered'>
          Mine valuable customer insights on demand using 1st, 2nd and 3rd Party
          Data.
        </p>
      </SolutionHdr>

      <Container className='container'>
        <Row className='pageRow'>
          <Col>
            <p className='centered'>
              LOCUS enables companies to harness the power of geospatial data to
              unlock insights that drive better decision making, products and
              action. Create reports, charts, data frames and models from end to
              end using LOCUS geospatial data platform and APIs. Your journey
              will start with 1st party data onboarding which is made easy and
              secure using Connection Hub. Then use powerful tools like LOCUS
              QL, our powerful geospatial SQL abstraction layer to mine insights
              across your data and thousands of data points made available
              through the marketplace. Take your analytics to the next level
              using LOCUS Notebook, your OnDemand python environment that
              enables subatomic level insights and capabilities across datasets.
            </p>
          </Col>
        </Row>

        <Row align='stretch' className='pageRow' >
          <Col className='paddedCol' md={4} sm={12}>
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
                aria-label="Learn more about LOCUS Notebook"
                className='uppercase primaryColor bold'
                to='/platforms/environments/locus-notebook/'
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
                src='../../images/mockups/QueryLabComp.png'
              />
              <p className='centered' style={{ flexGrow: `1` }}>
                <strong
                  className='darkColor'
                  style={{ display: `block`, marginBottom: `.5rem` }}
                >
                  LOCUS QL
                </strong>
                <span className='fontSm'>
                  LOCUS Query Lab (QL) is a no-code SQL-driven data engine that
                  enables people of all skill levels to explore, analyze and
                  visualize customer first-party data.
                </span>
              </p>
              <Link
                aria-label="Learn more about LOCUS QL"
                className='uppercase primaryColor bold'
                to='/platforms/environments/locus-ql/'
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
                src='../../images/mockups/AOIMapMockup.png'
              />
              <p className='centered' style={{ flexGrow: `1` }}>
                <strong
                  style={{ display: `block`, marginBottom: `.5rem` }}
                  className='darkColor'
                >
                  Map
                </strong>
                <span className='fontSm'>
                  Whether analyzing macro trends or getting granular, the
                  mapping functionality helps contextualize insights in relation
                  to other geographic areas.
                </span>
              </p>
              <Link
                aria-label="Learn more about dashboards - maps"
                className='uppercase primaryColor bold'
                to='/platforms/locus/dashboards/'
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
                  <span className='check'>Speed and Excellence</span>
                  <span>
                    LOCUS tool sets go end to end from data onboarding,
                    enrichment, modeling, reporting and egress into the
                    environments of your choice. The environments have been
                    designed so that all levels of the organization can benefit
                    and so analysis and activation of the data can be done
                    without barriers.
                  </span>
                </li>

                <li>
                  <span className='check'>
                    3rd Party Data Without Procurement
                  </span>
                  <span>
                    Access the marketplace to layer on data from Census,
                    Consumer Spending, Real Estate, Insurance and Location
                    Visitation without having to acquire data sets one by one.
                  </span>
                </li>

                <li>
                  <span className='check'>Security and Anonymity</span>
                  <span>
                    Leverage powerful datasets in combination with your own data
                    without compromising sensitive data or privacy
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='linkBanner pageRow'>
        <Link aria-label="Book a demo" to='/company/book-a-demo/'>Let us show you how &#187;</Link>
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

export default SCustomerAnalyticsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
