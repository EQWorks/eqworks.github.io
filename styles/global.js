import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.black};
    font-family: ${({ theme }) => theme.font.name}, sans-serif;
    font-weight: ${({ theme }) => theme.font.regular};
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: ${({ theme }) => theme.font.name}, sans-serif;
    font-weight: ${({ theme }) => theme.font.bold};
    line-height: 1.25em;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-family: ${({ theme }) => theme.font.name}, sans-serif;
    font-weight: ${({ theme }) => theme.font.bold};
    font-size: 2em;
    margin: 0;
    padding: 0;
  }

  h3 {
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  p {
    font-family: ${({ theme }) => theme.font.name}, sans-serif;
    font-weight: ${({ theme }) => theme.font.regular};
    line-height: 1.5em;
    margin: 0;
    padding: 0;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .font-weight-bold {
    font-weight: ${({ theme }) => theme.font.bold};
  }

  .fp-nav-black {
    ul li a span {
      background: ${({ theme }) => theme.color.black} !important;
    }
  }

  .fp-nav-white {
    ul li a span {
      background: ${({ theme }) => theme.color.white} !important;
    }
  }

  .no-scroll {
    height: 100%;
    overflow: hidden;
  }
`

export default GlobalStyle