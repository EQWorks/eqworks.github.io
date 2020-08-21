import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/investors/hero'))
const InvestingFuture = dynamic(() =>
  import('../components/investors/investing-future')
)
const FinancialInfo = dynamic(() =>
  import('../components/investors/financial-info')
)
// ssr rendering of react-slick results in an error when using response breakpoints.
const OurClientsNoSSR = dynamic(import('../components/shared/our-clients'), {
  ssr: false
})

const Investors = () => {
  return (
    <>
      <Hero />
      <InvestingFuture />
      <FinancialInfo />
      <OurClientsNoSSR />
    </>
  )
}
export default Investors
