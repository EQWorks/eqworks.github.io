import ErrorPage from 'next/error'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import { getAllEntries, getEntryBySlug } from '../../api/contentful'

import Date from '../../components/shared/parse-date'
import ArticleContent from '../../components/shared/article-content'

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

const TempPageTopPadding = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  height: 100px;
`

const Article = styled.div`
  color: ${({ theme }) => theme.color.greyLight};
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
    font-family: ${({ theme }) => theme.font.copy.name}, sans-serif;
    font-weight: ${({ theme }) => theme.font.copy.light};
    font-size: 1.5em;
    line-height: 1.25em;
    margin: 0 0 20px 0;
    text-align: center;
  }
`

export default function PressRelease({ pressRelease }) {
  if (!pressRelease) {
    return <></>
  }

  if (!pressRelease.author) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <PageStyled>
      <Head>
        <title>{pressRelease.title} | EQ Works</title>
      </Head>
      <TempPageTopPadding />
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
        <ArticleContent content={pressRelease.content} />
      </Article>
    </PageStyled>
  )
}

export async function getStaticProps({ params }) {
  const pressRelease = await getEntryBySlug('pressRelease', params.slug)

  return {
    props: {
      pressRelease
    }
  }
}

export async function getStaticPaths() {
  const allPressReleases = await getAllEntries('pressRelease')

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
