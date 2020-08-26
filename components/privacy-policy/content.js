import styled from 'styled-components'

import ArticleContent from '../shared/article-content'
import Date from '../shared/parse-date'

const SectionStyled = styled.section`
  color: ${({ theme }) => theme.color.greyLight};
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width.article};
  padding: 40px 20px 40px 20px;
  h1 {
    color: ${({ theme }) => theme.color.black};
    font-size: 2em;
    margin: 0 0 20px 0;
  }
  h2 {
    color: ${({ theme }) => theme.color.black};
    font-size: 1.75em;
    margin: 0 0 20px 0;
  }
  h3 {
    color: ${({ theme }) => theme.color.black};
    font-size: 1.5em;
    margin: 0 0 20px 0;
  }
  .date {
    margin: 0 0 20px 0;
  }
`

export default function Content({ privacyPolicy }) {
  return (
    <SectionStyled>
      <p className='date'>
        Last updated on <Date dateString={privacyPolicy.lastUpdated} />
      </p>
      <h1>{privacyPolicy.title}</h1>
      <ArticleContent content={privacyPolicy.content} />
    </SectionStyled>
  )
}
