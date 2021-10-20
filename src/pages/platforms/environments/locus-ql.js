import * as React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../../components/layout'
import Seo from '../../../components/seo'
import SolutionHdr from '../../../components/headers/solutionsHeader01'
import VerticalBoxList from '../../../components/verticalBoxList/verticalBoxList'
import LabImg from '../../../svgs/Illustrations/labs.svg'
import LocusLogoWhite from '../../../svgs/locusLogoWhite.svg'

const PLocusQLPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle} footerLogos>
      <Seo title='Platforms | Environments | LOCUS QL' />

      <SolutionHdr
        header={
          <div
            className='flexContainer alignCenter justifyCenter'
            style={{ marginTop: `2.5rem` }}
          >
            <LocusLogoWhite />
            <span>QL</span>
          </div>
        }
      />

      <Container className='container'>
        <Row className='pageRow' align='center'>
          <Col md={6} sm={12}>
            <h2 className='left'>
              <span className='hdrIntro'>Welcome to </span>
              <span className='uppercase'>LOCUS</span> Query Lab
            </h2>
            <p>
              LOCUS Query Lab (QL) is a no-code SQL-driven data engine that
              enables people of all skill levels to explore, analyze and
              visualize customer first-party data alongside EQ’s own proprietary
              human movement datasets and the extended EQ data marketplace.
            </p>
            <p>
              QL creates a SQL-like interface to query any type of geospatial
              data. With a new geospatial query engine built from the ground up
              for geospatial workloads. Whether it is understanding the
              household income distribution of last month’s ecommerce orders, or
              segmenting your leads by their propensity to buy – QL can unlock
              powerful insights with a few clicks. We’ve taken it a step further
              and unlocked all of this analytical power without even needing to
              know SQL yourself when using the QL query designer.
            </p>
          </Col>
          <Col md={6} sm={12}>
            <LabImg style={{ width: `100%` }} />
          </Col>
        </Row>
        <Row className='pageRow'>
          <Col className='imageCol'>
            <StaticImage
              src='../../../images/mockups/QueryLabComp.png'
              alt=''
              layout='fullWidth'
            />
          </Col>
        </Row>
      </Container>
      <div className='pageRow' style={{ marginTop: `0` }}>
        <VerticalBoxList>
          <div>
            <h3>Build Once, Use Infinitely</h3>
            <p className='centered fontSm'>
              Analysts can define logic and queries once and changes to
              referenced datasets will get propagated to all underlying reports,
              workflows and notebooks seamlessly. QL’s saved queries let you
              build and share your most frequently used queries across the
              organization and skill levels.
            </p>
          </div>

          <div>
            <h3>Batteries Included</h3>
            <p className='centered fontSm'>
              QL comes with all the tools you need to get started with powerful
              geospatial analytical tasks from – schema inference and browsing,
              query history, advanced logic such as cases, aggregations,
              cross-dataset joins and geo-functions. Whether you’re an
              experienced data scientist or an executive on the move looking for
              a quick customer insight, LOCUS QL will get your business where it
              needs to go.
            </p>
          </div>

          <div>
            <h3>Data Capabilities</h3>
            <p className='centered fontSm'>
              The QL data engine is able to access EQ Works’ core location data
              capabilities, advertiser marketing data at a granular event level,
              your first-party data accessed via Connection Hub while leveraging
              hundreds of Canadian proprietary datasets available in the LOCUS
              Data Marketplace.
            </p>
          </div>

          <div>
            <h3>Visualizations</h3>
            <p className='centered fontSm'>
              Even though tabular data is incredibly powerful, nothing beats a
              visualization to uncover a pattern or insight you didn’t see
              before. Visualize any QL query result with our native chart
              builder and add a personal touch with our endless customization
              options.
            </p>
          </div>
        </VerticalBoxList>
      </div>
    </Layout>
  )
}

export default PLocusQLPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
