import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../utils/style-global'
import Layout from '../components/layout/layout.js'

const theme = {
  breakpoint: {
    xs: '(min-width: 576px)',
    sm: '(min-width: 768px)',
    md: '(min-width: 992px)',
    lg: '(min-width: 1200px)'
  },
  color: {
    black: '#1D1D1D',
    greyBorder: '#EEF1F6',
    greyDark: '#333333',
    greyMedium: '#777777',
    greyLight: '#BFBFBF',
    navBarLinksListHover: '#F95F51',
    white: '#FFFFFF'
  },
  font: {
    copy: {
      name: 'Hind',
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700
    },
    title: {
      name: 'Montserrat',
      regular: 400,
      medium: 500,
      bold: 700
    }
  },
  height: {
    navBar: '55px',
    navBarMD: '94px',
    navBarScrolled: '58px'
  },
  width: {
    article: '800px',
    page: '1200px'
  },
  zIndex: {
    navBar: 11,
    footer: 10,
    pageContent: 5,
    indexHeroVideo: 1
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }
}
