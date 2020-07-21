import styled from 'styled-components'
import * as GlobalStyles from '../utils/style-variables'

import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'

const StyleContent = styled.div`
  background-color: ${GlobalStyles.colors.white};
  flex: 1;
`

export default function Layout(props) {
  return (
    <>
      <Header />
      <StyleContent>
        <NavBar />
        {props.children}
      </StyleContent>
      <Footer />
    </>
  )
}
