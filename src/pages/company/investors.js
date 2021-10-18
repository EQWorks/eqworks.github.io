import * as React from 'react'

import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { useMediaQuery } from 'react-responsive'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import SlideShow from '../../components/slideshow/slideshow'
import GenericSlideShow from '../../components/genericSlideshow/genericSlideshow'
import LogoLoop from '../../components/logoLoop/logoLoop'

export const pageQuery = graphql`
  {
    siteData: site {
      siteMetadata {
        title
      }
    }

    finYears: allContentfulFiscalYearReports(
      sort: { order: DESC, fields: year }
    ) {
      nodes {
        id
        year
        content {
          raw
          references {
            ... on ContentfulAsset {
              contentful_id
              __typename
              file {
                url
              }
              fixed(width: 1600) {
                width
                height
                src
                srcSet
              }
            }
          }
        }
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
    },

    [INLINES.ASSET_HYPERLINK]: (node, children) => {
      return (
        <a target='_blank' rel='noreferrer' href={node.data.target.file.url}>
          {children}
        </a>
      )
    }
  }
}

const InvestorsPage = ({ data, location }) => {
  const siteTitle = data.siteData.siteMetadata?.title || `Title`
  const isScreenSm = useMediaQuery({ maxWidth: 725 })

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Investors' />

      <header className='blockheader technology'>
        <h1>Investors</h1>
        <p className='centered'>
          At EQ Works, we are continually growing, leading, innovating and
          delivering value to our community.
          <br />
          Want to know what is coming next? Let us show you…
        </p>
      </header>

      <Container className='container pageRow'>
        <Row>
          <Col>
            <h2>Financial Results</h2>
            <p className='centered'>
              Financial statements are published quarterly. Find them all here.
            </p>
            {isScreenSm ? (
              <div className='investmentRow'>
                {data.finYears.nodes.map((year, i) => (
                  <div key={i}>
                    <h3 className='left'>{year.year}</h3>
                    <div class='investmentList'>
                      {year.content && renderRichText(year.content, options)}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <GenericSlideShow>
                <div className='investmentRow'>
                  {data.finYears.nodes.slice(0, 4).map((year, i) => (
                    <div key={i}>
                      <h3 className='left'>{year.year}</h3>
                      <div class='investmentList'>
                        {year.content && renderRichText(year.content, options)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className='investmentRow'>
                  {data.finYears.nodes.slice(4, 8).map((year, i) => (
                    <div key={i}>
                      <h3 className='left'>{year.year}</h3>
                      <div class='investmentList'>
                        {year.content && renderRichText(year.content, options)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className='investmentRow'>
                  {data.finYears.nodes.slice(8, 12).map((year, i) => (
                    <div key={i}>
                      <h3 className='left'>{year.year}</h3>
                      <div class='investmentList'>
                        {year.content && renderRichText(year.content, options)}
                      </div>
                    </div>
                  ))}
                </div>
              </GenericSlideShow>
            )}
          </Col>
        </Row>
      </Container>

      <section className='sectionGreyRoundedTop'>
        <Container className='container'>
          <Row className=''>
            <Col lg={12}>
              <h2>News Releases</h2>
            </Col>
            <Col lg={12}>
              <SlideShow />
            </Col>
          </Row>
        </Container>
      </section>

      <Container className='container pageRow'>
        <Row>
          <Col>
            <LogoLoop />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default InvestorsPage
