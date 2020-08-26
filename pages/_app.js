import App from 'next/app'
import 'mapbox-gl/dist/mapbox-gl.css'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

import Layout from '../components/layout/layout.js'

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
