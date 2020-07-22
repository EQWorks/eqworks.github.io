import styled from 'styled-components'

import * as GlobalStyles from '../../utils/style-constants'
import { breakpoint } from '../../utils/style-breakpoints'

const SectionStyled = styled.section`
  background-color: ${GlobalStyles.color.black};
  padding: 0;
  .hero__content {
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    color: ${GlobalStyles.color.white};
    display: flex;
    flex-direction: column;
    height: calc(100vh - ${GlobalStyles.height.navBar});
    justify-content: center;
    padding: 0 20px;
    position: relative;
    width: 100%;
    text-align: center;
    z-index: ${GlobalStyles.zIndex.pageContent};
    ${breakpoint.sm`
      height: 100vh;
    `}
    div {
      display: none;
      ${breakpoint.md`
        align-items: center;
        border: 1px solid ${GlobalStyles.color.white};
        border-radius: 100%;
        cursor: pointer;
        display: flex;
        height: 60px;
        justify-content: center;
        margin: 40px 0 0 0;
        width: 60px;
      `}
    }
    h1 {
      font-size: 3em;
      max-width: 800px;
      ${breakpoint.sm`
        font-size: 4em;
      `}
    }
    p {
      font-family: titleRegular, sans-serif;
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
    z-index: ${GlobalStyles.zIndex.indexHeroVideo};
  }
  #scrollToLocation {
    bottom: calc(${GlobalStyles.height.navBarScrolled} / 2);
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
      <div className='hero__content'>
        <h1>Powerful Results from Where People&nbsp;Go</h1>
        <p>Connect with and understand your&nbsp;audience.</p>
        <div onClick={scrollToElement}>↓</div>
      </div>
      <video autoPlay className='hero__video' muted loop>
        <source src='/video/background-people-walking.mp4' type='video/mp4' />
      </video>
      <div id='scrollToLocation' />
    </SectionStyled>
  )
}
