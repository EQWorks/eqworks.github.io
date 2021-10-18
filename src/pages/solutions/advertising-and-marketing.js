import * as React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import SolutionHdr from '../../components/headers/solutionsHeader01'
import CaseStudyGrid from '../../components/caseStudyGrid/caseStudyGrid'
import LogoLoop from '../../components/logoLoop/logoLoop'

const SAdvertisingMarketingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Solutions | Customer Acquisition' />

      <SolutionHdr header='Analyze, Connect And Convert Your Perfect Audience With Geospatial Data'>
        <p className='centered'>
          Combine all of your data across channels and merge geospatial
          intelligence from locations and 3rd party data to drive results in an
          omnichannel world.
        </p>
      </SolutionHdr>

      <Container className='container'>
        <Row className='pageRow'>
          <Col>
            <p className='centered'>
              LOCUS and ATOM together provide a scaled solution for marketers to
              uncover insights that can be applied across all channels.
              <br />
              By anchoring datasets to a consistent location, LOCUS enables the
              ingestion of 1st party data, campaign data, website data, purchase
              data and others into a powerful analytical engine that combines
              location and other geospatial datasets to help drive insights,
              intelligence and action. LOCUS ML and Notebook enable rich data
              layering tools that enable seamless report building and export to
              desired activation partners. Insights from LOCUS can be plugged
              directly into ATOM, EQ’s proprietary geospatial DSP, to activate
              data in the most secure and granular way. LOCUS and ATOM are
              valuable to brands and agencies because they empower the
              inquisitive marketer to drive results across both digital and
              traditional channels.
            </p>
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
                  <span className='check'>
                    Omni-channel Insights &amp; Activation
                  </span>
                  <span>
                    LOCUS and ATOM go end-to-end enabling the flow of data from
                    analysis to activation, streamlining teams and results.
                  </span>
                </li>

                <li>
                  <span className='check'>
                    3rd Party Data without Procurement
                  </span>
                  <span>
                    Layer on data from Census, Consumer Spending, Real Estate,
                    Insurance and Location Visitation on top of all of your data
                    from campaigns and planning. Then activate both targeting
                    and reporting insights, a powerful combination.
                  </span>
                </li>

                <li>
                  <span className='check'>Security and Anonymity</span>
                  <span>
                    Leverage powerful datasets in combination with your own data
                    without compromising sensitive data or privacy.
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='linkBanner pageRow'>
        <Link to='/company/book-a-demo/'>Let Us Show You How &#187;</Link>
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

export default SAdvertisingMarketingPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
