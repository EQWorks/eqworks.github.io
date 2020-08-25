import dynamic from 'next/dynamic'
import styled from 'styled-components'

const Preview = dynamic(() => import('./preview'))

const SectionStyled = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  padding: 40px 20px;
  h2 {
    margin: 0 auto 20px auto;
    text-align: center;
  }
`

const ItemsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default function RecentReleases({ pressReleases }) {
  return (
    <SectionStyled>
      <h2>Recent Releases</h2>
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
    </SectionStyled>
  )
}
