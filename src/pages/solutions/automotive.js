import * as React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import SolutionHdr from '../../components/headers/solutionsHeader01'
import VerticalBoxList from '../../components/verticalBoxList/verticalBoxList'
import CaseStudyGrid from '../../components/caseStudyGrid/caseStudyGrid'
import LogoLoop from '../../components/logoLoop/logoLoop'
import AutoIcon from '../../svgs/noun_Car_3650858.svg'

const SAutomotivePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Solutions | Automotive' />

      <SolutionHdr
        header={
          <>
            <span className='small'>Solutions by Industry</span> Automotive
          </>
        }
        headerClass='automotive'
        icon={<AutoIcon />}
      />

      <div className='overlap'>
        <VerticalBoxList>
          <div>
            <h3>Challenge</h3>
            <p className='centered fontSm'>
              A major OEM with an abundance of consumer data relating to
              automotive sales and service, needed to grow its same store sales
              and in some markets, even needed to stop declining sales. They
              were looking to re-evaluate their sales and marketing strategies
              and needed enhanced data sets and deeper customer insights,
              including competitor information, to kick start sales.
            </p>
          </div>

          <div>
            <h3>Solution</h3>
            <p className='centered fontSm'>
              Utilizing EQ’s LOCUS platform, the marketing and strategy group
              built customized reports for each dealership to power acquisition,
              retention and conquesting opportunities. The reports provided
              insights around competitive visitation as well as the types of
              vehicles driven and ownership status. These data were further
              enhanced with location behavioral, insurance and customer spending
              propensity profiles for each dealer and their competitors.
            </p>
          </div>

          <div>
            <h3>Results</h3>
            <p className='centered fontSm'>
              Regions involved with the pilot saw an increase of 6.2% in close
              rates over a 3 month period. The OEM used this intelligence to to
              roll out specific offers, marketing campaigns and direct sales
              strategies for each dealer and for the national marketing teams.
              At a national level, the insights and data resulted in a
              staggering 32% decrease in cost per lead through digital channels.
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

export default SAutomotivePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
