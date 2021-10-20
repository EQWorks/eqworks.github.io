import * as React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../../components/layout'
import Seo from '../../../components/seo'
import SolutionHdr from '../../../components/headers/solutionsHeader01'
import VerticalBoxList from '../../../components/verticalBoxList/verticalBoxList'
import NotebookImg from '../../../svgs/Illustrations/notebook.svg'
import LocusVid from '../../../images/LocusNotebook.mp4'
import VideoElement from '../../../components/videoComponent'
import LocusLogoWhite from '../../../svgs/locusLogoWhite.svg'

const PLocusNotebookPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle} footerLogos>
      <Seo title='Platforms | Environments | LOCUS Notebook' />

      <SolutionHdr
        header={
          <div
            className='flexContainer alignCenter justifyCenter'
            style={{ marginTop: `2.5rem` }}
          >
            <LocusLogoWhite />
            <span>Notebook</span>
          </div>
        }
      />

      <div className='overlap'>
        <Container className='container'>
          <Row>
            <Col>
              <VideoElement
                videoSrc={LocusVid}
                posterSrc='/locusVideoPoster.png'
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Container className='container'>
        <Row className='pageRow' align='center'>
          <Col md={6} sm={12}>
            <h2 className='left'>
              <span className='hdrIntro'>Welcome to </span>
              LOCUS Notebook
            </h2>
            <p>
              EQ Works has launched a Notebook product that enables Data
              Scientists and Analysts to explore, analyze and visualize customer
              first-party data alongside EQ’s own proprietary human movement
              datasets and the extended EQ data marketplace.
            </p>
            <p>
              LOCUS Notebook is built on the familiar platform of Project
              Jupyter and extended by the data manipulation prowess of Pandas.
              These are industry standard tools used by millions of Data
              Scientists and Analysts, now available within the LOCUS Platform.
            </p>
          </Col>
          <Col md={6} sm={12}>
            <NotebookImg style={{ width: `100%` }} />
          </Col>
        </Row>
        <Row className='pageRow'>
          <Col className='imageCol'>
            <StaticImage
              src='../../../images/mockups/notebookComp.png'
              alt=''
              layout='fullWidth'
            />
          </Col>
        </Row>
      </Container>

      <div className='pageRow' style={{ marginTop: `0` }}>
        <VerticalBoxList>
          <div>
            <h3>Transparency</h3>
            <p className='centered fontSm'>
              LOCUS Notebooks provide sophisticated data teams within companies
              the opportunity to avoid black box algorithms and carry out
              analysis in a transparent and secure data sandbox.{' '}
              <Link
                className='underline fontSm'
                to='/platforms/locus/marketplace/'
              >
                LOCUS Marketplace
              </Link>{' '}
              is the premier location for geospatial data, and once subscribed,
              LOCUS Notebook becomes the place for analysis, statistical
              modelling and deep learning.
            </p>
          </div>

          <div>
            <h3>Batteries Included</h3>
            <p className='centered fontSm'>
              The notebook environment facilitates access to EQ Works’ core
              location and data capabilities via the new LOCUS Data SDK.
              <br />
              The capabilities of the LOCUS Data SDK enable analysts to access
              their first-party data, leverage hundreds of Canadian proprietary
              datasets available in the LOCUS Data
              <br />
              Marketplace and powerful machine learning models pre-built and
              maintained by EQ Works.
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
            <h3>Packages</h3>
            <p className='centered fontSm'>
              LOCUS Notebooks provide access to thousands of pre-vetted, Python
              packages, extending capabilities well beyond EQ
              <br />
              Works to the wider open source software community.
            </p>
          </div>
        </VerticalBoxList>
      </div>
    </Layout>
  )
}

export default PLocusNotebookPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
