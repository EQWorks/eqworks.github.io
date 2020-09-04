import dynamic from 'next/dynamic'

import { getEntryById } from '../api/contentful'

const Hero = dynamic(() => import('../components/shared/hero'))
const Content = dynamic(() => import('../components/financial-reports/content'))

export default function PrivacyPolicy({ financialReports }) {
  return (
    <>
      <Hero
        imgSrc='/images/financial-reports/fallback/hero.jpg'
        title={financialReports.title}
      />
      <Content financialReports={financialReports} />
    </>
  )
}

export async function getStaticProps() {
  const financialReports = await getEntryById('7Buylp0Gj1cnfGKiglmwoM')

  return {
    props: {
      financialReports
    }
  }
}
