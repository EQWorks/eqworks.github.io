import dynamic from 'next/dynamic'
import styled from 'styled-components'

import { getEntryById } from '../api/contentful'

const Hero = dynamic(() => import('../components/shared/hero'))
const Content = dynamic(() => import('../components/financial-reports/content'))

const StyleNoContent = styled.div`
  margin: 20px auto;
  max-width: ${({ theme }) => theme.width.article};
  h2 {
    font-size: 2em;
  }
`

export default function PrivacyPolicy({ financialReports }) {
  return (
    <>
      <Hero
        imgSrc='/images/financial-reports/fallback/hero.jpg'
        title={financialReports.title}
      />
      {!financialReports && (
        <StyleNoContent>
          <h2>Error loading Financial Reports, please try again.</h2>
        </StyleNoContent>
      )}
      {financialReports && <Content financialReports={financialReports} />}
    </>
  )
}

// This also gets called at build time
export async function getStaticProps() {
  const financialReports = await getEntryById('7Buylp0Gj1cnfGKiglmwoM')

  // Pass post data to the page via props
  if (financialReports.fields) {
    return { props: { financialReports: financialReports.fields } }
  } else {
    return { props: { financialReports: false } }
  }
}
