import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <title>{pageTitle}</title>
      </Head>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/atom'>
        <a>Atom</a>
      </Link>
    </div>
  )
}
