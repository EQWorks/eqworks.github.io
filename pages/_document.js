import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class myDocument extends Document {
  static getInitialProps({ renderPage }) {
    // create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()
    // retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    )
    // Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()
    // Pass styleTags as a prop
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang='en'>
        <Head>
          {/* output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
