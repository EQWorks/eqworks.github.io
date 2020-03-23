import { ThemeProvider } from 'styled-components'
import '../public/styles/global.scss'

export default function MyApp ({ Component, pageProps }) {
  const theme = {
    red: 'red',
    blue: 'blue'
  }

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
