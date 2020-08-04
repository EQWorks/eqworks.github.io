import dynamic from 'next/dynamic'

import HeroSection from '../components/index/hero'
import VideoSection from '../components/index/video'
import WhyClientsUseUsSection from '../components/index/why-clients-use-us'
import LocationBehaviour from '../components/index/location-behaviour'
import ConnectedDevices from '../components/index/connected-devices'
import SimplifyYour from '../components/shared/simplify-your'
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
