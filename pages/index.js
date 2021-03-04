import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/index/hero'))
const AITools = dynamic(() => import('../components/index/ai-tools'))
const BlueTabs = dynamic(() => import('../components/index/blue-tabs'))
const EQAdvantage = dynamic(() => import('../components/index/eq-advantage'))
const Brands = dynamic(() => import('../components/index/brands'))

export default function Index() {
  return (
    <>
      <Hero />
      <AITools />
      <BlueTabs />
      <EQAdvantage />
      <Brands />
    </>
  )
}
