import * as React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import SolutionHdr from '../../components/headers/solutionsHeader01'
import VerticalBoxList from '../../components/verticalBoxList/verticalBoxList'
import CaseStudyGrid from '../../components/caseStudyGrid/caseStudyGrid'
import LogoLoop from '../../components/logoLoop/logoLoop'
import Retail from '../../svgs/noun_Retail_2711710.svg'

const SRetailPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Solutions | Retail' />

      <SolutionHdr
        header={
          <>
            <span className='small'>Solutions by Industry</span> Retail
          </>
        }
        headerClass='retail'
        icon={<Retail />}
      />

      <div className='overlap'>
        <VerticalBoxList>
          <div>
            <h3>Challenge</h3>
            <p className='centered fontSm'>
              A major canadian retailer with lots of CRM and 1st party data had
              a problem with continuing to improve its acquisition efforts. They
              had a very strong data and analytics group with robust tooling but
              were lacking additional depth and insights at the customer. They
              were having problems catering messaging to their customer base
              beyond retargeting and past purchase data. They were also looking
              for consumer data that would help drive new acquisition efforts.
            </p>
          </div>

          <div>
            <h3>Solution</h3>
            <p className='centered fontSm'>
              The company decided that the unique access to location data as
              well as the other unique datasets available through the LOCUS
              Marketplace were precisely what they needed. They used LOCUS Query
              Lab (QL) and LOCUS Notebook to create insights at the store level,
              customer household level and regional level. They ingested the
              household data into their CRM for omnichannel activation and used
              the regional data to develop specific offering and messaging.
            </p>
          </div>

          <div>
            <h3>Results</h3>
            <p className='centered fontSm'>
              The company has added over 26 new criteria at the household level
              and created 12 always on regional reports using LOCUS data. The
              results showed an astounding 183% increase in engagements rates to
              their existing benchmarks and an overall conversion rate increase
              of 29% and 41% for existing and new acquisition respectively.
              LOCUS has become an integral part of the teams analytics, insights
              and activation strategies.
            </p>
          </div>
        </VerticalBoxList>
      </div>

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

export default SRetailPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
