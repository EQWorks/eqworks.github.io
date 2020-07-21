import styled from 'styled-components'
import * as GlobalStyles from '../utils/style-variables'
import { breakpoint } from '../utils/style-breakpoints'

const StyleHero = styled.div`
  background-color: ${GlobalStyles.colors.black};
  padding: 0;
  .hero__content {
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    color: ${GlobalStyles.colors.white};
    display: flex;
    flex-direction: column;
    height: calc(100vh - 55px);
    justify-content: center;
    padding: 0 20px;
    position: relative;
    width: 100%;
    text-align: center;
    z-index: ${GlobalStyles.zIndexes.pageContent};
    ${breakpoint.sm`
      height: calc(100vh - 94px);
    `}
    div {
      display: none;
      ${breakpoint.md`
        align-items: center;
        border: 1px solid ${GlobalStyles.colors.white};
        border-radius: 100%;
        display: flex;
        height: 60px;
        justify-content: center;
        width: 60px;
      `}
    }
    h1 {
      font-size: 3em;
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
    z-index: ${GlobalStyles.zIndexes.indexHeroVideo};
  }
`

export default function Index() {
  return (
    <StyleHero>
      <div className='hero__content'>
        <h1>Powerful Results from Where People&nbsp;Go</h1>
        <p>Connect with and understand your&nbsp;audience.</p>
        <div>↓</div>
      </div>
      <video autoPlay className='hero__video' muted loop>
        <source src='/video/background-people-walking.mp4' type='video/mp4' />
      </video>
    </StyleHero>
  )
}
