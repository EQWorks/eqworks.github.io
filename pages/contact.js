import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/shared/hero'))
const Form = dynamic(() => import('../components/contact/form'))
const ContactInfo = dynamic(() => import('../components/contact/contact-info'))
const Map = dynamic(() => import('../components/contact/map'))

export default function Contact() {
  return (
    <>
      <Hero
        imgSrc='/images/contact/fallback/hero-3.png'
        noOverlay
        title={`LET'S CONNECT!`}
      />
      <Form />
      <ContactInfo />
      <Map />
    </>
  )
}
