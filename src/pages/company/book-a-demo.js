import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import ContactHdr from '../../components/headers/contactHeader'
import CaseStudyGrid from '../../components/caseStudyGrid/caseStudyGrid'
import AtomLogo from '../../svgs/atomLogo.svg'
import LocusLogo from '../../svgs/locusLogo.svg'
import BookDemoForm from '../../components/forms/bookDemoForm'

const BoookDemoPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Book A Demo' />

      <ContactHdr header='Book A Demo' />

      <Container className='container pageRow'>
        <Row className=''>
          <Col>
            <h2>Learn directly from our Data Expert</h2>
            <p className='centered'>
              Interested in seeing how our platforms can make a difference for
              your business? Reach out to book a demo and we’ll show you how EQ
              can turn your data into informed performance.
            </p>
          </Col>
        </Row>

        <Row className='pageRow lined'>
          <Col>
            <div className='flexContainer justifyCenter alignCenter marginLg mobileColumn'>
              <div>
                <div style={{ width: `7.5rem`, margin: `0 auto` }}>
                  <StaticImage
                    alt=''
                    src='../../images/team/Mark.png'
                    layout='fullWidth'
                  />
                </div>
                <h3 style={{ marginBottom: `0` }}>Mark</h3>
                <p style={{ marginTop: `.5rem` }} className='centered'>
                  Data Platforms
                  <br />
                  Vice President
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <section className='sectionGreyRoundedTop pageRow'>
        <Container className='container'>
          <Row className=''>
            <Col lg={12}>
              <h2>Book a Demo Today</h2>
              <div className='logoRow'>
                <div>
                  <AtomLogo style={{ width: `100%` }} />
                </div>
                <div>
                  <LocusLogo style={{ width: `100%` }} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <BookDemoForm />
      </section>

      <Container className='container pageRow'>
        <Row className=''>
          <Col>
            <CaseStudyGrid />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default BoookDemoPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
