import Link from 'next/link'
import styled from 'styled-components'

const SectionStyled = styled.section`
  box-sizing: border-box;
  cursor: pointer;
  margin: 20px;
  max-width: 375px;
  text-align: center;
  width: 100%;
  @media ${({ theme }) => theme.breakpoint.xs} {
  }
  a {
    color: ${({ theme }) => theme.color.black};
    text-decoration: none;
    transition: color 0.25s ease-out;
    &:hover {
      color: ${({ theme }) => theme.color.navBarLinksListHover};
    }
  }
`

const ImageStyled = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  background-image: url('${(props) => props.featuredImage.file.url}');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 350px;
  margin: 0 auto 20px auto;
  transition: all 0.25s ease-out;
  width: 100%;
  .overlay {
    background-color: ${({ theme }) => theme.color.black};
    height: 100%;
    opacity: 0;
    transition: all 0.25s ease-out;
    width: 100%;
    &:hover {
      opacity: 0.5;
    }
  }
`

export default function Preview({ featuredImage, slug, title }) {
  // <img alt={featuredImage.title} src={featuredImage.file.url} />
  return (
    <SectionStyled>
      <Link as={`/case-study/${slug}`} href='/case-study/[slug]'>
        <a>
          <ImageStyled featuredImage={featuredImage}>
            <div class='overlay' />
          </ImageStyled>
          <p>{title}</p>
        </a>
      </Link>
    </SectionStyled>
  )
}
