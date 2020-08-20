import styled from 'styled-components'

const SectionStyled = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme.color.black};
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/covid-19/hero.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  height: calc(50vh - ${({ theme }) => theme.height.navBar});
  justify-content: center;
  padding: 0 20px;
  @media ${({ theme }) => theme.breakpoint.sm} {
    height: 100vh;
  }
  h1 {
    font-size: 2em;
    text-align: center;
    @media ${({ theme }) => theme.breakpoint.sm} {
      font-size: 3.5em;
      max-width: 700px;
    }
    @media ${({ theme }) => theme.breakpoint.md} {
      font-size: 4.5em;
    }
  }
`

const Hero = () => {
  return (
    <SectionStyled>
      <h1>
        Contact Tracing:
        <br />
        Moving Towards a New&nbsp;Normal
      </h1>
    </SectionStyled>
  )
}

export default Hero
