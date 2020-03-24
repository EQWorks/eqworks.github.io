import GlobalStyle from '../utils/style-global'

export default function MyApp ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
