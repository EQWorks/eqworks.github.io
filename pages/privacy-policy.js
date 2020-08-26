import dynamic from 'next/dynamic'

import { getEntryById } from '../api/contentful'

const Hero = dynamic(() => import('../components/shared/hero'))
const Content = dynamic(() => import('../components/privacy-policy/content'))

export default function PrivacyPolicy({ privacyPolicy }) {
  return (
    <>
      <Hero
        imgSrc='/images/privacy-policy/fallback/hero.jpg'
        title='EQ Works Privacy'
      />
      <Content privacyPolicy={privacyPolicy} />
    </>
  )
}

export async function getStaticProps() {
  const privacyPolicy = await getEntryById('1qQczsvP6curvMDVXZGY0r')

  return {
    props: {
      privacyPolicy
    }
  }
}
