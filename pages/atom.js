import dynamic from 'next/dynamic'

const Slides = dynamic(() => import('../components/atom/slides'))

export default function Atom() {
  return (
    <>
      <Slides />
    </>
  )
}
