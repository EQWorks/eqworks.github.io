import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/covid-19/hero'))
const Article = dynamic(() => import('../components/covid-19/article'))

const Covid19 = () => {
  return (
    <>
      <Hero />
      <Article />
    </>
  )
}

export default Covid19
