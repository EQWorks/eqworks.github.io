import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import SolutionHdr from '../../components/headers/solutionsHeader01'
import CaseStudyGrid from '../../components/caseStudyGrid/caseStudyGrid'
import LogoLoop from '../../components/logoLoop/logoLoop'
import Billboard from '../../svgs/noun_Billboard_4206432.svg'

const SRealEstatePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Solutions | Real Estate' />

      <SolutionHdr
        header={
          <>
            <span className='small'>Solutions by Industry</span> OOH Data
            Revolution
          </>
        }
        headerClass='data'
        icon={<Billboard />}
      />

      <Container className='container'>
        <Row className='pageRow'>
          <Col>
            <p className='centered'>
              LOCUS allows you to get in depth exposure metrics of your static
              and digital inventory and allows you to connect thousands of data
              sets for indexing reports at the individual face level. These data
              are invaluable in adding depth for your buyers which in turn leads
              to more confidence and more revenue. LOCUS also creates
              attribution reports that track exposure to store visitation and
              online app download. LOCUS OOH attribution reports are crucial in
              closing the loop with your campaigns and helping drive the
              measurable impact of your media. Use ATOM to create real time or
              historical audiences from those exposed to your faces and
              target/retarget people in real time across the digital ecosystem,
              adding additional brand reinforcement and value from your assets.
            </p>
          </Col>
        </Row>

        <Row align='stretch' className='pageRow'>
          <Col className='paddedCol' md={4} sm={12} >
            <div
              className='flexContainer column justifyBetween alignCenter'
              style={{ minHeight: `100%` }}
            >
              <StaticImage
                alt=''
                src='../../images/mockups/AOIMapMockup.png'
                layout='fullWidth'
              />
              <p className='centered' style={{ flexGrow: `1` }}>
                <strong
                  className='darkColor'
                  style={{ display: `block`, marginBottom: `.5rem` }}
                  
                >
                  AOI Report
                </strong>
                <span className='fontSm'>
                  Analyze thousands of data sets to understand home locations at
                  different resolutions of your desired audience, to help in
                  campaign and asset planning strategies.
                </span>
              </p>
              <Link
                aria-label="Learn more about dashboards"
                className='uppercase primaryColor bold'
                to='/platforms/locus/dashboards/'
              >
                Learn More &#187;
              </Link>
            </div>
          </Col>

          <Col md={4} sm={12} className='paddedCol'>
            <div
              className='flexContainer column justifyBetween alignCenter'
              style={{ minHeight: `100%` }}
            >
              <StaticImage
                alt=''
                layout='fullWidth'
                src='../../images/mockups/AtomiMacMockups.png'
              />
              <p className='centered' style={{ flexGrow: `1` }}>
                <strong
                  className='darkColor'
                  style={{ display: `block`, marginBottom: `.5rem` }}
                >
                  Atom
                </strong>
                <span className='fontSm'>
                  Connect with exposed out of home audiences in near real time
                  and get the metrics and insights you need to execute effective
                  re-targeting campaigns/programs.
                </span>
              </p>
              <Link
                aria-label="Learn more about Atom"
                className='uppercase primaryColor bold'
                to='/platforms/atom/'
              >
                Learn More &#187;
              </Link>
            </div>
          </Col>

          <Col md={4} sm={12} className='paddedCol'>
            <div
              className='flexContainer column justifyBetween alignCenter'
              style={{ minHeight: `100%` }}
            >
              <StaticImage
                alt=''
                layout='fullWidth'
                src='../../images/mockups/IndexJobMockup.png'
              />
              <p className='centered' style={{ flexGrow: `1` }}>
                <strong
                  className='darkColor'
                  style={{ display: `block`, marginBottom: `.5rem` }}
                >
                  Index Job
                </strong>
                <span className='fontSm'>
                  Get unparalleled insights at face level of any audience or
                  data set and how it interacts with your inventory. Take your
                  traditional and digital OOH to the next level.
                </span>
              </p>
              <Link
                aria-label="Learn more about DAG Builder"
                className='uppercase primaryColor bold'
                to='/platforms/locus/dag-builder/'
              >
                Learn More &#187;
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <section className='sectionGreyRoundedTop'>
        <Container className='container'>
          <Row>
            <Col>
              <h2>Customer Value</h2>

              <ul className='checkListVertical'>
                <li>
                  <span className='check'>Unparalleled Depth</span>
                  <span>
                    LOCUS enables you to cross reference thousands of data
                    points against your inventory and map it to specific points
                    in time down to the hour of day and day of week. Deeper
                    insights lead to higher close rates and retention of your
                    advertisers.
                  </span>
                </li>

                <li>
                  <span className='check'>Attribution</span>
                  <span>
                    Proving lift and incrementality is a need to have, not a
                    nice to have. LOCUS puts the power of vast quantities of
                    mobile location data and complex workflows that enable store
                    visit or app download insights at the face level.
                  </span>
                </li>

                <li>
                  <span className='check'>Mobile Reinforcement</span>
                  <span>
                    ATOM enables you to engage with your exposed user pools in
                    real time, or use play log audience builds to interact with
                    users exposed at specific ad rotations from your digital
                    inventory. Open up new revenue streams and have complete
                    control over the digital media serving in house.
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>

        <section className='linkBanner pageRow'>
          <Link aria-label="Book a demo" to='/about/book-a-demo/'>Learn More &#187;</Link>
        </section>
      </section>

      <Container className='container'>
        <Row className='pageRow'>
          <Col>
            <CaseStudyGrid />
          </Col>
        </Row>
        <Row className='pageRow'>
          <Col>
            <LogoLoop />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default SRealEstatePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
