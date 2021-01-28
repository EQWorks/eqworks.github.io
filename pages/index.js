import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/index/hero'))
const BetterUnderstand = dynamic(() =>
  import('../components/index/better-understand')
)
const Divider = dynamic(() => import('../components/shared/divider'))
const Tabs = dynamic(() => import('../components/index/tabs'))
const LocationData = dynamic(() => import('../components/index/location-data'))
const EQAdvantage = dynamic(() =>
  import('../components/index/eq-advantage')
)
const SimplifyYour = dynamic(() => import('../components/shared/simplify-your'))
// ssr rendering of react-slick results in an error when using response breakpoints.
const OurClientsNoSSR = dynamic(import('../components/shared/our-clients'), {
  ssr: false
})

export default function Index() {
  return (
    <>
      <Hero />
      <BetterUnderstand />
      <Divider />
      <Tabs />
      <LocationData />
      <EQAdvantage />
      <SimplifyYour title='digital advertising' />
      <OurClientsNoSSR header />
    </>
  )
}
