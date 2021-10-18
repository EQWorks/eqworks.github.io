import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Container, Row, Col } from 'react-grid-system'
import CaseStudyTile from './caseStudyTile'

const CaseStudyRow = ({ header, children }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          caseStudies: allContentfulCaseStudy(
            limit: 3
            sort: { fields: createdAt }
          ) {
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
      `}
      render={(data) => {
        return (
          <Container className='container'>
            <Row>
              <Col md={12}>
                <h3 className='left'>View More Case Studies:</h3>
              </Col>
              {data.caseStudies.nodes.map((caseStudy, i) => (
                <Col sm={4} xs={12} key={i}>
                  <CaseStudyTile
                    column
                    image={caseStudy.featuredImage.file.url}
                    linkPath={`/learn/case-studies/${caseStudy.slug}`}
                    snippet={caseStudy.description}
                    title={caseStudy.title}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        )
      }}
    />
  )
}

export default CaseStudyRow
