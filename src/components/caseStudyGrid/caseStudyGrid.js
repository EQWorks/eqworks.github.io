import * as React from 'react'
import * as componentStyles from './caseStudyGrid.module.scss'
import { StaticQuery, graphql } from 'gatsby'
// import classNames from "classnames";

import { useMediaQuery } from 'react-responsive'
import { Container, Row, Col } from 'react-grid-system'
import CaseStudyTile from './caseStudyTile'

const CaseStudyGrid = ({ header, children }) => {
  const isScreenSm = useMediaQuery({ maxWidth: 750 })

  return (
    <StaticQuery
      query={graphql`
        {
          caseStudies: allContentfulCaseStudy(
            limit: 4
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
              <Col>
                <h2>
                  Let’s Find the Right <br />
                  Approach for You
                </h2>
                <p className='centered'>
                  Take advantage of our proprietary platforms and in-house
                  experts for a seamless, end-to-end solution that includes
                  audience creation, creative development, and campaign
                  execution, or push our powerful audience segments to other
                  leading ad platforms.
                </p>
              </Col>
            </Row>
            <Row className='pageRowSm'>
              <Col>
                <div className={componentStyles.grid}>
                  <CaseStudyTile
                    image={data.caseStudies.nodes[0].featuredImage.file.url}
                    large={!isScreenSm}
                    linkPath={`/learn/case-studies/${data.caseStudies.nodes[0].slug}`}
                    snippet={data.caseStudies.nodes[0].description}
                    title={data.caseStudies.nodes[0].title}
                  />

                  <div className=''>
                    {data.caseStudies.nodes.slice(1).map((caseStudy, i) => (
                      <CaseStudyTile
                        image={caseStudy.featuredImage.file.url}
                        key={i}
                        linkPath={`/learn/case-studies/${caseStudy.slug}`}
                        snippet={caseStudy.description}
                        title={caseStudy.title}
                      />
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        )
      }}
    />
  )
}

export default CaseStudyGrid
