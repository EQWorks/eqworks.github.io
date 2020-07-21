import styled from 'styled-components'
import * as GlobalStyles from '../utils/style-variables'

import Header from './header'
import NavBar from './nav-bar'
import Footer from './footer'

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
