import * as React from 'react'

import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../components/layout'
import Seo from '../components/seo'

const PrivacyPolicyPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Privacy Policy' />

      <header className='blockheader technology'>
        <h1>Privacy Policy</h1>
      </header>

      <Container className='container'>
        <Row className='pageRow lined'>
          <Col>
            <span className='footnote'>Last updated on January 4, 2017</span>

            <h2 className='left'>Our Commitment To Privacy</h2>

            <p>
              EQ Works [“EQ”] understands that protecting the privacy and
              confidentiality of your information is important to you.
            </p>
            <p>
              Our privacy code as outlined below governs the collection, use,
              and disclosure of your information and explains what information
              may be collected from you and how it is used. It also explains how
              you can have your questions addressed or express concerns about
              any privacy related issues, as well as provides opt-out
              procedures.
            </p>
          </Col>
        </Row>

        <Row className='pageRow lined'>
          <Col>
            <h2 className='left'>What Information Does EQ Collect?</h2>
            <p>
              EQ does not collect nor distribute any personally identifying
              information, including but not limited to: names, email and postal
              addresses, or phone numbers.
            </p>
            <p>
              All information collected and shared with advertisers and third
              parties is in aggregate, allowing us to provide advertisers and
              publishers with percentages that signify trends, without compiling
              or passing along any personally identifiable information.
            </p>
          </Col>
        </Row>

        <Row className='pageRow lined'>
          <Col>
            <h2 className='left'>How Does EQ Collect This Information?</h2>
            <p>
              EQ does not collect nor distribute any personally identifying
              information, including but not limited to: names, email and postal
              addresses, or phone numbers.
            </p>
            <p>
              All information collected and shared with advertisers and third
              parties is in aggregate, allowing us to provide advertisers and
              publishers with percentages that signify trends, without compiling
              or passing along any personally identifiable information.
            </p>

            <p>
              <strong className='darkColor'>Log files</strong>
              <br />
              Like most standard advertising protocols, EQ uses log files to
              store and segment information. This includes internet protocol
              (IP) addresses, browser types, geographical co-ordinates, internet
              service provider (ISP), referring/exit pages, platform type,
              date/time stamp, and number of clicks to analyze trends,
              administer the site, track user’s movement in the aggregate, and
              gather broad demographic information for aggregate use.
            </p>
            <p>
              <strong className='darkColor'>Cookies</strong>
              <br />A cookie is a small file sent to your browser by a website
              you visit to improve your browsing experience. It helps the
              website to remember information about your visit, like your
              preferences and other information. We may use cookies to ensure
              the proper serving of advertisements, for analytics, and for
              reporting. The information stored in EQ cookies is not linked to
              any personally identifiable information.
            </p>
            <p>
              Our cookies are set to expire after two years after the last
              visit. It is possible to turn cookies off in your web browser
              preferences. Please be aware that disabling cookies may result in
              a diminished browsing experience.
            </p>
            <p>
              <strong className='darkColor'>Site tags</strong>
              <br />
              Site tags, pixels, or web beacons are transparent pixels that load
              when a user visits a webpage or views a digital advertisement, and
              allows the web publisher to understand how a visitor interacts
              with the page or advertisement.
            </p>
            <p>
              <strong className='darkColor'>Statistical IDs</strong>
              <br />
              Statistical IDs are used as an alternative to cookies to identify
              an individual browser or device and are used for analytics and
              reporting purposes. Any connection to a distinct device becomes
              obsolete relatively quickly, usually within 30 days.
            </p>
            <p>
              <strong className='darkColor'>Mobile applications</strong>
              <br />
              Mobile operating systems (e.g. iOS and Android) provide
              advertising identifiers for individual mobile devices. These are
              called IDFA (Identifiers for Advertisers) on iOS and GAID (Google
              Advertising ID) on Android and are used to allow for digital
              advertising across mobile applications. Settings are managed by
              your individual mobile device’s iOS.
            </p>
            <p>
              <strong className='darkColor'>Mobile location data</strong>
              <br />
              Your applications may collect and utilize your location
              information to improve your usage experience and provide services.
              You can use your individual mobile application and/or your device
              settings to control the provision of location-based data to the
              apps that you use.
            </p>
            <p>
              Data is retained for a maximum period of 24 months, after which
              time expired logs are deleted or achieved in an encrypted state in
              cold storage.
            </p>
            <p>
              <strong className='darkColor'>
                How to opt out of interest-based advertising
              </strong>
              <br />
              EQ Works is committed to maintaining our high standards and
              commitment to privacy. Users are able to opt out of any tracking
              at any time through opt out procedures as outlined below. Please
              be aware that opting out of interest-based advertising does not
              mean you will no longer see advertising online, simply that the
              advertisements you are served may not be relevant.
            </p>
            <p>
              EQ encourages you to contact us at any time with any questions or
              concerns you may have about our privacy policy. You can email us
              at privacy@eqworks.com.
            </p>
            <p>
              <strong className='darkColor'>Browser opt-out</strong>
              <br />
              You can click here to opt out of interest-based advertising on
              your browser. As mentioned above, this does not mean that you will
              no longer see advertising online, simply that advertisements you
              are served may not be relevant.
            </p>
            <p>
              <strong className='darkColor'>Clearing cookies</strong>
              <br />
              You can clear any stored preferences on your browser by clearing
              your cookies. To do so, visit your browser settings to clear your
              browsing data, and toggle the option to clear cookies and other
              website data.
            </p>
            <p>
              <strong className='darkColor'>
                Opting out on your mobile device
              </strong>
              <br />
              This setting can usually be found in your individual device’s
              privacy settings. Instructions for the updated iOS and Android
              operating systems are provided below.
            </p>
            <p>
              <strong className='darkColor'>Apple iOS 11.2.1</strong>
              <br />
              Visit your Settings, and scroll down to Privacy, Click Privacy and
              navigate to the bottom. Click Advertising and toggle Limit Ad
              Tracking to opt out of receiving ads targeted to your interests.
            </p>
            <p>
              <strong className='darkColor'>Android 7.1.2 Nougat</strong>
              <br />
              Visit your Settings, and click on Google. Scroll down to Ads,
              located just below the Services heading. Toggle Opt out of Ads
              Personalization to instruct applications not to use your
              advertising ID to build profiles or show you personalized ads.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default PrivacyPolicyPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
