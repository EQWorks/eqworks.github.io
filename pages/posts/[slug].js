import { useRouter } from 'next/router'
import Post from '../../components/post'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

export default function PostPage({ post, morePosts, preview }) {
  console.log(post)
  if (!post) {
    return <h1>Loading...</h1>
  }
  return (
    <article>
      <h1>{post.title}</h1>
      <h2>{post.excerpt}</h2>
      <h3>
        {post.author.name} | {post.date}
      </h3>
      <img src={post.ogImage.url} />
      <Post content={post.content} />
    </article>
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
