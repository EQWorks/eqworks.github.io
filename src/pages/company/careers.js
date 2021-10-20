import * as React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import SolutionHdr from '../../components/headers/solutionsHeader01'
import CareersForm from '../../components/forms/careersForm'

const CareersPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Careers' />

      <SolutionHdr header='Careers'>
        <p>
          Interested in learning more about EQ Works, or growing your career
          with us? We are always keen to meet fresh and engaged talent. Check
          out our current postings, or simply reach out so we can discuss future
          opportunities. Come join our team!
        </p>
      </SolutionHdr>

      <Container className='container pageRow'>
        <Row>
          <Col>
            <h3 className='left'>
              Junior Account Manager
              <br />
              <span className='greyColor' style={{ fontStyle: `italic` }}>
                (position available)
              </span>
            </h3>

            <h4>Summary</h4>
            <p>
              EQ Works is growing! We are looking for an Account Manager to join
              our team. An EQ Works Account Manager aims to ensure the overall
              success of client engagement, provides support to the operations
              team, and assists in the setup, reporting and management of media
              plan executions.
            </p>

            <h4>Role and Responsibilities</h4>
            <ul>
              <li>Build positive relationships with clients</li>
              <li>Act as day to day contact with clients</li>
              <li>
                Ensure campaign assets are collected and team deadlines are met
              </li>
              <li>
                Work to understand the client’s business and online planning
              </li>
              <li>Assist in the strategy and development of media plans</li>
              <li>Administer and review all campaigns in flight</li>
              <li>Create, review and coordinate client reporting</li>
            </ul>

            <h4>Qualifications and Education Requirements</h4>
            <ul>
              <li>Strong customer service skills</li>
              <li>Demonstrated time management and multitasking abilities</li>
              <li>Solid Microsoft suite skills (Excel, Powerpoint)</li>
              <li>Excellent verbal and written communication skills</li>
              <li>Detail-oriented and able to meet tight deadlines</li>
            </ul>

            <h4>Additional Notes</h4>
            <ul>
              <li>
                Full Benefits Coverage Including Medical, Dental and Vision
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <section className='sectionGreyRoundedTop'>
        <CareersForm />
      </section>
    </Layout>
  )
}

export default CareersPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
