import react, { useEffect, useState } from 'react'
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

export default function PrivacyPolicy() {
  const [privacyPolicy, setPrivacyPolicy] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setPrivacyPolicy(await getEntryById('1qQczsvP6curvMDVXZGY0r'))
    }
    fetchData()
  }, [])

  if (privacyPolicy === 'error') {
    return (
      <>
        <Hero
          imgSrc='/images/privacy-policy/fallback/hero.jpg'
          title='EQ Works Privacy'
        />
        <StyleNoContent>
          <h2>Error loading Privacy Policy, please try again.</h2>
        </StyleNoContent>
      </>
    )
  }

  return (
    <>
      <Hero
        imgSrc='/images/privacy-policy/fallback/hero.jpg'
        title='EQ Works Privacy'
      />
      {!privacyPolicy && (
        <StyleNoContent>
          <h2>Loading content...</h2>
        </StyleNoContent>
      )}
      {privacyPolicy === 'error' && (
        <StyleNoContent>
          <h2>Error loading Privacy Policy, please try again.</h2>
        </StyleNoContent>
      )}
      {privacyPolicy && privacyPolicy !== 'error' && (
        <Content privacyPolicy={privacyPolicy.fields} />
      )}
    </>
  )
}
