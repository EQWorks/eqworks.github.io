import dynamic from 'next/dynamic'
import styled from 'styled-components'

import { getEntryById } from '../api/contentful'

const Hero = dynamic(() => import('../components/shared/hero'))
const Content = dynamic(() => import('../components/privacy-policy/content'))

const StyleNoContent = styled.div`
  margin: 20px auto;
  max-width: ${({ theme }) => theme.width.article};
  h2 {
    font-size: 2em;
  }
`

export default function PrivacyPolicy({ privacyPolicy }) {
  return (
    <>
      <Hero
        imgSrc='/images/privacy-policy/fallback/hero.jpg'
        title='EQ Works Privacy'
      />
      {!privacyPolicy && (
        <StyleNoContent>
          <h2>Error loading Privacy Policy, please try again.</h2>
        </StyleNoContent>
      )}
      {privacyPolicy && <Content privacyPolicy={privacyPolicy.fields} />}
    </>
  )
}

// This also gets called at build time
export async function getStaticProps() {
  const privacyPolicy = await getEntryById('1qQczsvP6curvMDVXZGY0r')

  // Pass post data to the page via props
  if (privacyPolicy.fields) {
    return { props: { privacyPolicy } }
  } else {
    return { props: { privacyPolicy: false } }
  }
}
