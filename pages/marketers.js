import Hero from '../components/marketers/hero'
import Understand from '../components/marketers/understand'
import ServiceResults from '../components/marketers/service-results'
import SimplifyYour from '../components/shared/simplify-your'

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
