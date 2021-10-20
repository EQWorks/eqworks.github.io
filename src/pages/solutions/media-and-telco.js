import * as React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import SolutionHdr from '../../components/headers/solutionsHeader01'
import VerticalBoxList from '../../components/verticalBoxList/verticalBoxList'
import CaseStudyGrid from '../../components/caseStudyGrid/caseStudyGrid'
import LogoLoop from '../../components/logoLoop/logoLoop'
import Transmit from '../../svgs/noun_Transmitter_4094569.svg'

const SMediaPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Solutions | Media &amp; Telco' />

      <SolutionHdr
        header={
          <>
            <span className='small'>Solutions by Industry</span> Media &amp;
            Telco
          </>
        }
        headerClass='media'
        icon={<Transmit />}
      />

      <div className='overlap'>
        <VerticalBoxList>
          <div>
            <h3>Challenge</h3>
            <p className='centered fontSm'>
              A major global holding company had acquired 1st and 3rd party data
              sets but lacked a complete end to end solution. They needed a
              central hub that would enrich, track and provide detailed
              analytics to their internal teams as well as their clients. In
              addition, they required a mobile partner with quality location
              data at scale in order to fully monetize the value of their
              investments.
            </p>
          </div>

          <div>
            <h3>Solution</h3>
            <p className='centered fontSm'>
              LOCUS was used to onboard all of their licensed 1st and 3rd party
              data and enrich various segments and profiles with the location
              based data from EQ’s marketplace. LOCUS Notebook and QL were used
              to create segments, both at a device and/or home location level,
              and generated pre and post campaign insights and reporting to
              drive deeper planning cycles. LOCUS builder was used to create
              segments for omnichannel activation.
            </p>
          </div>

          <div>
            <h3>Results</h3>
            <p className='centered fontSm'>
              LOCUS helped the company achieve 263% YoY revenue growth for their
              data assets. It also provided a central area that connected all of
              the different data sets from sales to planning, activation,
              reporting and analytics and modeling. LOCUS was able shift the
              paradigm from siloed planning and execution to holistic data
              driven executions. LOCUS has now been fully whitelabeled and is an
              integral part of day to day operational workflow.
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

export default SMediaPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
