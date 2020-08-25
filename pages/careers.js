import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/shared/hero'))
const Post = dynamic(() => import('../components/careers/post'))
const ApplicationForm = dynamic(() =>
  import('../components/careers/application-form')
)

export default function Careers() {
  return (
    <>
      <Hero imgSrc='/images/careers/fallback/hero.jpg' />
      <Post />
      <ApplicationForm />
    </>
  )
}
