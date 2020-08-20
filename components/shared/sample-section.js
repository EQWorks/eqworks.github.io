import styled from 'styled-components'

const SectionStyled = styled.section`
  color: ${({ theme }) => theme.color.white};
  @media ${({ theme }) => theme.breakpoint.sm} {
    /* display: none; */
  }
`

const Section = () => {
  return (
    <SectionStyled>
      <p>Hello there</p>
    </SectionStyled>
  )
}

export default Section
