import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import HomeLayout from '../components/homeLayout'
import Seo from '../components/seo'
import Button from '../components/button/button'
import Slideshow from '../components/slideshow/slideshow'
import LogoLoop from '../components/logoLoop/logoLoop'
import SubscriptionForm from '../components/subscriptionForm/subscriptionForm'
import CircleTabs from '../components/circleTabs/circleTabs'
import EQvid from '../images/EQWorksHD.mp4'
import VideoElement from '../components/videoComponent'

import LocusLogo from '../svgs/locusLogo.svg'
import AtomLogo from '../svgs/atomLogo.svg'

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <HomeLayout location={location} title={siteTitle}>
      <Seo title='Home' />

      <section className='sectionGreyRounded'>
        <Container className='container'>
          <Row className='pageRow'>
            <Col>
              <h2>Meet EQ Works</h2>
              <p className='centered'>
                EQ helps companies maximize the value of their data. We enrich
                your proprietary data to provide you with a better understanding
                of your customers and allow for the most powerful and impactful
                decisions to be made. We enable you to enrich your customer
                understanding, stay in control and create powerful, impactful
                business decisions. Ready to take your business to the next
                level?
              </p>
              <div className='flexContainer justifyCenter mobileColumn'>
                <Button linkPath='/company/book-a-demo/' text='Book a demo' />
                <Button
                  variation='outline'
                  linkPath='/company/contact-us/'
                  text='Connect with us'
                />
              </div>
            </Col>
          </Row>

          <Row className='pageRow'>
            <Col>
              <VideoElement videoSrc={EQvid} posterSrc='/homeVideoPoster.png' />
            </Col>
          </Row>
        </Container>
      </section>

      <CircleTabs />

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
            <StaticImage src='../images/mockups/locusComputer.png' alt='' />
          </Col>
        </Row>
      </Container>

      {/* NEWS & EVENTS */}
      <section className='sectionGreyRoundedTop pageRow'>
        <Container className='container'>
          <Row className=''>
            <Col lg={12}>
              <h2>News Releases</h2>
            </Col>

            <Col lg={12}>
              <Slideshow />
            </Col>
          </Row>
        </Container>
      </section>

      <Container className='container'>
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
              <br /> tools – all rolled into one.
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
            <StaticImage src='../images/mockups/atomComputer.png' alt='' />
          </Col>
        </Row>

        <Row className='pageRow'>
          <Col>
            <LogoLoop />
          </Col>
        </Row>

        <Row className='pageRow'>
          <Col>
            <SubscriptionForm />
          </Col>
        </Row>
      </Container>
    </HomeLayout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
