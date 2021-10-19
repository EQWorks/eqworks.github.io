import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'
import { StaticImage } from 'gatsby-plugin-image'
import * as componentStyles from './dataContent.module.scss'

import SquareTabs from '../squareTabs/squareTabs'
import PartnersLogos from '../partnersLogos/partnersLogos'

import Avatar from '../../svgs/noun_userprofile_3192198.svg'
import Graph1 from '../../svgs/noun_Data_2921740.svg'
import Graph2 from '../../svgs/noun_Graph_2281161.svg'

const DataContent = () => {
  return (
    <>
      <Container className='container'>
        <Row>
          <Col>
            <p className='centered'>
              Coming from a team of data geeks, EQ builds tools that empower and
              delight our own in-house data scientists and analysts. With our
              focus on geospatial data, we’ve crafted a toolset that comes
              together seamlessly to power your data workflows from ingestion,
              transformation all the way to modelling.
            </p>
          </Col>
        </Row>

        <Row className='pageRow' align='stretch'>
          <Col md={12} lg={12}>
            <h2 className='marginBottom'>Our Products</h2>
          </Col>

          <Col md={6}>
            <div className={componentStyles.tile}>
              <StaticImage
                alt=''
                layout='fullWidth'
                src='../../images/mockups/NotebookScreengrab.png' 
              />
              <div className={componentStyles.text}>
                <h3>LOCUS Notebook</h3>
                <p>
                  EQ Works Notebook product enables Data Scientists and Analysts
                  to explore, analyze and visualize first-party data alongside
                  EQ’s movement datasets and the extended EQ data marketplace.
                </p>
                <Link aria-label="Learn more about LOCUS notebook" to='/platforms/environments/locus-notebook/'>
                  <strong className='uppercase primaryColor'>
                    Learn More &#187;
                  </strong>
                </Link>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className={componentStyles.tile}>
              <StaticImage
                alt=''
                layout='fullWidth'
                src='../../images/mockups/QueryLabScreengrab.png'
              />
              <div className={componentStyles.text}>
                <h3>LOCUS QL</h3>
                <p>
                  LOCUS Query Lab (QL) is a no-code SQL-driven data engine that
                  enables people of all skill levels to explore, analyze and
                  visualize customer first-party data.
                </p>
                <Link aria-label="Learn more about LOCUS QL" to='/platforms/environments/locus-ql/'>
                  <strong className='uppercase primaryColor'>
                    Learn More &#187;
                  </strong>
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <Row className='pageRow'>
          <Col>
            <h2 className='marginBottom'>Our Capabilities</h2>
            <SquareTabs
              tabArr={[
                'Connection Hub',
                'DAG Builder',
                'Marketplace',
                'Dashboards'
              ]}
            >
              <div>
                <p className='centered'>
                  Connect other data sources or your data lake to LOCUS with
                  seamless integration with tools such as LOCUS Notebook and
                  LOCUS QL. Connection Hub has integrated data lineage,
                  governance and transformation capabilities built-in.
                </p>
                <Link
                  className='uppercase primaryColor bold'
                  to='/platforms/locus/connection-hub/'
                >
                  Explore Connection Hub &#187;
                </Link>
                <div className='imageCluster'>
                  <StaticImage
                    alt='Microsoft Azure Logo'
                    src='../../images/MicrosoftAzureLogo.png'
                  />
                  <StaticImage 
                    alt='AWS Logo' 
                    src='../../images/AWSLogo.png'
                  />
                  <StaticImage
                    alt='Stripe Logo'
                    src='../../images/StripeLogo.png' 
                  />
                  <StaticImage
                    alt='Google Cloud Logo'
                    src='../../images/GoogleCloudLogo.png'
                  />
                  <StaticImage
                    alt='Shopify Logo'
                    src='../../images/ShopifyLogo.png'
                  />
                  <p
                    className='flexContainer justifyCenter smFont fontSm greyColor'
                    style={{ fontWeight: `600`, minWidth: `100%` }}
                  >
                    &amp; More
                  </p>
                </div>
              </div>

              <div>
                <p className='centered'>
                  EQ builds its own directed acyclical graph processor on top of
                  the popular Apache Airflow framework. The DAG Builder has been
                  engineered to crunch (and munch) your geospatial workflows
                  with over twenty (20) built-in helper stages.
                </p>
                <Link
                  className='uppercase primaryColor bold'
                  to='/platforms/locus/dag-builder/'
                >
                  Explore DAG Builder &#187;
                </Link>

                <div className='tabImg'>
                  <StaticImage
                    alt=''
                    layout='fullWidth'
                    src='../../images/mockups/DAGbuilderScreengrab.png'
                  />
                </div>
              </div>

              <div>
                <p className='centered'>
                  Locus Marketplace is one of Canada’s largest repositories of
                  data and is used to assist companies with better consumer
                  analytics, data monetization, data validation, and customer
                  acquisition.
                </p>
                <Link
                  className='uppercase primaryColor bold'
                  to='/platforms/locus/marketplace/'
                >
                  Explore Marketplace &#187;
                </Link>
                <div className='imageCluster'>
                  <StaticImage
                    alt='Emerge Logo'
                    src='../../images/Emerge-black.png' 
                  />
                  <StaticImage
                    alt='Paymi Logo'
                    src='../../images/paymi_logo_RGB.png'
                  />
                  <StaticImage
                    alt='Mastercard Logo'
                    src='../../images/MastercardLogo.png'
                  />
                  <StaticImage src='../../images/TMGLogo.png' alt='TMG Logo' />
                  <StaticImage
                    alt='Opta Logo'
                    src='../../images/OptaLogo.png'
                  />
                  <StaticImage
                    alt='Stats Can Logo'
                    src='../../images/StatsCanadaLogo.png'
                  />
                  <p
                    className='flexContainer justifyCenter smFont fontSm greyColor'
                    style={{ fontWeight: `600`, minWidth: `100%` }}
                  >
                    &amp; More
                  </p>
                </div>
              </div>

              <div>
                <p className='centered'>
                  LOCUS dashboards and maps enable you to visualize the insights
                  in an easy to use and powerful way. Combine data sets, create
                  custom views and drill down to individual location-level
                  insights, all in one place.
                </p>
                <Link
                  className='uppercase primaryColor bold'
                  to='/platforms/locus/dashboards/'
                >
                  Explore Dashboards &#187;
                </Link>
                <div className='tabImg'>
                  <StaticImage
                    alt=''
                    layout='fullWidth'
                    src='../../images/mockups/Dashboards (ISOChrone).png'
                  />
                </div>
              </div>
            </SquareTabs>
          </Col>
        </Row>

        <Row className='pageRow'>
          <Col md={12} lg={12}>
            <h2 className='marginBottom'>Use Cases</h2>
          </Col>
          <Col md={4}>
            <div
              className={`${componentStyles.colorTile} ${componentStyles.blue}`}
            >
              <Graph1 style={{ fill: `white`, width: `5rem` }} />
              <h3 className='bold'>
                Customer <br />
                Analytics
              </h3>
              <Link aria-label="Learn more about customer analytics" to='/solutions/customer-analytics/'>
                <strong>Learn More &#187;</strong>
              </Link>
            </div>
          </Col>

          <Col md={4}>
            <div
              className={`${componentStyles.colorTile} ${componentStyles.orange}`}
            >
              <Graph2 style={{ fill: `white`, width: `3.75rem` }} />
              <h3 className='bold'>
                Competitive Analysis/
                <br />
                Market Analysis
              </h3>
              <Link aria-label="Learn more about competitive analysis and market analysis" to='/solutions/competitive-analysis/'>
                <strong>Learn More &#187;</strong>
              </Link>
            </div>
          </Col>

          <Col md={4}>
            <div
              className={`${componentStyles.colorTile} ${componentStyles.pink}`}
            >
              <Avatar style={{ fill: `white`, width: `5rem` }} />
              <h3 className='bold'>
                Customer <br />
                Acquisition
              </h3>
              <Link aria-label="Learn more about customer acquisition" to='/solutions/customer-acquisition/'>
                <strong>Learn More &#187;</strong>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <PartnersLogos />
    </>
  )
}

export default DataContent
