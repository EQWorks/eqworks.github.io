import * as React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../../components/layout'
import Seo from '../../../components/seo'
import SolutionHdr from '../../../components/headers/solutionsHeader01'
import PillTabs from '../../../components/pillTabs/pillTabs'
import WorkerImg from '../../../svgs/Illustrations/workingLaptop.svg'
import CSslideshow from '../../../components/creativeStudioSlideshow/creativeStudioSlideshow'

const PCreativeStudioPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Platforms | Environments | Locus QL' />

      <SolutionHdr
        header={
          <>
            <span className='hdrIntroBlack'>EQ Works Proprietary DMP</span>{' '}
            Creative Studio
          </>
        }
        headerClass='creative'
      >
        <p>
          Our award-winning studio produces bespoke custom ads that create
          positive moments and build brand loyalty. A Canadian-based team that’s
          here to help cut through marketing noise and drive results through
          innovation.
        </p>
      </SolutionHdr>

      <Container className='container'>
        <Row className='pageRow'>
          <Col md={6} sm={12}>
            <h2 className='left' style={{ marginTop: `0` }}>
              Advantages
            </h2>
            <p>
              EQ strives for top notch customer success through active
              listening, thoughtful organization and detailed strategy building.
            </p>
          </Col>
          <Col md={6} sm={12}>
            <ul className='checkList column circled regSize'>
              <li>
                The ability to go beyond standard offering with custom creative
              </li>
              <li>
                Ingests &amp; collects data through data feeds &amp; tracking
              </li>
              <li>Flexible work style help at any stage of creative process</li>
              <li>Offer bespoke &amp; new to market innovative ad creations</li>
              <li>Always abide by iab standards &amp; guidelines</li>
              <li>Mobile experover 8 years of ts with experience</li>
              <li>
                Creative consultants applying best practices &amp; learnings
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <section className='sectionGreyBackground pageRow'>
        <Container className='container'>
          <Row className=''>
            <Col md={6} sm={12}>
              <h2 className='left'>Working With Our Team</h2>
              <PillTabs tabArr={['Step 1', 'Step 2', 'Step 3']}>
                <div>
                  <p>
                    When starting the creative process, EQ Studio gathers as
                    much information on a campaign to set the stage. Our team
                    keeps campaign goals in mind when providing recommendations
                    for high impact capabilities and formats, and even tailoring
                    functionalities to fit best with that campaign.
                  </p>
                </div>
                <div>
                  <p>
                    A creative strategy or concept is developed with the client,
                    keeping in mind existing assets, budgets and timelines.
                    Throughout the creative production process our team often
                    acts as consultants to provide best practice recommendations
                    when it comes to building rich media ads.
                  </p>
                </div>
                <div>
                  <p>
                    Finally, execution. Creative is built and tracking is
                    layered onto any interactive element of an execution. We
                    want to ensure best performance on all campaigns!
                  </p>
                </div>
              </PillTabs>
            </Col>

            <Col md={6} sm={12}>
              <WorkerImg style={{ width: `100%` }} />
            </Col>
          </Row>
        </Container>
      </section>

      <Container className='container pageRow'>
        <Row>
          <Col>
            <blockquote>
              “It has been an absolute pleasure working with EQ Works and their
              Creative Studio. Their creative team is attentive, responsive,
              detail oriented and have made creative generation hassle-free. I
              have confidence and trust in their team and would recommend EQ
              Studio to anyone who is looking for innovative creative to amplify
              their brand’s mobile advertising campaigns.”
              <span className='citation'>
                – Senior Digital Media Specialist
              </span>
            </blockquote>
          </Col>
        </Row>
      </Container>

      <section className='sectionBlueRoundedTop'>
        <Container>
          <Row>
            <Col>
              <h2>Creative Studio Innovation</h2>
              <p className='centered'>
                Here are some unique creative samples from trusted brands we’ve
                worked with
              </p>

              <CSslideshow
                slideshowArr={[
                  'Automotive',
                  'Retail & Fashion',
                  'QSR',
                  'Entertainment',
                  'Finance',
                  'CPG'
                ]}
              >
                <StaticImage
                  alt=''
                  src='../../../images/mockups/Gallary Mockups-06.png'
                  layout='fullWidth'
                  placeholder='blurred'
                />
                <StaticImage
                  alt=''
                  src='../../../images/mockups/Gallary Mockups-01.png'
                  layout='fullWidth'
                  placeholder='blurred'
                />
                <StaticImage
                  alt=''
                  src='../../../images/mockups/Gallary Mockups-05.png'
                  layout='fullWidth'
                  placeholder='blurred'
                />
                <StaticImage
                  alt=''
                  src='../../../images/mockups/Gallary Mockups-03.png'
                  layout='fullWidth'
                  placeholder='blurred'
                />
                <StaticImage
                  alt=''
                  src='../../../images/mockups/Gallary Mockups-02.png'
                  layout='fullWidth'
                  placeholder='blurred'
                />
                <StaticImage
                  alt=''
                  src='../../../images/mockups/Gallary Mockups-04.png'
                  layout='fullWidth'
                  placeholder='blurred'
                />
              </CSslideshow>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default PCreativeStudioPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
