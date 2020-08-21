import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/investors/hero'))
const InvestingFuture = dynamic(() => import('../components/investors/investing-future'))

const Investors = () => {
  return (
    <>
      <Hero />
      <InvestingFuture />
    </>
    )
}
export default Investors
