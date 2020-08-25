import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/shared/hero'))
const Post = dynamic(() => import('../components/careers/post'))

export default function Careers() {
  return (
    <>
      <Hero
        imgSrc='/images/careers/fallback/hero.jpg'
        title='Marketers looking for results partner with EQ.'
      />
      <Post />
    </>
  )
}
