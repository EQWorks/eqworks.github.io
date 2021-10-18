import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { StaticImage } from 'gatsby-plugin-image'
import PartnersLogos from '../partnersLogos/partnersLogos'

const BusinessContent = ({ dataClick, marketerClick }) => {
  return (
    <>
      <Container className='container'>
        <Row className='pageRow'>
          <Col>
            <p className='centered'>
              Executives need information and tools at their disposal in order
              to stay one step ahead of the competition. With consumers on the
              move, faster than ever before, EQ Works looked to the future and
              developed the next generation toolset allowing executives to
              analyze and action upon data fast, giving them the confidence they
              need to make the most strategic decisions.
            </p>
          </Col>
        </Row>
      </Container>

      <section className='sectionGreyRoundedTop pageRow'>
        <Container className='container'>
          <Row className=''>
            <Col>
              <h2>Let Us Do The Heavy Lifting</h2>
            </Col>

            <Col lg={12}>
              <p className='centered'>
                Data and AI are disrupting the marketplace, and you need your
                teams to have access to the best information. EQ’s tool set is
                that missing piece your company needs in order to stay ahead of
                the competition. Give your teams the power to view real-time
                information on customers and businesses, leveraging geospatial
                data, and help them with a full competitive analysis so that
                they can develop strategies to positively impact your results.
                Let EQ do the heavy lifting, so your company (or Marketing and
                Data teams) can thrive.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='linkRow'>
                <div>
                  <button
                    className='uppercase primaryColor centered flexContainer alignCenter'
                    style={{ border: `0`, backgroundColor: `transparent` }}
                    onClick={dataClick}
                  >
                    <u className='bold'>
                      Insights &amp; Analytics All In One Place &#187;
                    </u>
                  </button>
                </div>

                <div>
                  <button
                    className='uppercase primaryColor centered flexContainer alignCenter'
                    style={{ border: `0`, backgroundColor: `transparent` }}
                    onClick={marketerClick}
                  >
                    <u className='bold'>Data Enrichment via Marketing &#187;</u>
                  </button>
                </div>
              </div>
            </Col>
          </Row>

          <Row style={{ marginTop: `5rem` }}>
            <Col>
              <div className='imageRow' style={{ width: `100%` }}>
                <div>
                  <StaticImage
                    src='../../images/womanWithPhoneCard.png'
                    alt=''
                    layout='fullWidth'
                  />
                </div>

                <div className=''>
                  <div
                    className='flexContainer column'
                    style={{
                      width: `90%`,
                      maxWidth: `40rem`,
                      margin: `0 auto`
                    }}
                  >
                    <h2 className='left' style={{ marginTop: `0` }}>
                      Advantages
                    </h2>
                    <ul className='checkList column'>
                      <li>
                        Highly customizable to any size, shape or vertical of
                        business
                      </li>
                      <li>
                        Highly customizable to discover any type of insight or
                        validate strategy{' '}
                      </li>
                      <li>Insights available when and where you need them</li>
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

export default BusinessContent
