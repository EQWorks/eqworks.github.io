import react, { useEffect, useState } from 'react'
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

export default function PrivacyPolicy() {
  const [financialReports, setFinancialReports] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setFinancialReports(await getEntryById('7Buylp0Gj1cnfGKiglmwoM'))
    }
    fetchData()
  }, [])

  if (!financialReports) {
    return (
      <>
        <Hero
          imgSrc='/images/financial-reports/fallback/hero.jpg'
          title='EQ Works Privacy'
        />
        <StyleNoContent>
          <h2>Loading content...</h2>
        </StyleNoContent>
      </>
    )
  }

  if (financialReports === 'error') {
    return (
      <>
        <Hero
          imgSrc='/images/financial-reports/fallback/hero.jpg'
          title='EQ Works Privacy'
        />
        <StyleNoContent>
          <h2>Error loading Financial Reports, please try again.</h2>
        </StyleNoContent>
      </>
    )
  }

  return (
    <>
      <Hero
        imgSrc='/images/financial-reports/fallback/hero.jpg'
        title={financialReports.title}
      />
      <Content financialReports={financialReports.fields} />
    </>
  )
}
