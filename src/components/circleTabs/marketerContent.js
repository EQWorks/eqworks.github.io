import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'
import { StaticImage } from 'gatsby-plugin-image'
import PartnersLogos from '../partnersLogos/partnersLogos'

const MarketerContent = () => {
  return (
    <>
      <Container className='container'>
        <Row className='pageRow'>
          <Col>
            <p className='centered'>
              Marketers today have more data than ever before, but harnessing
              the power of all that is available is an extremely ambitious task.
              That is why at EQ we have developed a product suite with Data
              Driven Marketers in mind, developing proprietary products that
              enables marketers to onboard 1st party data, combine 3rd party
              data, gather insights or activate media in order to understand,
              predict and influence consumer behaviour.
            </p>
          </Col>
        </Row>
      </Container>

      <section className='sectionGreyRoundedTop pageRow'>
        <Container className='container'>
          <Row className=''>
            <Col>
              <h2>Using Data To Your Advantage</h2>
            </Col>
          </Row>

          <Row align='center' className='pageRow'>
            <Col sm={12} md={6}>
              <h3 className='left'>Household Graph</h3>
              <p>
                Our household graph ties all the datapoints we know about a
                household into an anonymized profile. This allows for marketers
                to onboard their own data, and gather insights, activate media
                spend across granular profiles, and or measure campaign
                effectiveness all in a privacy first manner.
              </p>
              <Link
                aria-label="Learn more about Atom - household graph"
                className='uppercase bold primaryColor'
                to='/platforms/atom/'
              >
                Learn More &#187;
              </Link>
            </Col>
            <Col sm={12} md={6} className='imageCol'>
              <StaticImage
                alt=''
                layout='fullWidth'
                src='../../images/mockups/AtomiMacMockups.png'
              />
            </Col>
          </Row>

          <Row align='center' className='pageRow mobileFlexReverse'>
            <Col sm={12} md={6} className='imageCol'>
              <StaticImage
                alt=''
                layout='fullWidth'
                src='../../images/mockups/DashboardsMockup.png'
              />
            </Col>
            <Col sm={12} md={6}>
              <h3 className='left'>GeoSpatial Cohorts</h3>
              <p>
                GeoSpatial cohorts are audience propensity maps, created by
                combining EQ Data with other geospatial data from sources such
                as Mastercard, Emerge Brands, TMG Analytics and the census, to
                identify highly saturated targeted areas for media execution.
                These cohorts or audience profiles, allow marketers to identify
                their audience without in a privacy forward and scalable manner
                that will remain persistent as identifiers like cookies, ADID
                and IDFA’s get phased out of the advertising ecosystem.
              </p>
              <Link
                aria-label="Learn more about Atom - geospatial cohorts"
                className='uppercase bold primaryColor'
                to='/platforms/atom/' 
              >
                Learn More &#187;
              </Link>
            </Col>
          </Row>

          <Row align='center' className='pageRow'>
            <Col sm={12} md={6}>
              <h3 className='left'>AtomNext</h3>
              <p>
                AtomNext is a next generation, geospatial designed demand side
                platform that enables marketers to reach their target audience
                with identity free and highly scalable digital placements. By
                re-orientating our bidders around geography, instead of singular
                identifiers, it enables marketers to activate media at scale
                from our GeoSpatial cohorts, from any unique first party
                location, or a combination of the two.
              </p>
              <div className='linkRow noWrap start'>
                <div>
                  <Link
                    aria-label="learn more about AtomNext"
                    className='uppercase bold primaryColor'
                    to='/platforms/atom/'
                  >
                    Learn More &#187;
                  </Link>
                </div>
                <div>
                  <Link
                    className='uppercase bold primaryColor'
                    to='/learn/case-studies/geo-spatial-cohorts/'
                  >
                    Case Study &#187;
                  </Link>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} className='imageCol'>
              <StaticImage
                alt=''
                layout='fullWidth'
                src='../../images/mockups/Atom Diagram-01.png'
              />
            </Col>
          </Row>

          <Row className='pageRow'>
            <Col>
              <div className='imageRow'>
                <div>
                  <StaticImage
                    alt=''
                    layout='fullWidth'
                    src='../../images/manWithPhone.png'
                  />
                </div>
                <div>
                  <div
                    className='flexContainer column'
                    style={{
                      width: `75%`,
                      maxWidth: `30rem`,
                      margin: `0 auto`
                    }}
                  >
                    <h2 className='left' style={{ marginTop: `0` }}>
                      Advantages
                    </h2>
                    <ul className='checkList'>
                      <li>1st Party Data Cohorts</li>
                      <li>3rd Party Data Cohorts</li>
                      <li>Easy Activation</li>
                      <li>Privacy Forward</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <PartnersLogos />
    </>
  )
}

export default MarketerContent
