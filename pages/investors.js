import dynamic from 'next/dynamic'

import { getNEntries } from '../api/contentful'

const Hero = dynamic(() => import('../components/investors/hero'))
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
      <Hero />
      <InvestingFuture />
      <FinancialInfo />
      <RecentReleases pressReleases={pressReleases} />
      <OurClientsNoSSR />
    </>
  )
}

export async function getStaticProps() {
  const pressReleases = await getNEntries('pressRelease', 3)

  return {
    props: {
      pressReleases
    }
  }
}
