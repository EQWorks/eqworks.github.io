import dynamic from 'next/dynamic'

const HeroSection = dynamic(() => import('../components/index/hero'))
const VideoSection = dynamic(() => import('../components/index/video'))
const WhyClientsUseUsSection = dynamic(() =>
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
const OurClientsNoSSR = dynamic(import('../components/index/our-clients'), {
  ssr: false
})

const Index = () => {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <WhyClientsUseUsSection />
      <LocationBehaviour />
      <ConnectedDevices />
      <SimplifyYour title='digital advertising' />
      <OurClientsNoSSR />
    </>
  )
}

export default Index
