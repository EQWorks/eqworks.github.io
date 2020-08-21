import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/investors/hero'))
const InvestingFuture = dynamic(() =>
  import('../components/investors/investing-future')
)
const FinancialInfo = dynamic(() =>
  import('../components/investors/financial-info')
)

const Investors = () => {
  return (
    <>
      <Hero />
      <InvestingFuture />
      <FinancialInfo />
    </>
  )
}
export default Investors
