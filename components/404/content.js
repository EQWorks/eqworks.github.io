import Link from 'next/link'
import styled from 'styled-components'

const SectionStyled = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.black};
  display: flex;
  flex-direction: column;
  font-size: ${(props) => (props.largeFont ? '2em' : '1em')};
  height: 100vh;
  justify-content: center;
  left: 0;
  padding: 0 20px;
  position: absolute;
  text-align: center;
  top: 0;
  width: 100vw;
  z-index: ${({ theme }) => theme.zIndex.page404};
  h1 {
    font-size: 3em;
    margin: 0 auto 20px auto;
  }
  p {
    font-size: 2em;
    font-weight: ${({ theme }) => theme.font.copy.bold};
    margin: 0 auto 20px auto;
    max-width: 600px;
  }
  .link {
    background-color: ${({ theme }) => theme.color.navBarLinksListHover};
    color: ${({ theme }) => theme.color.white};
    padding: 15px 30px;
    text-decoration: none;
    text-transform: uppercase;
  }
  .subtitle {
    font-weight: ${({ theme }) => theme.font.copy.bold};
    font-size: 2em;
  }
  @media ${({ theme }) => theme.breakpoint.sm} {
    /* display: none; */
  }
`

export default function Section() {
  return (
    <SectionStyled>
      <h1>404 error</h1>
      <p className='subtitle'>Oops!</p>
      <p>It looks like the page you were looking for is not available.</p>
      <Link href='/'>
        <a className='link'>EQ Works</a>
      </Link>
    </SectionStyled>
  )
}
