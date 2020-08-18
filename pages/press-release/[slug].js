import ErrorPage from 'next/error'
import Link from 'next/link'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components'

import { getAllEntries, getEntry } from '../../utils/contentful-api'
import * as StyleConstant from '../../utils/style-constants'
import Date from '../../components/shared/parse-date'

import Carousel from '../../components/press-release/carousel'
import PDF from '../../components/press-release/pdf'

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

export default function PressRelease({ pressRelease }) {
  const dtrOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        if (node.data.target.fields.file.contentType.includes('image')) {
          return <img
            src={node.data.target.fields.file.url}
            alt={node.data.target.fields.title}
          />
        } else if (node.data.target.fields.file.contentType.includes('pdf')) {
          return <PDF url={node.data.target.fields.file.url} />
        }
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        if (node.data.target.fields.hasOwnProperty('carousel')) {
          return <Carousel slides={node.data.target.fields.carousel} />
        }
      }
    }
  }

  if (!pressRelease) {
    return <></>
  }

  if (!pressRelease.author) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <PageStyled>
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
        <div className='content'>
          {documentToReactComponents(pressRelease.content, dtrOptions)}
        </div>
      </Article>
    </PageStyled>
  )
}

export async function getStaticProps({ params }) {
  const pressRelease = await getEntry('pressRelease', params.slug)

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
