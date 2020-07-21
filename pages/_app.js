import GlobalStyle from '../utils/style-global'

import Layout from '../components/layout.js'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  )
}
