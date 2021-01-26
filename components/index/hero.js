import styled from 'styled-components'

const SectionStyled = styled.section`
  background-color: ${({ theme }) => theme.color.black};
  padding: 0;
  .hero__content {
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    height: calc(100vh - ${({ theme }) => theme.height.navBar});
    justify-content: center;
    padding: 0 20px;
    position: relative;
    width: 100%;
    text-align: center;
    z-index: ${({ theme }) => theme.zIndex.pageContent};
    @media ${({ theme }) => theme.breakpoint.sm} {
      height: 100vh;
    }
    div {
      display: none;
      @media ${({ theme }) => theme.breakpoint.md} {
        align-items: center;
        border: 1px solid ${({ theme }) => theme.color.white};
        border-radius: 100%;
        cursor: pointer;
        display: flex;
        height: 60px;
        justify-content: center;
        margin: 40px 0 0 0;
        width: 60px;
      }
    }
    h1 {
      font-size: 3em;
      max-width: 800px;
      @media ${({ theme }) => theme.breakpoint.sm} {
        font-size: 4em;
      }
    }
    p {
      font-family: ${({ theme }) => theme.font.name}, sans-serif;
      font-weight: ${({ theme }) => theme.font.regular};
      font-size: 2em;
      margin: 20px 0 0 0;
    }
  }
  .hero__video {
    bottom: 0;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    right: 0%;
    z-index: ${({ theme }) => theme.zIndex.indexHeroVideo};
  }
  #scrollToLocation {
    bottom: calc(${({ theme }) => theme.height.navBarScrolled} / 2);
    opacity: 0;
    position: absolute;
  }
`

export default function Hero() {
  const scrollToElement = () => {
    document.getElementById('scrollToLocation').scrollIntoView()
  }

  return (
    <SectionStyled>
      <div aria-label='stock video of foot traffic' className='hero__content'>
        <h1>Powerful Results from Where People&nbsp;Go</h1>
        <p>Connect with and understand your&nbsp;audience.</p>
        <div
          aria-label='select this button to navigate to next section'
          onClick={scrollToElement}
          role='button'
        >
          ↓
        </div>
      </div>
      <video autoPlay className='hero__video' muted loop>
        <source src='/video/background-people-walking.mp4' type='video/mp4' />
      </video>
      <div id='scrollToLocation' />
    </SectionStyled>
  )
}
