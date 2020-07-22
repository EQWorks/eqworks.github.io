import styled from 'styled-components'

import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

const ArticleStyled = styled.article`
  /* margin: 94px 0 0 0; */
`

export default function PostPage({ post }) {
  if (!post) {
    return <h1>Loading...</h1>
  }
  return (
    <ArticleStyled>
      <h1>{post.title}</h1>
      <h2>{post.excerpt}</h2>
      <h3>
        {post.author.name} | {post.date}
      </h3>
      <img src={post.ogImage.url} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </ArticleStyled>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'excerpt',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
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
