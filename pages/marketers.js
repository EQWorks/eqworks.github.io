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

export default function Marketers({ caseStudies }) {
  return (
    <>
      <Hero
        imgSrc='/images/marketers/fallback/hero.jpg'
        title='Marketers looking for results partner with EQ.'
      />
      <Understand />
      <ServiceResults />
      <SimplifyYour title='tech stack' />
      {caseStudies && <RecentStudies caseStudies={caseStudies} />}
    </>
  )
}

// This also gets called at build time
export async function getStaticProps() {
  const caseStudies = await getEntries('caseStudy', false, false, 3)

  // Pass post data to the page via props
  if (caseStudies.total !== 0) {
    return { props: { caseStudies: caseStudies.items } }
  } else {
    return { props: { caseStudies: false } }
  }
}
