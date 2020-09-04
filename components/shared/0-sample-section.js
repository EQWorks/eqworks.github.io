import styled from 'styled-components'

const SectionStyled = styled.section`
  color: ${({ theme }) => theme.color.black};
  font-size: ${(props) => (props.largeFont ? '2em' : '1em')};
  @media ${({ theme }) => theme.breakpoint.sm} {
    /* display: none; */
  }
`

export default function Section() {
  return (
    <SectionStyled>
      <p>Hello there</p>
    </SectionStyled>
  )
}
