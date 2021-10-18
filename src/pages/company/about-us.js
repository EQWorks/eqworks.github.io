import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import SlideShow from '../../components/slideshow/slideshow'
import Button from '../../components/button/button'
import EQvid from '../../images/EQWorksHD.mp4'
import VideoElement from '../../components/videoComponent'
import LogoLoop from '../../components/logoLoop/logoLoop'
import SubscriptionForm from '../../components/subscriptionForm/subscriptionForm'

import LocusLogo from '../../svgs/locusLogo.svg'
import AtomLogo from '../../svgs/atomLogo.svg'

const InvestorsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='About Us' />

      <header className='blockheader technology'>
        <h1>About Us</h1>
        <p className='centered'>
          EQ provides a proprietary platform that enables companies to utilize
          data to drive insights
          <br />
          and intelligence for better strategic decision making.
        </p>
      </header>

      <Container className='container pageRow'>
        <Row align='center'>
          <Col md={6} sm={12}>
            <h2 className='left'>
              EQ Works Operates At The Intersection Of Data And AI
            </h2>
            <p>
              EQ provides a proprietary platform that enables companies to
              utilize data to drive insights and intelligence for better
              strategic decision making. Our technology, complemented by some of
              the most sophisticated tools and datasets available, improves how
              businesses work by utilizing powerful first party data in ways
              that would have been impossible only a few years ago. By
              incorporating these first party data with complementary
              proprietary and third party data sets, EQ enables companies to
              better understand, predict, and influence customer behaviour and
              provide every level of an organization with the knowledge and
              analysis to properly address their unique challenges with
              precision.
            </p>
          </Col>

          <Col>
            <StaticImage
              alt=''
              src='../../images/masonry.png'
              layout='fullWidth'
            />
          </Col>
        </Row>
      </Container>

      <section className='sectionBlueArrow'>
        <Container className='container'>
          <Row className='pageRow'>
            <Col>
              <VideoElement videoSrc={EQvid} posterSrc='/homeVideoPoster.png' />
            </Col>
          </Row>
          <Row className='pageRow marginAll'>
            <Col>
              <h2>
                The World Is Moving Quickly <br />
                Towards A New Digital Era{' '}
              </h2>
              <p className='centered'>
                With technology changes increasing at a rapid pace and data
                becoming more plentiful – and more scarce – at the same time, EQ
                empowers companies of all sizes and at varying degrees of
                sophistication with the required tools to compete and grow. With
                over a decade of experience building advanced analytical tools
                and real-time analysis, EQ’s products help clients push the
                envelope of technology and stay ahead of their competition.
                Data, artificial intelligence, machine learning, visualization,
                insights and execution are all built into our DNA and allow us
                to create actionable intelligence for businesses to attract,
                retain, and grow the customers that matter most.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

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

      <section className='sectionImageBg pageRow'>
        <Container className='container'>
          <Row>
            <Col lg={8} md={12}>
              <h2 className='left'>The EQ Works Mission</h2>
              <p>
                To be a leading world-class platform that businesses turn to for
                data driven analysis and results. Whether its increasing sales,
                reducing churn, improving customer loyalty, or just working to
                understand your business better, EQ’s platform ingests data from
                huge Fortune 1000 companies, or smaller regional businesses, in
                a fast, efficient and secure way so that when combined with
                other proprietary and third-party geospatial data, we provides
                actionable insights to solve some of the most complex problems.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className='container'>
        <Row className='pageRow'>
          <Col lg={6} style={{ marginTop: `2rem` }}>
            <LocusLogo style={{ maxWidth: `20rem` }} />
            <h2 className='left marginSm'>
              EQ's geospatial <br />
              analytics platform
            </h2>
            <p>
              Locus is the next generation, geospatial insights
              <br /> and analytics platform.
            </p>
            <div className='flexContainer mobileColumn alignStart'>
              <Button linkPath='/platforms/locus/' text='Learn more' />
              <Button
                variation='outline'
                linkPath='/company/book-a-demo/'
                text='Book a demo'
              />
            </div>
          </Col>

          <Col lg={6} className='imageCol'>
            <StaticImage src='../../images/mockups/locusComputer.png' alt='' />
          </Col>
        </Row>

        <Row className='pageRow'>
          <Col>
            <LogoLoop />
          </Col>
        </Row>

        <Row className='pageRow'>
          <Col lg={6} style={{ marginTop: `2rem` }}>
            <AtomLogo style={{ maxWidth: `12rem` }} />
            <h2 className='left marginSm'>
              The Leading Geospatial Marketing Platform
            </h2>
            <p>
              The next generation of media buying.
              <br /> Our proprietary self-serve programmatic solution
              <br /> and the most advanced location-based advertising
              <br /> tool – all rolled into one.
            </p>
            <div className='flexContainer mobileColumn alignStart'>
              <Button linkPath='/platforms/atom/' text='Learn more' />
              <Button
                variation='outline'
                linkPath='/company/book-a-demo/'
                text='Book a demo'
              />
            </div>
          </Col>
          <Col lg={6} className='imageCol'>
            <StaticImage src='../../images/mockups/atomComputer.png' alt='' />
          </Col>
        </Row>

        <Row className='pageRow'>
          <Col>
            <SubscriptionForm />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default InvestorsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
