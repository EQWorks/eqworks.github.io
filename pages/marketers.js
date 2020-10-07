import react, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'

import { getEntries } from '../api/contentful'

const Hero = dynamic(() => import('../components/shared/hero'))
const Understand = dynamic(() => import('../components/marketers/understand'))
const ServiceResults = dynamic(() =>
  import('../components/marketers/service-results')
)
const SimplifyYour = dynamic(() => import('../components/shared/simplify-your'))
const RecentStudies = dynamic(() =>
  import('../components/marketers/recent-studies')
)

const StyleNoContent = styled.div`
  margin: 20px auto;
  max-width: ${({ theme }) => theme.width.article};
  h2 {
    font-size: 2em;
  }
`

export default function Marketers() {
  const [caseStudies, setCaseStudies] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setCaseStudies(await getEntries('caseStudy', false, false, 3))
    }
    fetchData()
  }, [])

  return (
    <>
      <Hero
        imgSrc='/images/marketers/fallback/hero.jpg'
        title='Marketers looking for results partner with EQ.'
      />
      <Understand />
      <ServiceResults />
      <SimplifyYour title='tech stack' />
      {!caseStudies && (
        <StyleNoContent>
          <h2>Loading content...</h2>
        </StyleNoContent>
      )}
      {caseStudies === 'error' && (
        <StyleNoContent>
          <h2>Error loading Case Studies, please try again.</h2>
        </StyleNoContent>
      )}
      {(caseStudies && caseStudies !== 'error') && <RecentStudies caseStudies={caseStudies.items} />}
    </>
  )
}
