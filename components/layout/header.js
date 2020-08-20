import Head from 'next/head'
import { useRouter } from 'next/router'

const Header = () => {
  const pageTitle = (() => {
    const router = useRouter()
    let currentPage = ''

    if (router.pathname === '/') {
      currentPage = 'Home'
    } else {
      currentPage =
        router.pathname.substr(1).charAt(0).toUpperCase() +
        router.pathname.substr(1).slice(1)
    }

    currentPage += ' | EQ Works'

    return currentPage
  })()

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
      <meta name='msapplication-TileColor' content='#2b5797' />
      <meta name='theme-color' content='#ffffff' />

      {/* google fonts */}
      <link
        crossOrigin='true'
        href='https://fonts.gstatic.com'
        rel='preconnect'
      />
      <link
        as='style'
        href='https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;700&family=Montserrat:wght@400;500;700&display=swap'
        rel='preload'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;700&family=Montserrat:wght@400;500;700&display=swap'
        rel='stylesheet'
      />

      {/* site icons */}
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon/favicon-16x16.png'
      />
      <link rel='manifest' href='/favicon/site.webmanifest' />
      <link
        rel='mask-icon'
        href='/favicon/safari-pinned-tab.svg'
        color='#5bbad5'
      />

      <title>{pageTitle}</title>
    </Head>
  )
}

export default Header
