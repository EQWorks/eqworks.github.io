import Link from 'next/link'
import styled from 'styled-components'

import Date from '../shared/parse-date'

const SectionStyled = styled.section`
  padding: 40px;
  width: 100%;
  @media ${({ theme }) => theme.breakpoint.sm} {
    max-width: 250px;
    padding: 40px;
  }
  .excerpt {
    color: ${({ theme }) => theme.color.greyMedium};
    margin: 0 0 10px 0;
  }
  .date {
    font-size: 0.8em;
    display: block;
    color: ${({ theme }) => theme.color.greyMedium};
    margin: 0 0 10px 0;
  }
  .read-more {
    color: ${({ theme }) => theme.color.black};
    cursor: pointer;
    display: block;
    font-family: ${({ theme }) => theme.font.copy.name}, sans-serif;
    font-weight: ${({ theme }) => theme.font.copy.medium};
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

export default function Preview({ date, excerpt, slug, title }) {
  return (
    <SectionStyled>
      <Date className='date' dateString={date} />
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
