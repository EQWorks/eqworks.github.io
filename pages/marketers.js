import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/shared/hero'))
const Understand = dynamic(() => import('../components/marketers/understand'))
const ServiceResults = dynamic(() =>
  import('../components/marketers/service-results')
)
const SimplifyYour = dynamic(() => import('../components/shared/simplify-your'))

export default function Marketers() {
  return (
    <>
      <Hero
        imgSrc='/images/marketers/fallback/hero.jpg'
        title='Marketers looking for results partner with EQ.'
      />
      <Understand />
      <ServiceResults />
      <SimplifyYour title='tech stack' />
    </>
  )
}
