import * as React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import SolutionHdr from '../../components/headers/solutionsHeader01'
import VerticalBoxList from '../../components/verticalBoxList/verticalBoxList'
import CaseStudyGrid from '../../components/caseStudyGrid/caseStudyGrid'
import LogoLoop from '../../components/logoLoop/logoLoop'
import Safety from '../../svgs/noun_Safety_3248074.svg'

const SInsurancePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Solutions | Insurance' />

      <SolutionHdr
        header={
          <>
            <span className='small'>Solutions by Industry</span> Insurance
          </>
        }
        headerClass='insurance'
        icon={<Safety />}
      />

      <div className='overlap'>
        <VerticalBoxList>
          <div>
            <h3>Challenge</h3>
            <p className='centered fontSm'>
              A national home and auto insurer was experiencing a consistent
              increase in the acquisition cost per lead for their digital
              marketing strategies. The leads were also of lower quality as a
              high percentage of them were outside the bounds of their risk
              tolerance. EQ was tasked by their actuarial team to train LOCUS’
              Cognitive machine learning model to segment the market by risk
              profile and identify households that were qualified leads meeting
              risk KPIs.
            </p>
          </div>

          <div>
            <h3>Solution</h3>
            <p className='centered fontSm'>
              EQ’s data science and marketing teams worked with the client to
              uncover new data opportunities in the EQ marketplace. A list of
              human movement attributes available in LOCUS was used for the
              existing marketing campaigns and incorporated into the machine
              learning models for enhanced risk and lead scoring. LOCUS Notebook
              and Query Lab were used to generate powerful reports and insights
              that led to extremely successful marketing and customer
              acquisition strategies.
            </p>
          </div>

          <div>
            <h3>Results</h3>
            <p className='centered fontSm'>
              Results were well above expectations. The new formulated criteria
              led to a 68.2% decrease in the customer acquisition cost while
              significantly increasing exposure to the highest LTV customer
              segments. The results were material to the business with LOCUS
              occupying the same cohort as Google and Facebook when it comes to
              volume and efficiency. Based on an extremely successful pilot, the
              datasets were then rolled out more broadly with similar efficacy
              and results.
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

export default SInsurancePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
