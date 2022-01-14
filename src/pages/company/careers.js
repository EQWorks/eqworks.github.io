import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import SolutionHdr from '../../components/headers/solutionsHeader01'
import CareersForm from '../../components/forms/careersForm'
import JobsList from '../../components/jobsLIst/jobsList'

const CareersPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [jobsArr, setJobsArr] = useState([])
  useEffect(() => {
    fetch(
      `https://apply.workable.com/api/v1/widget/accounts/eqworks?details=true`
    )
      .then((response) => response.json())
      .then((resultData) => {
        setJobsArr(resultData.jobs)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        setError(true)
      })
  }, [])

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Careers' />

      <SolutionHdr header='Careers'>
        <p>
          Interested in learning more about EQ Works, or growing your career
          with us? We are always keen to meet fresh and engaged talent. Check
          out our current postings, or simply reach out so we can discuss future
          opportunities. Come join our team!
        </p>
      </SolutionHdr>

      <Container className='container pageRow'>
        <Row>
          <Col>
            <h2>Open Positions</h2>
            {loading && <p className='footnote centered'>Loading jobs...</p>}
            {!loading && !error && <JobsList jobsArr={jobsArr} />}
            {error && (
              <p className='footnote centered'>
                An error has occurred - please try accessing our job listings at
                a later date.
              </p>
            )}
          </Col>
        </Row>
      </Container>

      <section className='sectionGreyRoundedTop'>
        <CareersForm />
      </section>
    </Layout>
  )
}

export default CareersPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
