import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/marketers/hero'))
const Understand = dynamic(() => import('../components/marketers/understand'))
const ServiceResults = dynamic(() =>
  import('../components/marketers/service-results')
)
const SimplifyYour = dynamic(() => import('../components/shared/simplify-your'))

const Marketers = () => {
  return (
    <>
      <Hero />
      <Understand />
      <ServiceResults />
      <SimplifyYour title='tech stack' />
    </>
  )
}

export default Marketers
