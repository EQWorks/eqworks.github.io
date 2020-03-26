import styled from 'styled-components'
import Layout from '../components/PageLayout.js'
import * as GlobalStyles from '../utils/style-variables'

const Title = styled.h1`
`

const StyleSampleContent = styled.div`
  background-color: ${GlobalStyles.colors.white};
  height: 800px;
  width: 100%;

  p {
    color: red;
  }
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
        <StyleSampleContent>
          <p>Hello there</p>
        </StyleSampleContent>
      </div>
    </Layout>
  )
}
