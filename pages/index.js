import styled from 'styled-components'
import * as GlobalStyles from '../utils/style-variables'

import Layout from '../components/PageLayout.js'

const StyleHero = styled.div`
  background-color: red;
  padding: 100px 0;
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
      <StyleHero>
        <h1>Powerful Results from Where People Go</h1>
        <p>Connect with and understand your audience</p>
        <div>
          <p>\/</p>
        </div>
        <StyleSampleContent>
          <p>Hello there</p>
        </StyleSampleContent>
      </StyleHero>
    </Layout>
  )
}
