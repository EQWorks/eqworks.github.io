import dynamic from 'next/dynamic'

const Slides = dynamic(() => import('../components/locus/slides'))

export default function Locus() {
  return (
    <>
      <Slides />
    </>
  )
}
