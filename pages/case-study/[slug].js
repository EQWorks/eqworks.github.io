import ErrorPage from 'next/error'
import Head from 'next/head'
import styled from 'styled-components'

import { getEntries, getEntryBySlug } from '../../api/contentful'

import EntryContent from '../../components/shared/entry-content'

const PageStyled = styled.section`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width.page};
  padding: 20px 0;
  .header {
    margin: 0 auto 20px auto;
    max-width: ${({ theme }) => theme.width.article};
    padding: 0 20px;
    h1 {
      font-size: 1.5em;
      margin: 0 0 20px;
      text-align: left;
      @media ${({ theme }) => theme.breakpoint.sm} {
        font-size: 2em;
      }
      @media ${({ theme }) => theme.breakpoint.md} {
        font-size: 2.5em;
      }
    }
    .category {
      color: ${({ theme }) => theme.color.greyLight};
      font-size: 1em;
      @media ${({ theme }) => theme.breakpoint.sm} {
        font-size: 1.5em;
      }
    }
  }
  .image {
    display: flex;
    flex-direction: column;
    @media ${({ theme }) => theme.breakpoint.md} {
      box-sizing: border-box;
      flex-direction: row;
      margin: 0 0 20px 0;
      width: 100%;
    }
    .left {
      display: flex;
      flex-direction: column;
      @media ${({ theme }) => theme.breakpoint.md} {
        box-sizing: border-box;
        width: 66%;
      }
      .content {
        color: ${({ theme }) => theme.color.greyLight};
        margin: 0 auto;
        max-width: ${({ theme }) => theme.width.article};
        padding: 20px;
        h2,
        h3,
        h4,
        h5 {
          color: ${({ theme }) => theme.color.black};
          margin: 0 0 20px 0;
        }
      }
    }
    .right {
      width: 100%;
      @media ${({ theme }) => theme.breakpoint.md} {
        background-color: ${({ theme }) => theme.color.white};
        box-sizing: border-box;
        display: block;
        height: 100%;
        position: sticky;
        position: -webkit-sticky;
        top: ${({ theme }) => theme.height.navBarScrolled};
        width: 33%;
      }
    }
  }
`

const HighlightsStyled = styled.div`
  padding: 20px 20px 30px 20px;
  @media ${({ theme }) => theme.breakpoint.md} {
    font-size: 1.5em;
    margin: 0;
    padding: 0 20px;
  }
  p {
    color: ${({ theme }) => theme.color.black};
    font-weight: ${({ theme }) => theme.font.copy.bold};
  }
  ul li {
    color: ${({ theme }) => theme.color.greyLight};
  }
`

const ImageStyled = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  background-image: url('${(props) => props.imageUrl}');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 350px;
  @media ${({ theme }) => theme.breakpoint.md} {
    height: 500px;
  }
`

export default function PressRelease({ caseStudy }) {
  if (!caseStudy) {
    return <></>
  }

  if (!caseStudy.title) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <PageStyled>
      <Head>
        <title>{caseStudy.title} | EQ Works</title>
      </Head>
      <div className='header'>
        <h1>{caseStudy.title}</h1>
        <p className='category'>
          Case Study:{' '}
          {caseStudy.categories.map((category, index) => {
            return <span key={index}>{category.fields.title}</span>
          })}
        </p>
      </div>
      <div className='image'>
        <div className='left'>
          <ImageStyled imageUrl={caseStudy.featuredImage.fields.file.url} />
          <div className='content'>
            <EntryContent content={caseStudy.content} />
          </div>
        </div>
        <div className='right'>
          <HighlightsStyled>
            <p>Highlights</p>
            <ul>
              {caseStudy.highlights.map((highlight, index) => {
                return <li key={index}>{highlight}</li>
              })}
            </ul>
          </HighlightsStyled>
        </div>
      </div>
    </PageStyled>
  )
}

export async function getStaticProps({ params }) {
  const caseStudy = await getEntryBySlug('caseStudy', params.slug)

  return {
    props: {
      caseStudy
    }
  }
}

export async function getStaticPaths() {
  const allPressReleases = await getEntries('caseStudy')

  const slugArray = []
  allPressReleases.map((item) => {
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