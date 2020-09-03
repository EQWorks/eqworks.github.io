import dynamic from 'next/dynamic'

import { getEntries } from '../api/contentful'

const Hero = dynamic(() => import('../components/shared/hero'))
const InvestingFuture = dynamic(() =>
  import('../components/investors/investing-future')
)
const FinancialInfo = dynamic(() =>
  import('../components/investors/financial-info')
)
// ssr rendering of react-slick results in an error when using response breakpoints.
const OurClientsNoSSR = dynamic(import('../components/shared/our-clients'), {
  ssr: false
})
const RecentReleases = dynamic(() =>
  import('../components/investors/recent-releases')
)

export default function Investors({ pressReleases }) {
  return (
    <>
      <Hero
        imgSrc='/images/investors/fallback/hero.jpg'
        title={`We don't looks to what's coming next - we're already there.`}
      />
      <InvestingFuture />
      <FinancialInfo />
      <RecentReleases pressReleases={pressReleases} />
      <OurClientsNoSSR />
    </>
  )
}

export async function getStaticProps() {
  const pressReleases = await getEntries('post', '4cuZTcGorM9T6djiI3JQ8l', 3)

  return {
    props: {
      pressReleases
    }
  }
}
