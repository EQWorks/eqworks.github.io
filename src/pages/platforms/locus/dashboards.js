import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../../components/layout'
import Seo from '../../../components/seo'
import DashboardsImg from '../../../svgs/Illustrations/dashboards.svg'
import VerticalBoxList from '../../../components/verticalBoxList/verticalBoxList'
import DashboardSlideShow from '../../../components/dashboardSlideshow/dashboardSlideshow'
import LocusLogoWhite from '../../../svgs/locusLogoWhite.svg'
import KeyIcon from '../../../svgs/noun_Key_2951711.svg'
import InterfaceIcon from '../../../svgs/noun_interface_1850689.svg'
import WorldIcon from '../../../svgs/noun_global_3866776.svg'

const PDashboardsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle} footerLogos>
      <Seo title='Platforms | Dashboards' />

      <header className='blockheader data'>
        <Container className='container'>
          <Row>
            <Col>
              <div
                className='flexContainer alignCenter justifyCenter'
                style={{ marginTop: `2.5rem` }}
              >
                <LocusLogoWhite />
                <h1 className='noMargin'>Dashboards</h1>
              </div>
              <p className='centered'>
                LOCUS dashboards and maps enable you to visualize the insights
                in an easy to use and powerful way.
              </p>
            </Col>
          </Row>
        </Container>
      </header>

      <Container className='container'>
        <Row className='pageRow lined' align='center'>
          <Col md={6} sm={12}>
            <h2 className='left'>
              Overview Of <br />
              Locus Dashboards
            </h2>
            <p>
              Combine data sets, create custom views and drill down to
              individual location-level insights, all in one place. LOCUS
              dashboards allow you to pull the insights, the way you need it,
              allowing for custom colour schemes, templates and reports
              on-demand - all without requiring deep technical expertise. Book
              your demo today.
            </p>
          </Col>
          <Col className='imageCol' md={6} sm={12}>
            <DashboardsImg style={{ width: `100%` }} />
          </Col>
        </Row>
        <Row className='pageRow lined'>
          <Col>
            <DashboardSlideShow>
              <div>
                <h3>AOI Map</h3>
                <StaticImage
                  alt=''
                  src='../../../images/mockups/AOIMapMockup.png'
                />
              </div>
              <div>
                <h3>Reporting Table</h3>
                <StaticImage
                  alt=''
                  src='../../../images/mockups/VisitationReportMockup.png'
                />
              </div>
            </DashboardSlideShow>
          </Col>
        </Row>
      </Container>

      <section className='linkBanner dark pageRow'>
        <Link to='/company/book-a-demo/'>
          Book a demo to discover locus &#187;
        </Link>
      </section>

      <div className='pageRow'>
        <h2>Benefits</h2>
        <VerticalBoxList horizontal>
          <div>
            <div
              className='blueIcon'
              style={{ margin: `-5rem auto 1rem auto` }}
            >
              <KeyIcon />
            </div>
            <h3>Full Data Access</h3>
            <p className='centered'>
              LOCUS is a powerful data tool that provides a 1st party data
              analysis with the ability to layer on 2nd party geospatial
              location data, as well as various valuable 3rd party data sets
              from the EQ Marketplace. LOCUS dashboards empower you to create
              visual and interactive insights across all data sets.
            </p>
          </div>

          <div>
            <div
              className='blueIcon'
              style={{ margin: `-5rem auto 1rem auto` }}
            >
              <InterfaceIcon />
            </div>
            <h3>Easy to Use Interface</h3>
            <p className='centered'>
              LOCUS maps are powerful and easy to use. View location-level
              insights with precision and depth by layering on all available
              data sets.
            </p>
          </div>

          <div>
            <div
              className='blueIcon'
              style={{ margin: `-5rem auto 1rem auto` }}
            >
              <WorldIcon />
            </div>
            <h3>Powerful Geoquery Tools</h3>
            <p className='centered'>
              GeoQuery enables you to pull data from interactive dashboards for
              any custom geographical point. It provides users on-demand
              insights that contain any specific parameters you require.
            </p>
          </div>
        </VerticalBoxList>
      </div>
    </Layout>
  )
}

export default PDashboardsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
