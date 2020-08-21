import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/index/hero'))
const Video = dynamic(() => import('../components/index/video'))
const WhyClientsUseUs = dynamic(() =>
  import('../components/index/why-clients-use-us')
)
const LocationBehaviour = dynamic(() =>
  import('../components/index/location-behaviour')
)
const ConnectedDevices = dynamic(() =>
  import('../components/index/connected-devices')
)
const SimplifyYour = dynamic(() => import('../components/shared/simplify-your'))
// ssr rendering of react-slick results in an error when using response breakpoints.
const OurClientsNoSSR = dynamic(import('../components/shared/our-clients'), {
  ssr: false
})

const Index = () => {
  return (
    <>
      <Hero />
      <Video />
      <WhyClientsUseUs />
      <LocationBehaviour />
      <ConnectedDevices />
      <SimplifyYour title='digital advertising' />
      <OurClientsNoSSR header />
    </>
  )
}

export default Index
