import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/shared/hero'))
const Article = dynamic(() => import('../components/covid-19/article'))

export default function Covid19() {
  return (
    <>
      <Hero
        fullHeight
        imgSrc='/images/covid-19/fallback/hero.png'
        title='Contact Tracing: Moving Towards a New Normal'
      />
      <Article />
    </>
  )
}
