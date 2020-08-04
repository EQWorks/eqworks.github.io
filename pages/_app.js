import StyleConstant from '../utils/style-global'

import Layout from '../components/layout/layout.js'

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <StyleConstant />
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
