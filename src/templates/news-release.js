import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Layout from '../components/layout'
import Seo from '../components/seo'

export const query = graphql`
  query ($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      id
      author {
        name
        updatedAt
      }
      createdAt(formatString: "D MMMM YYYY")
      title
      excerpt {
        id
        childMarkdownRemark {
          rawMarkdownBody
        }
      }

      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            fixed(width: 1600) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`

const Bold = ({ children }) => <span className='bold'>{children}</span>
const Text = ({ children }) => <p>{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,

    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },

    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      if (node.data.target.fixed.src) {
        return <img alt='' src={node.data.target.fixed.src} />
      }
    }
  }
}

const NewsRelease = ({ data }) => {
  const { content } = data.contentfulPost

  return (
    <Layout>
      <Seo title={data.contentfulPost.title} />

      <header className='sectionGreyRoundedSolid'>
        <Container className='container'>
          <Row>
            <Col>
              <h1 className='left newsHdr'>
                <span className='hdrIntroBlack'>News Release</span>
                {data.contentfulPost.title}
              </h1>

              <div className='flexContainer'>
                <span>{data.contentfulPost.author.name}</span>
                <span>{data.contentfulPost.createdAt}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      <main className='postContent'>
        <Container className='container'>
          <Row>
            <Col>
              {content && renderRichText(data.contentfulPost.content, options)}
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  )
}

export default NewsRelease
