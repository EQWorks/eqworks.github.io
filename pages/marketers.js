import dynamic from 'next/dynamic'

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
      <RecentStudies caseStudies={caseStudies} />
    </>
  )
}

export async function getStaticProps() {
  const caseStudies = await getEntries('caseStudy', false, false, 3)

  return {
    props: {
      caseStudies
    }
  }
}
