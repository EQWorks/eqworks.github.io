import Link from 'next/link'
import styled from 'styled-components'

import * as StyleConstant from '../../utils/style-constants'
import { breakpoint } from '../../utils/style-breakpoints'

import Date from '../shared/parse-date'

const SectionStyled = styled.section`
  padding: 40px;
  width: 100%;
  ${breakpoint.sm`
    max-width: 250px;
    padding: 40px;
  `}
  .excerpt {
    color: ${StyleConstant.color.greyLight};
    margin: 0 0 10px 0;
  }
  .date {
    font-size: 0.8em;
    display: block;
    color: ${StyleConstant.color.greyLight};
    margin: 0 0 10px 0;
  }
  .read-more {
    color: ${StyleConstant.color.black};
    cursor: pointer;
    display: block;
    font-family: copyMedium, sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.25s ease-out;
    &:hover {
      color: ${StyleConstant.color.NavBarLinksListHover};
    }
  }
  .title {
    color: ${StyleConstant.color.black};
    cursor: pointer;
    display: block;
    margin: 0 0 10px 0;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.25s ease-out;
    &:hover {
      color: ${StyleConstant.color.NavBarLinksListHover};
    }
  }
`

const Preview = ({ date, excerpt, slug, title }) => {
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

export default Preview
