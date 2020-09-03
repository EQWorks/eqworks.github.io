import dynamic from 'next/dynamic'
import styled from 'styled-components'

import { getEntries } from '../../api/contentful'

const Hero = dynamic(() => import('../../components/shared/hero'))
const Preview = dynamic(() => import('../../components/press-releases/preview'))

const ItemsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default function PressReleases({ pressReleases }) {
  return (
    <>
      <Hero
        imgSrc='/images/press-releases/fallback/hero.jpg'
        title='Press Releases'
      />
      <ItemsStyled>
        {pressReleases.map((pressRelease, index) => {
          const props = {
            author: pressRelease.fields.author.fields.name,
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
  const pressReleases = await getEntries('post', '4cuZTcGorM9T6djiI3JQ8l')

  return {
    props: {
      pressReleases
    }
  }
}
