import ErrorPage from 'next/error'
import Link from 'next/link'
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components'

import * as StyleConstant from '../../utils/style-constants'
import { breakpoint } from '../../utils/style-breakpoints'
import Date from '../../components/shared/parse-date'

const PageStyled = styled.section`
  .press-releases-link {
    color: ${StyleConstant.color.black};
    cursor: pointer;
    display: block;
    font-size: 0.9em;
    margin: 40px auto;
    text-align: center;
    text-decoration: none;
    transition: color 0.25s ease-out;
    &:hover {
      color: ${StyleConstant.color.NavBarLinksListHover};
    }
  }
`

const TempPageTopPadding = styled.div`
  background-color: ${StyleConstant.color.black};
  height: 100px;
  ${breakpoint.sm`
    /* display: none; */
  `}
  ${breakpoint.md`
    /* display: none; */
  `}
`

const Article = styled.div`
  color: ${StyleConstant.color.greyLight};
  margin: 0 auto;
  max-width: ${StyleConstant.width.article};
  padding: 0 20px 40px 20px;
  h1 {
    color: ${StyleConstant.color.black};
    font-size: 2em;
    margin: 0 0 30px 0;
    text-align: center;
  }
  .author-date {
    color: ${StyleConstant.color.black};
    font-size: 0.9em;
    margin: 0 0 30px 0;
    text-align: center;
  }
  .content {
    a {
      color: ${StyleConstant.color.black};
      text-decoration: none;
      transition: color 0.25s ease-out;
      &:hover {
        color: ${StyleConstant.color.NavBarLinksListHover};
      }
    }
    p {
      margin: 0 0 20px 0;
    }
    ul {
      margin: 0 0 20px 0;
      li {
        margin: 0 0 10px 0;
        &:last-child {
          margin: 0 0 0 0;
        }
        p {
          margin: 0;
        }
      }
    }
  }
  .excerpt {
    font-family: copyLight, sans-serif;
    font-size: 1.5em;
    line-height: 1.25em;
    margin: 0 0 20px 0;
    text-align: center;
  }
`

const PressRelease = ({ pressRelease }) => {
  if (!pressRelease) {
    return <></>
  }

  if (pressRelease.items.length !== 1) {
    return <ErrorPage statusCode={404} />
  }

  console.log(pressRelease)

  return (
    <PageStyled>
      <TempPageTopPadding />
      <Link href='/press-releases'>
        <a className='press-releases-link'>Press Releases</a>
      </Link>
      <Article>
        <h1>{pressRelease.items[0].fields.title}</h1>
        <p className='excerpt'>{pressRelease.items[0].fields.excerpt}</p>
        <p className='author-date'>
          {pressRelease.items[0].fields.author.fields.name} /{' '}
          <Date
            className='date'
            dateString={pressRelease.items[0].fields.date}
          />
        </p>
        <div className='content'>
          {documentToReactComponents(pressRelease.items[0].fields.content)}
        </div>
      </Article>
    </PageStyled>
  )
}

export default PressRelease

// Contentful API: https://www.contentful.com/developers/docs/references/content-delivery-api/
export async function getStaticProps({ params }) {
  const pressRelease = await createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  }).getEntries({
    content_type: 'pressRelease',
    'fields.slug[in]': params.slug,
    limit: 1
  })
  return {
    props: {
      pressRelease
    }
  }
}

export async function getStaticPaths() {
  const allPressReleases = await createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  }).getEntries({
    content_type: 'pressRelease'
  })

  const slugArray = []
  allPressReleases.items.map((item) => {
    slugArray.push({
      params: {
        slug: item.fields.slug
      }
    })
  })
  return {
    paths: slugArray,
    fallback: true
  }
}
