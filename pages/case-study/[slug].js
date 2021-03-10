import ErrorPage from 'next/error'
import Head from 'next/head'
import styled from 'styled-components'

import { getEntries, getEntryBySlug } from '../../api/contentful'

import EntryContent from '../../components/shared/entry-content'

const PageStyled = styled.section`
  .hero {
    align-items: center;
    background-color: ${({ theme }) => theme.color.greyDark};
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${(props) => props.imgSrc});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    color: ${({ theme }) => theme.color.white};
    display: flex;
    min-height: 500px;
    @media ${({ theme }) => theme.breakpoint.sm} {
      min-height: 700px;
    }
    .hero--content {
      box-sizing: border-box;
      margin: 0 auto;
      max-width: ${({ theme }) => theme.width.article};
      padding: ${({ theme }) => theme.spacing[2]}px;
      text-align: center;
      width: 100%;
      @media ${({ theme }) => theme.breakpoint.sm} {
        text-align: left;
      }
      h1 {
        margin: 0 auto;
        max-width: 600px;
        text-transform: uppercase;
        @media ${({ theme }) => theme.breakpoint.sm} {
          margin: 0;
          max-width: 800px;
        }
      }
      p {
        font-style: italic;
        font-size: 1em;
        @media ${({ theme }) => theme.breakpoint.sm} {
          font-size: 1.25em;
        }
      }
      .hero--content--divider {
        background-color: ${({ theme }) => theme.color.white};
        height: 5px;
        margin: ${({ theme }) => theme.spacing[2]}px auto;
        width: 100px;
        @media ${({ theme }) => theme.breakpoint.sm} {
          margin: ${({ theme }) => theme.spacing[2]}px 0;
        }
      }
    }
  }
  .highlights {
    background-color: ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.white};
    .highlights--content {
      align-items: flex-start;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0 auto;
      max-width: ${({ theme }) => theme.width.page};
      padding: ${({ theme }) => theme.spacing[3]}px
        ${({ theme }) => theme.spacing[2]}px;
      p {
        box-sizing: border-box;
        max-width: 400px;
        padding: ${({ theme }) => theme.spacing[3]}px 0;
        text-align: center;
        width: 100%;
        @media ${({ theme }) => theme.breakpoint.xs} {
          width: 80%;
        }
        @media ${({ theme }) => theme.breakpoint.sm} {
          width: 60%;
        }
        @media ${({ theme }) => theme.breakpoint.md} {
          max-width: 1000px;
          padding: ${({ theme }) => theme.spacing[3]}px;
          width: 40%;
        }
        @media ${({ theme }) => theme.breakpoint.lg} {
          width: 33%;
        }
      }
    }
  }
  .content {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.width.article};
    padding: ${({ theme }) => theme.spacing[8]}px
      ${({ theme }) => theme.spacing[2]}px;
    width: 100%;
    h2 {
      font-size: 1.5em;
      font-weight: ${({ theme }) => theme.font.bold};
      margin: 0 0 ${({ theme }) => theme.spacing[1]}px 0;
    }
  }
`

export default function PressRelease({ caseStudy }) {
  if (!caseStudy) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <PageStyled imgSrc={caseStudy.featuredImage.fields.file.url}>
      <Head>
        <title>{caseStudy.title} | EQ Works</title>
      </Head>
      <div className='hero'>
        <div className='hero--content'>
          <p>
            Case Study:{' '}
            {caseStudy.categories.map((category, index) => {
              return <span key={index}>{category.fields.title}</span>
            })}
          </p>
          <div className='hero--content--divider' />
          <h1>{caseStudy.title}</h1>
        </div>
      </div>
      <div className='highlights'>
        <div className='highlights--content'>
          {caseStudy.highlights.map((highlight, index) => {
            return <p key={index}>{highlight}</p>
          })}
        </div>
      </div>
      <div className='content'>
        <EntryContent content={caseStudy.content} />
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
