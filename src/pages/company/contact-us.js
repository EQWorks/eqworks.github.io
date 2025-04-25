import * as React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import ContactHdr from '../../components/headers/contactHeader'
import SubscriptionForm from '../../components/subscriptionForm/subscriptionForm'
import Map from '../../components/map/map'
import ContactForm from '../../components/forms/contactForm'

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Contact Us' />

      <ContactHdr header='Contact Us'>
        <p className='centered'>
          Have a question? Want to learn more? Let’s connect.
        </p>
      </ContactHdr>

      <ContactForm />

      <section className='sectionGreyBackground' style={{ paddingBottom: `0` }}>
        <Container className='container' style={{ paddingBottom: `0` }}>
          <Row>
            <Col>
              <div
                className='flexContainer marginLg justifyCenter contactRow'
                style={{ marginBottom: `4vw` }}
              >
                <div>
                  <p>
                    <strong className='darkColor'>Toronto Office</strong>
                    <br />
                    <span className='fontSm'>
                      1235 Bay Street, Suite 401
                      <br />
                      Toronto, ON M5R 3K4
                    </span>
                  </p>
                </div>

                <div>
                  <p>
                    <strong className='darkColor'>Sales</strong>
                    <br />
                    <span className='fontSm'>Sales@eqworks.com</span>
                  </p>
                </div>

                <div>
                  <p>
                    <strong className='darkColor'>Media Inquiries</strong>
                    <br />
                    <span className='fontSm'>Press@eqworks.com</span>
                  </p>
                </div>

                <div>
                  <p>
                    <strong className='darkColor'>Investor Relations</strong>
                    <br />
                    <span className='fontSm'>
                      investor@eqworks.com
                    </span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Map />
      </section>

      <Container className='container pageRow'>
        <Row>
          <Col>
            <SubscriptionForm />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
