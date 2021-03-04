import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/shared/hero'))
const InfoForm = dynamic(() => import('../components/contact/info-form'))
const Map = dynamic(() => import('../components/contact/map'))

export default function Contact() {
  return (
    <>
      <Hero
        imgSrc='/images/contact/fallback/hero-3.png'
        noOverlay
        title={`LET'S CONNECT!`}
      />
      <InfoForm />
      <Map />
    </>
  )
}
