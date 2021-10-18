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
                src='../../images/mockups/NotebookScreengrab.png'
                alt=''
                layout='fullWidth'
              />
              <div className={componentStyles.text}>
                <h3>LOCUS Notebook</h3>
                <p>
                  EQ Works Notebook product enables Data Scientists and Analysts
                  to explore, analyze and visualize first-party data alongside
                  EQ’s movement datasets and the extended EQ data marketplace.
                </p>
                <Link to='/platforms/environments/locus-notebook/'>
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
                src='../../images/mockups/QueryLabScreengrab.png'
                alt=''
                layout='fullWidth'
              />
              <div className={componentStyles.text}>
                <h3>LOCUS QL</h3>
                <p>
                  LOCUS Query Lab (QL) is a no-code SQL-driven data engine that
                  enables people of all skill levels to explore, analyze and
                  visualize customer first-party data.
                </p>
                <Link to='/platforms/environments/locus-ql/'>
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
                  to='/platforms/locus/connection-hub/'
                  className='uppercase primaryColor bold'
                >
                  Explore Connection Hub &#187;
                </Link>
                <div className='imageCluster'>
                  <StaticImage
                    src='../../images/MicrosoftAzureLogo.png'
                    alt='Microsoft Azure Logo'
                  />
                  <StaticImage src='../../images/AWSLogo.png' alt='AWS Logo' />
                  <StaticImage
                    src='../../images/StripeLogo.png'
                    alt='Stripe Logo'
                  />
                  <StaticImage
                    src='../../images/GoogleCloudLogo.png'
                    alt='Google Cloud Logo'
                  />
                  <StaticImage
                    src='../../images/ShopifyLogo.png'
                    alt='Shopify Logo'
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
                  to='/platforms/locus/dag-builder/'
                  className='uppercase primaryColor bold'
                >
                  Explore DAG Builder &#187;
                </Link>

                <div className='tabImg'>
                  <StaticImage
                    src='../../images/mockups/DAGbuilderScreengrab.png'
                    alt=''
                    layout='fullWidth'
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
                  to='/platforms/locus/marketplace/'
                  className='uppercase primaryColor bold'
                >
                  Explore Marketplace &#187;
                </Link>
                <div className='imageCluster'>
                  <StaticImage
                    src='../../images/Emerge-black.png'
                    alt='Emerge Logo'
                  />
                  <StaticImage
                    src='../../images/paymi_logo_RGB.png'
                    alt='Paymi Logo'
                  />
                  <StaticImage
                    src='../../images/MastercardLogo.png'
                    alt='Mastercard Logo'
                  />
                  <StaticImage src='../../images/TMGLogo.png' alt='TMG Logo' />
                  <StaticImage
                    src='../../images/OptaLogo.png'
                    alt='Opta Logo'
                  />
                  <StaticImage
                    src='../../images/StatsCanadaLogo.png'
                    alt='Stats Can Logo'
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
                  to='/platforms/locus/dashboards/'
                  className='uppercase primaryColor bold'
                >
                  Explore Dashboards &#187;
                </Link>
                <div className='tabImg'>
                  <StaticImage
                    src='../../images/mockups/Dashboards (ISOChrone).png'
                    alt=''
                    layout='fullWidth'
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
              <Link to='/solutions/customer-analytics/'>
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
              <Link to='/solutions/competitive-analysis/'>
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
              <Link to='/solutions/customer-acquisition/'>
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
