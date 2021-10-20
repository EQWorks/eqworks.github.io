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

const SCustomerAcquisitionPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Solutions | Customer Acquisition' />

      <SolutionHdr header='Deeper Data, Better Insights, Better Results'>
        <p className='centered'>
          Turn data and insights into action across your digital and physical
          sales channels.
        </p>
      </SolutionHdr>

      <Container className='container'>
        <Row className='pageRow'>
          <Col>
            <p className='centered'>
              LOCUS enables companies to harness the power of geospatial data to
              unlock insights that drive better decision making across all
              acquisition channels. Kickstart your path to customer acquisition
              with your 1st party data from either sales or CRM that can then be
              enriched with additional criteria and attributes from location and
              3rd party data sets. Gathering these additional insights on your
              customers can drive better cross selling opportunities and
              retention strategies. Take learnings from your 1st party data sets
              and go beyond your customer data by accessing thousands of
              relevant attributes from LOCUS and the LOCUS Data Marketplace.
              Uncover your most valuable prospects and use the insights to drive
              traditional and digital acquisition channels or use attributes to
              enhance prospect routing onboarding to increase close rates and
              reduce churn. Leverage LOCUS as your most powerful customer
              acquisition tool and start connecting business lines across your
              organization today.
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
                aria-label='Learn more about LOCUS notebook'
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
                aria-label='Learn more about LOCUS QL'
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
                  className='darkColor'
                  style={{ display: `block`, marginBottom: `.5rem` }}
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
                aria-label='Learn more about dashboards - maps'
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
                  <span className='check'>New and deeper Insights</span>
                  <span>
                    LOCUS enables you to drive deeper insights on your customers
                    by giving you additional attributes at the individual or
                    household level. Use these new insights to retention and
                    upselling.
                  </span>
                </li>

                <li>
                  <span className='check'>
                    3rd Party Data Without Procurement
                  </span>
                  <span>
                    Access the marketplace to get data and insights on customers
                    that have the attributes that match your value proposition.
                    LOCUS marketplace gives you access to location visitation
                    and behavioral data, Home and Auto Insurance Data,
                    demographic data, real estate data, consumer spending data
                    and more.
                  </span>
                </li>

                <li>
                  <span className='check'>Security and Anonymity</span>
                  <span>
                    Leverage powerful insights that can combine datasets in
                    combination with your own data without compromising
                    sensitive information data or privacy
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='linkBanner pageRow'>
        <Link aria-label='Book a demo' to='/company/book-a-demo/'>
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

export default SCustomerAcquisitionPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
