import dynamic from 'next/dynamic'
import styled from 'styled-components'

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

const StyleNoContent = styled.div`
  margin: 20px auto;
  max-width: ${({ theme }) => theme.width.article};
  h2 {
    font-size: 2em;
  }
`

export default function Investors({ pressReleases }) {
  return (
    <>
      <Hero
        imgSrc='/images/investors/fallback/hero.jpg'
        title={`We don't looks to what's coming next - we're already there.`}
      />
      <InvestingFuture />
      <FinancialInfo />
      {!pressReleases && (
        <StyleNoContent>
          <h2>Error loading Press Releases, please try again.</h2>
        </StyleNoContent>
      )}
      {pressReleases && <RecentReleases pressReleases={pressReleases} />}
      <OurClientsNoSSR />
    </>
  )
}

// This also gets called at build time
export async function getStaticProps() {
  const pressReleases = await getEntries('post', '4cuZTcGorM9T6djiI3JQ8l', true, 3)

  // Pass post data to the page via props
  if (pressReleases.items.length !== 0) {
    return { props: { pressReleases: pressReleases.items } }
  } else {
    return { props: { pressReleases: false } }
  }
}
