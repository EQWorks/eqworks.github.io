import { createClient } from 'contentful'
import styled from 'styled-components'

import * as StyleConstant from '../utils/style-constants'
import { breakpoint } from '../utils/style-breakpoints'
import Preview from '../components/press-releases/preview'

const SectionStyled = styled.section`
  background-color: ${StyleConstant.color.black};
  height: 100px;
  ${breakpoint.sm`
    /* display: none; */
  `}
  ${breakpoint.md`
    /* display: none; */
  `}
`

const ItemsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const PressReleases = ({ pressReleases }) => {
  return (
    <>
      <SectionStyled />
      <ItemsStyled>
        {pressReleases.items.map((item, index) => {
          const props = {
            date: item.fields.date,
            excerpt: item.fields.excerpt,
            slug: item.fields.slug,
            title: item.fields.title
          }
          return <Preview key={index} {...props} />
        })}
      </ItemsStyled>
    </>
  )
}

export default PressReleases

// Contentful API: https://www.contentful.com/developers/docs/references/content-delivery-api/
export async function getStaticProps() {
  const pressReleases = await createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  }).getEntries({
    content_type: 'pressRelease',
    limit: 3,
    order: '-fields.date'
  })
  return {
    props: {
      pressReleases
    }
  }
}
