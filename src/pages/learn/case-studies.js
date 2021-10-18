import * as React from 'react'

import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import CaseStudyTile from '../../components/caseStudyGrid/caseStudyTile'

export const pageQuery = graphql`
  {
    siteData: site {
      siteMetadata {
        title
      }
    }

    caseStudies: allContentfulCaseStudy(sort: { fields: createdAt }) {
      nodes {
        title
        slug
        description
        featuredImage {
          file {
            url
          }
        }
        createdAt(formatString: "D MMM YYYY")
        categories {
          title
        }
      }
    }
  }
`

const CaseStudiesPage = ({ data, location }) => {
  const siteTitle = data.siteData.siteMetadata.title || `Title`
  // console.log(data.caseStudies.nodes)

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Case Studies' />

      <header className='blockheader technology'>
        <h1>Case Studies</h1>
        <p className='centered'>
          We don’t just say it, we prove it. Check out these examples of our{' '}
          <br />
          product at work and see just how important data really is to our
          clients.
        </p>
      </header>

      <Container className='container'>
        <Row className='pageRow' align='stretch'>
          {data.caseStudies.nodes.map((caseStudy, i) => (
            <Col lg={4} md={6} sm={12} key={i}>
              <CaseStudyTile
                image={caseStudy.featuredImage.file.url}
                title={caseStudy.title}
                snippet={caseStudy.description}
                linkPath={`/learn/case-studies/${caseStudy.slug}`}
                column
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default CaseStudiesPage
