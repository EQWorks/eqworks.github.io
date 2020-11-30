import Link from 'next/link'
import styled from 'styled-components'

const SectionStyled = styled.section`
  color: ${({ theme }) => theme.color.greyLight};
  margin: 0 auto;
  max-width: 600px;
  padding: 40px 20px;
  text-align: center;
  h2 {
    color: ${({ theme }) => theme.color.black};
    margin: 0 auto 20px auto;
  }
  .link {
    color: ${({ theme }) => theme.color.black};
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.color.black};
    display: inline-block;
    font-family: ${({ theme }) => theme.font.copy.name}, sans-serif;
    font-weight: ${({ theme }) => theme.font.copy.medium};
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.25s ease-out;
    padding: 10px 20px;
    &:hover {
      background-color: ${({ theme }) => theme.color.black};
      color: ${({ theme }) => theme.color.white};
    }
  }
  .subtitle {
    font-weight: ${({ theme }) => theme.font.copy.bold};
    margin: 20px auto;
  }
`

export default function Section() {
  return (
    <SectionStyled>
      <h2>Browser Opt-Out</h2>
      <p>
        You may opt-out of interest-based advertising on your browser by
        clicking the button below. Please note that this does not mean that you
        will no longer see advertising online, simply that the advertisements
        you are served may no longer be relevant to your&nbsp;interests.
      </p>
      <p className='subtitle'>
        <i>
          Clicking the button below will redirect you to the EQ Works homepage.
        </i>
      </p>
      <Link href='https://um2.eqads.com/optout'>
        <a className='link' target='_blank'>
          Opt Out
        </a>
      </Link>
    </SectionStyled>
  )
}
