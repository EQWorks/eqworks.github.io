import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../../../components/layout'
import Seo from '../../../components/seo'
import SecurityImg from '../../../svgs/Illustrations/security.svg'
import VerticalBoxList from '../../../components/verticalBoxList/verticalBoxList'
import SyncIcon from '../../../svgs/noun_synchronization_677539.svg'
import CodeIcon from '../../../svgs/noun_code_1561709.svg'
import AccesIcon from '../../../svgs/noun_Safety_3248074.svg'
import LocusLogoWhite from '../../../svgs/locusLogoWhite.svg'

const PLocusConnectionHubPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle} footerLogos>
      <Seo title='Platforms | Locus' />

      <header className='blockheader data'>
        <Container className='container'>
          <Row>
            <Col>
              <div
                className='flexContainer alignCenter justifyCenter'
                style={{ marginTop: `2.5rem` }}
              >
                <LocusLogoWhite />
                <h1 className='noMargin'>Connection Hub</h1>
              </div>
              <p className='centered'>
                Connection Hub provides for the most secure, efficient and
                seamless way to connect external data sources or your data lake
                to <br />
                LOCUS unlocking powerful incremental capabilities with tools
                such as{' '}
                <Link
                  className='underline'
                  to='/platforms/environments/locus-notebook/'
                >
                  LOCUS Notebook
                </Link>{' '}
                and{' '}
                <Link
                  className='underline'
                  to='/platforms/environments/locus-ql/'
                >
                  LOCUS QL
                </Link>
                . Connection Hub <br />
                has integrated data lineage, governance and transformation
                capabilities built-in making it a one-stop shop for data
                management
              </p>
            </Col>
          </Row>
        </Container>
      </header>

      <Container className='container pageRow'>
        <Row className='' align='center'>
          <Col md={6} sm={12}>
            <h2 className='left'>Security Features</h2>
            <p>
              Connection Hub comes packed with security features to ensure your
              data in transit and at rest is protected. All datasets are
              sandboxed at a customer level ensuring your data is never
              intermingled with other customers. During upload or schema
              definition, sensitive data can be hashed to obscure any PII or
              trade secrets while retaining the enough efficacy for analytical
              and machine learning use cases within LOCUS. Data at rest can be
              encrypted with a public-private key management system for the
              highest level of security.
            </p>
          </Col>

          <Col md={6} sm={12}>
            <SecurityImg style={{ width: `100%` }} />
          </Col>
        </Row>
      </Container>

      <section
        className='linkBanner dark pageRow'
        style={{ marginBottom: `0` }}
      >
        <Link to='/comapny/book-a-demo/'>
          Book a demo to discover Locus &#187;
        </Link>
      </section>

      <section className='sectionBlueAngleDown'>
        <Container className='container'>
          <Row>
            <Col>
              <h2>Available Connections</h2>
              <ul className='checkList dark regSize pageRow'>
                <div className='flexContainer justifyCenter marginLg irregCols'>
                  <div>
                    <li>Direct Upload</li>
                    <li>AWS S3</li>
                  </div>

                  <div>
                    <li>Azure Storage Blobs</li>
                    <li>Google Cloud Storage</li>
                  </div>

                  <div>
                    <li>Google Sheets</li>
                    <li>Google Analytics</li>
                  </div>

                  <div>
                    <li>Shopify</li>
                    <li>Stripe</li>
                  </div>
                </div>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <div className='pageRow' style={{ marginTop: `0` }}>
        <h2>Benefits</h2>

        <VerticalBoxList horizontal>
          <div>
            <div
              className='blueIcon'
              style={{ margin: `-5rem auto 1rem auto` }}
            >
              <SyncIcon />
            </div>
            <h3>Synchronize Data</h3>
            <p className='centered'>
              Keep your data and schema synchronized throughout its lifecycle
              for downstream workloads
            </p>
          </div>

          <div>
            <div
              className='blueIcon'
              style={{ margin: `-5rem auto 1rem auto` }}
            >
              <CodeIcon />
            </div>
            <h3>No Code</h3>
            <p className='centered'>
              A no-code data management platform for analysis
            </p>
          </div>

          <div>
            <div
              className='blueIcon'
              style={{ margin: `-5rem auto 1rem auto` }}
            >
              <AccesIcon />
            </div>
            <h3>Grant Access To Teams</h3>
            <p className='centered'>
              Using our data governance tools, securely grant access to your
              teams to perform analytical tasks in Notebook and QL
            </p>
          </div>
        </VerticalBoxList>
      </div>
    </Layout>
  )
}

export default PLocusConnectionHubPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
