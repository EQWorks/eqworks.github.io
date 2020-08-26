import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/shared/hero'))
const Content = dynamic(() => import('../components/browser-opt-out/content'))

export default function PrivacyPolicy({ privacyPolicy }) {
  return (
    <>
      <Hero
        imgSrc='/images/privacy-policy/fallback/hero.jpg'
        title='EQ Works Privacy'
      />
      <Content />
    </>
  )
}
