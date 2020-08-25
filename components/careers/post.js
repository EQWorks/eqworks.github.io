import styled from 'styled-components'

const SectionStyled = styled.section`
  color: ${({ theme }) => theme.color.black};
  @media ${({ theme }) => theme.breakpoint.sm} {
    /* display: none; */
  }
`

export default function Post() {
  return (
    <SectionStyled>
      <p>Hello there</p>
    </SectionStyled>
  )
}

export default Post
