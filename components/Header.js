import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Header () {
  const pageTitle = (() => {
    const router = useRouter()
    let currentPage = ''

    if (router.pathname === '/') {
      currentPage = 'Home'
    } else {
      currentPage = router.pathname.substr(1).charAt(0).toUpperCase() + router.pathname.substr(1).slice(1)
    }

    currentPage += ' | EQ Works'

    return currentPage
  })()

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      <title>{pageTitle}</title>
    </Head>
  )
}
