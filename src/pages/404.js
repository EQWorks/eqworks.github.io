import * as React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../components/layout'
import Seo from '../components/seo'
import ErrorIcon from '../svgs/noun_Error_1582584.svg'

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='404: Not Found' />
      <header className='blockheader sectionGreyRoundedSolid'>
        <Container>
          <Row>
            <Col>
              <div
                className='blueIcon'
                style={{ margin: `2rem auto`, border: `0` }}
              >
                <ErrorIcon />
              </div>

              <h1 className='primaryColor' style={{ textAlign: `center` }}>
                404 - Page Not Found
              </h1>

              <p style={{ textAlign: `center` }}>
                The page you’re looking for might have been removed, <br />
                had its name changed or is temporarily unavailable.
              </p>

              <div className='flexContainer justifyCenter'>
                <Link
                  to='/'
                  className='uppercase primaryColor centered bold'
                  style={{ color: `#3232F5` }}
                >
                  Home Page &#187;
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
