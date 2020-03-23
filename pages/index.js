import styled from 'styled-components'
import Layout from '../components/PageLayout.js'

const Title = styled.h1`
color: red
`

export default function Index () {
  return (
    <Layout>
      <div className='index__hero'>
        <Title>Powerful Results from Where People Go</Title>
        <p>Connect with and understand your audience</p>
        <div>
          <p>\/</p>
        </div>
      </div>
    </Layout>
  )
}
