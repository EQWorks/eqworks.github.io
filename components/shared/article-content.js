import dynamic from 'next/dynamic'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components'

const Carousel = dynamic(() => import('../press-release/carousel'))
const Image = dynamic(() => import('../press-release/image'))
const ImageExternal = dynamic(() => import('../press-release/image-external'))
const PDF = dynamic(() => import('../press-release/pdf'))
const YouTubeVideo = dynamic(() => import('../press-release/youtube-video'))

const ContentStyled = styled.div`
  a {
    color: ${({ theme }) => theme.color.black};
    text-decoration: none;
    transition: color 0.25s ease-out;
    &:hover {
      color: ${({ theme }) => theme.color.navBarLinksListHover};
    }
  }
  hr {
    border: 0.001em solid ${({ theme }) => theme.color.greyLight};
    margin: 0 0 20px 0;
    opacity: 0.33;
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
`

export default function ArticleContent({ content }) {
  const dtrOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        if (node.data.target.fields.file.contentType.includes('image')) {
          return <Image data={node.data.target.fields} />
        } else if (node.data.target.fields.file.contentType.includes('pdf')) {
          return (
            <PDF
              id={node.data.target.sys.id}
              url={node.data.target.fields.file.url}
            />
          )
        }
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        if (node.data.target.sys.contentType.sys.id === 'externalImage') {
          return <ImageExternal data={node.data.target.fields} />
        } else if (node.data.target.sys.contentType.sys.id === 'carousel') {
          return <Carousel slides={node.data.target.fields.carousel} />
        } else if (node.data.target.sys.contentType.sys.id === 'youTubeVideo') {
          return <YouTubeVideo data={node.data.target.fields} />
        }
      }
    }
  }

  return (
    <ContentStyled>
      {documentToReactComponents(content, dtrOptions)}
    </ContentStyled>
  )
}
