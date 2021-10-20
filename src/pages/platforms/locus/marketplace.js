import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../../components/layout'
import Seo from '../../../components/seo'
import MarketplaceImg from '../../../svgs/Illustrations/marketplace.svg'
import DataIcon from '../../../svgs/noun_Data_2921740.svg'
import UserIcon from '../../../svgs/noun_userprofile_3192198.svg'
import MoneyIcon from '../../../svgs/noun_Money_3548931.svg'
import LocusLogoWhite from '../../../svgs/locusLogoWhite.svg'

const PMarketplacePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout colorLogos footerLogos location={location} title={siteTitle} >
      <Seo title='Platforms | DAG Builder' />

      <header className='blockheader data'>
        <Container className='container'>
          <Row>
            <Col>
              <div
                className='flexContainer alignCenter justifyCenter'
                style={{ marginTop: `2.5rem` }}
              >
                <LocusLogoWhite />
                <h1 className='noMargin'>Marketplace</h1>
              </div>
              <p className='centered'>
                Locus Marketplace is one of Canada’s largest repositories of
                data and is used to assist companies with <br />
                better consumer analytics, data monetization, data validation,
                and customer acquisition.
              </p>
            </Col>
          </Row>
        </Container>
      </header>

      <Container className='container pageRow'>
        <Row align='center'>
          <Col md={6} sm={12}>
            <h2 className='left'>Advantages</h2>
            <p>
              In addition to EQ’s own proprietary data, we have created
              relationships with dozens of 3rd party data sources and processed
              this data to make it available for a variety of different use
              cases. Whether it’s real estate, insurance, consumer spending,
              demographic or online behaviour, if you want to learn more about
              your customers, discover the optimal location for a new store,
              validate the effectiveness of your media, or build a segment for
              digital activation, Locus Marketplace has you covered.
            </p>
          </Col>
          <Col className='imageCol' md={6} sm={12}>
            <MarketplaceImg style={{ width: `100%` }} />
          </Col>
        </Row>
      </Container>

      <section className='linkBanner dark pageRow'>
        <Link to='/company/book-a-demo/'>
          Book a demo to discover LOCUS &#187;
        </Link>
      </section>

      <Container className='container pageRow'>
        <Row>
          <Col>
            <StaticImage
              alt=''
              src='../../../images/mockups/MarketplaceMockup.png'
            />
          </Col>
        </Row>
      </Container>

      <Container className='container pageRow'>
        <Row className='pageRow lined'>
          <Col>
            <div className='flexContainer column'>
              <div>
                <div
                  className='blueIcon'
                  style={{ marginLeft: `auto`, marginRight: `auto` }}
                >
                  <DataIcon />
                </div>
              </div>
              <h3>Subscribe For Consumer Analytics</h3>
              <p className='centered'>
                Zero party data and 1st party data collected from your customers
                directly, are some of the most powerful assets a company can
                have. The ability to enrich and augment this data, features that
                LOCUS is known for, make data even more powerful and is required
                to bring this asset to the next level. Imagine being able to
                compare the overall spend propensities of your consumers while
                planning a new product launch? Imagine knowing in advance that
                your customers are about to have a significant life event?
                Imagine knowing what else, outside of your business, is
                important to your customers, so that you can customize
                incentives, increase their basketsize, or improve loyalty and
                retention. LOCUS Marketplace allows you to subscribe to 1000’s
                of different data sets, allowing you to enrich, analyze and
                compare data to best position your business, get a better
                understanding of your customers, understand how your investments
                are performing and overall strategically build strong and long
                lasting relationships.
              </p>
            </div>
          </Col>
        </Row>

        <Row className='pageRow lined'>
          <Col>
            <div className='flexContainer column'>
              <div>
                <div
                  className='blueIcon'
                  style={{ marginLeft: `auto`, marginRight: `auto` }}
                >
                  <UserIcon />
                </div>
              </div>
              <h3>Customer Acquisition</h3>
              <p className='centered'>
                Growth is the key to any business and understanding the makeup
                of your customer base is vital to new customer acquisition.
                Having a full profile of your customer base allows for highly
                scalable, look-a-like models and discovery of customers who are
                identical to your “most-valued” but who don’t currently interact
                with your brand. These powerful data sets are made even more
                impactful by actioning them through media platforms like{' '}
                <Link className='underline' to='/platforms/atom/'>
                  ATOM
                </Link>
                , or other major programmatic or social (Facebook) platforms, or
                even outside of digital media entirely. Whether you’re focussed
                on digital campaigns, flyer drops, OOH, or elsewhere, the data
                gained from LOCUS can lower your CPA and raise your ROAS.
              </p>
              <p className='centered'>
                Customer acquisition, however, isn’t always about advertising.
                As a geospatial data company, we truly value the adage of
                “location, location, location”. When analyzing store locations,
                planners are always looking for data to determine which areas
                are ideal. With unprecedented housing prices and a future where
                people can work from anywhere, traditional knowledge of certain
                neighbourhoods, towns or cities may no longer be valid. From the
                data available in LOCUS Marketplace, you can plot out the ideal
                location to open, before your competition.
              </p>
            </div>
          </Col>
        </Row>

        <Row className='pageRow lined'>
          <Col>
            <div className='flexContainer column'>
              <div>
                <div
                  className='blueIcon'
                  style={{ marginLeft: `auto`, marginRight: `auto` }}
                >
                  <MoneyIcon />
                </div>
              </div>
              <h3>Monetize Your Own Data</h3>
              <p className='centered'>
                Data is a valuable asset that can be monetized. LOCUS
                Marketplace helps businesses sell their anonymized data to other
                businesses and forms a new revenue stream for an organization.
                While one would not want to sell their own proprietary CRM
                records, trends and spend propensities that brands have observed
                are not seen as confidential as, and this is your opportunity to
                monetize those learnings.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default PMarketplacePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
