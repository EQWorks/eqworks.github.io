import { createGlobalStyle } from 'styled-components'
import * as StyleConstant from './style-constants'

const GlobalStyle = createGlobalStyle`
  // FONTS ==============================================================
  @font-face {
    font-family: copyBold;
    src: url('../fonts/hind-bold.ttf'),
      url('../fonts/hind-bold.woff'),
      url('../fonts/hind-bold.woff2');
  }

  @font-face {
    font-family: copyLight;
    src: url('../fonts/hind-light.ttf'),
      url('../fonts/hind-light.woff'),
      url('../fonts/hind-light.woff2');
  }

  @font-face {
    font-family: copyMedium;
    src: url('../fonts/hind-medium.ttf'),
      url('../fonts/hind-medium.woff'),
      url('../fonts/hind-medium.woff2');
  }

  @font-face {
    font-family: copyRegular;
    src: url('../fonts/hind-regular.ttf'),
      url('../fonts/hind-regular.woff'),
      url('../fonts/hind-regular.woff2');
  }

  @font-face {
    font-family: titleBold;
    src: url('../fonts/montserrat-bold.ttf'),
      url('../fonts/montserrat-bold.woff'),
      url('../fonts/montserrat-bold.woff2');
  }

  @font-face {
    font-family: titleLight;
    src: url('../fonts/montserrat-light.ttf'),
      url('../fonts/montserrat-light.woff'),
      url('../fonts/montserrat-light.woff2');
  }

  @font-face {
    font-family: titleMedium;
    src: url('../fonts/montserrat-medium.ttf'),
      url('../fonts/montserrat-medium.woff'),
      url('../fonts/montserrat-medium.woff2');
  }

  @font-face {
    font-family: titleRegular;
    src: url('../fonts/montserrat-regular.ttf'),
      url('../fonts/montserrat-regular.woff'),
      url('../fonts/montserrat-regular.woff2');
  }

  // ELEMENTS ===========================================================
    body {
    background-color: ${StyleConstant.color.black};
    font-family: copyRegular, sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: titleBold, sans-serif;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-family: titleBold, sans-serif;
    font-size: 2rem;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  p {
    font-family: copyRegular, sans-serif;
    margin: 0;
    padding: 0;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
`

export default GlobalStyle
