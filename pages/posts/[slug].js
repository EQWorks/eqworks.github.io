import styled from 'styled-components'

import { getPostBySlug, getAllPosts } from '../../utils/posts-api'
import markdownToHtml from '../../utils/markdown-to-html'
import * as StyleConstant from '../../utils/style-constants'

const ArticleStyled = styled.article`
  margin: 0 auto;
  max-width: ${StyleConstant.width.article};
  padding: 20px;
  hr {
    border: 1px solid ${StyleConstant.color.greyLight};
    margin: 20px 0;
    max-width: ${StyleConstant.width.article};
  }
`

const HeroStyled = styled.div`
  text-align: center;
  h1 {
    font-size: 36px;
    margin: 0 auto 20px auto;
    max-width: 700px;
  }
  h2 {
    color: ${StyleConstant.color.greyLight};
    font-family: titleLight, sans-serif;
    font-size: 20px;
    margin: 0 auto 30px auto;
    max-width: 700px;
  }
  p {
    font-family: titleLight, sans-serif;
    margin: 0 0 30px 0;
  }
`

const ContentStyled = styled.div`
  img {
    height: auto;
  }
  p,
  ul {
    margin: 0 auto 20px auto;
  }
  strong {
    font-family: copyMedium, sans-serif;
  }
`

export default function PostPage({ post }) {
  if (!post) {
    return <h1>Loading...</h1>
  }
  return (
    <ArticleStyled>
      <HeroStyled>
        <p>{post.category}</p>
        <h1>{post.title}</h1>
        <h2>{post.excerpt}</h2>
        <p>
          {post.author} / {post.date}
        </p>
      </HeroStyled>
      <ContentStyled dangerouslySetInnerHTML={{ __html: post.content }} />
    </ArticleStyled>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'slug',
    'title',
    'excerpt',
    'date',
    'author',
    'category',
    'content'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
