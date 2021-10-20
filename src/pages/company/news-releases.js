import * as React from 'react'

import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import NewsReleaseTile from '../../components/newsReleaseTile/newsReleaseTile'

export const pageQuery = graphql`
  {
    siteData: site {
      siteMetadata {
        title
      }
    }

    newsReleases: allContentfulPost(sort: { order: DESC, fields: createdAt }) {
      nodes {
        createdAt(formatString: "D MMM YYYY")
        id
        title
        slug
        excerpt {
          childrenMarkdownRemark {
            excerpt(pruneLength: 80)
          }
        }
      }
    }
  }
`

const NewsReleasesPage = ({ data, location }) => {
  const siteTitle = data.siteData.siteMetadata.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='News Releases' />

      <header className='blockheader technology'>
        <h1>News Releases</h1>
        <p className='centered'>
          For details on what is happening at EQ Works, explore our latest
          releases.
        </p>
      </header>

      <Container className='container'>
        <Row className='pageRow' align='stretch'>
          {data.newsReleases.nodes.map((newsRelease, i) => (
            <Col lg={4} md={6} sm={12} key={i} style={{ marginBottom: `6rem` }}>
              <NewsReleaseTile
                date={newsRelease.createdAt}
                header={newsRelease.title}
                snippet={newsRelease.excerpt.childrenMarkdownRemark[0].excerpt}
                linkPath={`/company/news-releases/${newsRelease.slug}`}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default NewsReleasesPage
