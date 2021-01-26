import ErrorPage from 'next/error'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import { getEntries, getEntryBySlug } from '../../api/contentful'

import Date from '../../components/shared/parse-date'
import EntryContent from '../../components/shared/entry-content'
import ReadingTime from '../../components/shared/reading-time'

const PageStyled = styled.section`
  .press-releases-link {
    color: ${({ theme }) => theme.color.black};
    cursor: pointer;
    display: block;
    font-size: 0.9em;
    margin: 40px auto;
    text-align: center;
    text-decoration: none;
    transition: color 0.25s ease-out;
    &:hover {
      color: ${({ theme }) => theme.color.navBarLinksListHover};
    }
  }
`

const Article = styled.div`
  color: ${({ theme }) => theme.color.greyMedium};
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width.article};
  padding: 0 20px 40px 20px;
  h1 {
    color: ${({ theme }) => theme.color.black};
    font-size: 2em;
    margin: 0 0 30px 0;
    text-align: center;
  }
  .author-date {
    color: ${({ theme }) => theme.color.black};
    font-size: 0.9em;
    margin: 0 0 30px 0;
    text-align: center;
  }
  .content {
    a {
      color: ${({ theme }) => theme.color.black};
      text-decoration: none;
      transition: color 0.25s ease-out;
      &:hover {
        color: ${({ theme }) => theme.color.navBarLinksListHover};
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
    font-family: ${({ theme }) => theme.font.name}, sans-serif;
    font-weight: ${({ theme }) => theme.font.light};
    font-size: 1.5em;
    line-height: 1.25em;
    margin: 0 0 20px 0;
    text-align: center;
  }
`

const StyleNoContent = styled.div`
  margin: 20px auto;
  max-width: ${({ theme }) => theme.width.article};
  h2 {
    font-size: 2em;
  }
`

export default function PressRelease({ pressRelease }) {
  if (!pressRelease) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <PageStyled>
      <Head>
        <title>{pressRelease.title} | EQ Works</title>
      </Head>
      <Link href='/press-releases'>
        <a className='press-releases-link'>Press Releases</a>
      </Link>
      <Article>
        <h1>{pressRelease.title}</h1>
        <p className='excerpt'>{pressRelease.excerpt}</p>
        <p className='author-date'>
          {pressRelease.author.fields.name} /{' '}
          <Date className='date' dateString={pressRelease.date} />
        </p>
        <ReadingTime data={pressRelease.content.content} />
        <EntryContent content={pressRelease.content} />
      </Article>
    </PageStyled>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const pressReleases = await getEntries('post', '4cuZTcGorM9T6djiI3JQ8l')

  // Get the paths we want to pre-render based on posts
  const paths = pressReleases.items.map((pressRelease) => ({
    params: { slug: pressRelease.fields.slug }
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `slug`.
  // If the route is like /press-release/1, then params.slug is 1
  const pressRelease = await getEntryBySlug('post', params.slug)

  // Pass post data to the page via props
  if (pressRelease.items.length !== 0) {
    return { props: { pressRelease: pressRelease.items[0].fields } }
  } else {
    return { props: { pressRelease: false } }
  }
}
