import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/index/hero'))
const AITools = dynamic(() => import('../components/index/ai-tools'))
const Divider = dynamic(() => import('../components/shared/divider'))
const BlueTabs = dynamic(() => import('../components/index/blue-tabs'))
const EQAdvantage = dynamic(() => import('../components/index/eq-advantage'))
const Creative = dynamic(() => import('../components/index/creative'))
const Brands = dynamic(() => import('../components/index/brands'))

export default function Index() {
  return (
    <>
      <Hero />
      <AITools />
      <BlueTabs />
      <EQAdvantage />
      <Divider />
      <Creative />
      <Brands />
    </>
  )
}
