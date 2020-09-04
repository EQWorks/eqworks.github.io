import dynamic from 'next/dynamic'
import styled from 'styled-components'

const EntryPreview = dynamic(() => import('./entry-preview'))

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

export default function RecentStudies({ caseStudies }) {
  return (
    <SectionStyled>
      <h2>Case Studies</h2>
      <ItemsStyled>
        {caseStudies.map((caseStudy, index) => {
          const props = {
            featuredImage: caseStudy.fields.featuredImage.fields,
            slug: caseStudy.fields.slug,
            title: caseStudy.fields.title
          }
          return <EntryPreview key={index} {...props} />
        })}
      </ItemsStyled>
    </SectionStyled>
  )
}
