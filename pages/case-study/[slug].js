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
    max-width: ${({ theme }) => theme.width.page};
    padding: 0 20px;
    @media ${({ theme }) => theme.breakpoint.lg} {
      padding: 0;
    }
    h1 {
      font-size: 1.5em;
      margin: 0 0 20px 0;
      max-width: 800px;
      text-align: left;
      @media ${({ theme }) => theme.breakpoint.sm} {
        font-size: 2em;
      }
      @media ${({ theme }) => theme.breakpoint.md} {
        font-size: 2.5em;
      }
    }
    .category {
      color: ${({ theme }) => theme.color.greyMedium};
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
        color: ${({ theme }) => theme.color.greyMedium};
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
    font-weight: ${({ theme }) => theme.font.bold};
  }
  ul li {
    color: ${({ theme }) => theme.color.greyMedium};
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

const StyleNoContent = styled.div`
  margin: 20px auto;
  max-width: ${({ theme }) => theme.width.article};
  h2 {
    font-size: 2em;
  }
`

export default function PressRelease({ caseStudy }) {
  if (!caseStudy) {
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

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const caseStudies = await getEntries('caseStudy')

  // Get the paths we want to pre-render based on posts
  const paths = caseStudies.items.map((caseStudy) => ({
    params: { slug: caseStudy.fields.slug }
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
  // If the route is like /case-study/1, then params.slug is 1
  const caseStudy = await getEntryBySlug('caseStudy', params.slug)

  // Pass post data to the page via props
  if (caseStudy.items.length !== 0) {
    return { props: { caseStudy: caseStudy.items[0].fields } }
  } else {
    return { props: { caseStudy: false } }
  }
}
