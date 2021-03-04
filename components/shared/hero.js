import styled from 'styled-components'

const SectionStyled = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme.color.black};
  background-image: linear-gradient(${(props) => props.overlayValue}),
    url(${(props) => props.imgSrc});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  height: 400px;
  justify-content: center;
  padding: 0 20px;
  @media ${({ theme }) => theme.breakpoint.sm} {
    height: ${(props) => (props.fullHeight ? '100vh' : '400px')};
  }
  h1 {
    font-size: 2em;
    text-align: center;
    @media ${({ theme }) => theme.breakpoint.sm} {
      font-size: ${(props) => (props.fullHeight ? '4em' : '2.5em')};
      max-width: ${(props) => (props.fullHeight ? '800px' : '700px')};
    }
  }
`

export default function Hero({ fullHeight, imgSrc, noOverlay, title }) {
  const overlayValue = (noOverlay) ? 'rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)' : 'rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)'

  return (
    <SectionStyled
      fullHeight={fullHeight}
      overlayValue={overlayValue}
      imgSrc={imgSrc}
    >
      {title && <h1>{title}</h1>}
    </SectionStyled>
  )
}
