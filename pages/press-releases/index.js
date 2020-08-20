import dynamic from 'next/dynamic'
import styled from 'styled-components'

import { getNEntries } from '../../utils/contentful-api'
import * as StyleConstant from '../../utils/style-constants'

const Preview = dynamic(() => import('../../components/press-releases/preview'))

const SectionStyled = styled.section`
  background-color: ${StyleConstant.color.black};
  height: 100px;
`

const ItemsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default function PressReleases({ pressReleases }) {
  return (
    <>
      <SectionStyled />
      <ItemsStyled>
        {pressReleases.map((pressRelease, index) => {
          const props = {
            date: pressRelease.fields.date,
            excerpt: pressRelease.fields.excerpt,
            slug: pressRelease.fields.slug,
            title: pressRelease.fields.title
          }
          return <Preview key={index} {...props} />
        })}
      </ItemsStyled>
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
