import Head from 'next/head'
import { useRouter } from 'next/router'
import NavBar from './NavBar'

export default function Header () {
  const pageTitle = (() => {
    const router = useRouter()
    let currentPage = ''

    if (router.pathname === '/') {
      currentPage = 'Home'
    } else if (router.pathname === '/atom') {
      currentPage = 'Atom'
    }

    currentPage += ' | EQ Works'

    return currentPage
  })()

  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <title>{pageTitle}</title>
      </Head>
      <NavBar />
    </div>
  )
}
