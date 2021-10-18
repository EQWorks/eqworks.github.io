import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Layout from '../components/layout'
// import Img from "gatsby-image"
import Seo from '../components/seo'
import CaseStudyRow from '../components/caseStudyGrid/caseStudyRow'

export const query = graphql`
  query ($slug: String!) {
    contentfulCaseStudy(slug: { eq: $slug }) {
      id
      title
      updatedAt

      content {
        raw
      }

      featuredImage {
        file {
          url
          fileName
        }
        fluid {
          src
        }
      }

      highlights
      categories {
        title
      }
    }
  }
`

const Bold = ({ children }) => <span className='bold'>{children}</span>
const Text = ({ children }) => <p>{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,

    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    }
  }
}

const CaseStudy = ({ data }) => {
  const { content } = data.contentfulCaseStudy

  return (
    <Layout>
      <Seo title={data.contentfulCaseStudy.title} />

      <header className='blockheader caseStudyHdr'>
        <img
          className='caseStudyImg'
          src={data.contentfulCaseStudy.featuredImage.file.url}
          alt=''
          width='200'
          height='200'
        />
        <div className='overlay'></div>
        <Container>
          <Row>
            <Col>
              <div className='content'>
                <h1 className='left'>
                  <span className='hdrIntroBlack mobileWhite'>
                    Case Study:{' '}
                    {data.contentfulCaseStudy.categories.map((category, i) => (
                      <span key={i}>{category.title}</span>
                    ))}
                  </span>
                  {data.contentfulCaseStudy.title}
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {data.contentfulCaseStudy.highlights && (
        <section className='sectionBlueBackground sectionBlueRounded'>
          <Container>
            <Row>
              <Col className='flexContainer justifyCenter marginLg mobileColumn'>
                {data.contentfulCaseStudy.highlights.map((highlight, i) => (
                  <div style={{ maxWidth: `17.5rem` }}>
                    <p className='bold centered'>{highlight}</p>
                  </div>
                ))}
              </Col>
            </Row>
          </Container>
        </section>
      )}

      <main className='postContent caseStudyContent'>
        <Container>
          <Row>
            <Col>
              {content &&
                renderRichText(data.contentfulCaseStudy.content, options)}
            </Col>
          </Row>
        </Container>
      </main>

      <section
        className='sectionGreyGradBackground pageRow'
        style={{ paddingBottom: `0` }}
      >
        <CaseStudyRow />
      </section>
    </Layout>
  )
}

export default CaseStudy
