import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout (props) {
  return (
    <>
      <Header />
      <NavBar />
      {props.children}
      <Footer />
    </>
  )
}
