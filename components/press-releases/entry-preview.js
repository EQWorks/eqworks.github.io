import Link from 'next/link'
import styled from 'styled-components'

import Date from '../shared/parse-date'

const SectionStyled = styled.section`
  max-width: 600px;
  padding: 40px;
  width: 100%;
  .excerpt {
    color: ${({ theme }) => theme.color.greyMedium};
    margin: 0 0 10px 0;
  }
  .author-date {
    font-size: 0.8em;
    display: block;
    color: ${({ theme }) => theme.color.greyMedium};
    margin: 0 0 10px 0;
    span {
      color: ${({ theme }) => theme.color.black};
      margin: 0 10px 0 0;
    }
  }
  .read-more {
    color: ${({ theme }) => theme.color.black};
    cursor: pointer;
    display: block;
    font-family: ${({ theme }) => theme.font.name}, sans-serif;
    font-weight: ${({ theme }) => theme.font.semiBold};
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.25s ease-out;
    &:hover {
      color: ${({ theme }) => theme.color.navBarLinksListHover};
    }
  }
  .title {
    color: ${({ theme }) => theme.color.black};
    cursor: pointer;
    display: block;
    margin: 0 0 10px 0;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.25s ease-out;
    &:hover {
      color: ${({ theme }) => theme.color.navBarLinksListHover};
    }
  }
`

export default function EntryPreview({ author, date, excerpt, slug, title }) {
  return (
    <SectionStyled>
      <p className='author-date'>
        <span>{author}</span> <Date dateString={date} />
      </p>
      <Link as={`/press-release/${slug}`} href='/press-release/[slug]'>
        <a className='title'>{title}</a>
      </Link>
      <p className='excerpt'>{excerpt.substring(0, 95) + '...'}</p>
      <Link as={`/press-release/${slug}`} href='/press-release/[slug]'>
        <a className='read-more'>Read More</a>
      </Link>
    </SectionStyled>
  )
}
