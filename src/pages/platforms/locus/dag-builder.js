import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../../../components/layout'
import Seo from '../../../components/seo'
import AdvantagesImg from '../../../svgs/Illustrations/advantages.svg'
import LocusLogoWhite from '../../../svgs/locusLogoWhite.svg'

const PLocusDAGPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle} footerLogos>
      <Seo title='Platforms | DAG Builder' />

      <header className='blockheader data'>
        <Container className='container'>
          <Row>
            <Col>
              <div
                className='flexContainer alignCenter justifyCenter'
                style={{ marginTop: `2.5rem` }}
              >
                <LocusLogoWhite />
                <h1 className='noMargin'>Builder</h1>
              </div>
              <p className='centered'>
                EQ builds its own directed acyclic graph processor on top of the
                popular Apache Airflow framework. The DAG Builder has been
                engineered to crunch (and munch) your geospatial workflows with
                over fifty (50) built-in helper stages.
              </p>
            </Col>
          </Row>
        </Container>
      </header>

      <Container className='container pageRow'>
        <Row className='' align='center'>
          <Col>
            <p className='centered'>
              EQ has taken the most common workflows for geospatial analysis
              such as; measuring traffic to a collection of business locations,
              doing cross walk-in (foot traffic) analysis comparing between
              collections of businesses such as competitors, building Audience
              Segments against a consumer behavioural pattern and generating
              highly detailed reports for detailed analysis. All of these
              workflows are enabled through an easy to use, intuitive user
              interface. This enables people of all skill levels to be able to
              do deep geospatial analysis to solve business problems while
              retaining the customization previous only available to Data
              Science teams inside big tech.
            </p>
          </Col>
        </Row>
      </Container>

      <section className='linkBanner dark pageRow'>
        <Link to='/company/book-a-demo/'>
          Book a demo to discover locus &#187;
        </Link>
      </section>

      <Container className='container pageRow'>
        <Row className=''>
          <Col className='imageCol' md={6} sm={12}>
            <AdvantagesImg style={{ width: `100%` }} />
          </Col>

          <Col md={6} sm={12}>
            <h2 className='left'>Advantages</h2>
            <ul className='checkList column'>
              <li>
                Complete freedom to analyze the data around locations that
                matter to you{' '}
              </li>
              <li>
                Access to EQ’s highly curated global points of interest database
              </li>
              <li>
                Run complex computations that are not possible within the
                limitations of a personal computer leveraging our compute
                cluster services
              </li>
              <li>
                Predetermined workflows for walkin, cross walkin, verified
                walkin and home location segments and reports available with a
                few clicks through the builder{' '}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default PLocusDAGPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
