import Link from 'next/link'
import styled from 'styled-components'

const SectionStyled = styled.section`
  background-color: ${({ theme }) => theme.color.greyDark};
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  .left {
    box-sizing: border-box;
    color: ${({ theme }) => theme.color.white};
    padding: 60px 20px;
    width: 100%;
    @media ${({ theme }) => theme.breakpoint.sm} {
      width: 50%;
    }
    a {
      background-color: ${({ theme }) => theme.color.navBarLinksListHover};
      color: ${({ theme }) => theme.color.white};
      display: inline-block;
      padding: 10px 30px;
      text-decoration: none;
    }
    p {
      margin: 20px auto 20px auto;
      max-width: 350px;
    }
  }
  .right {
    background-color: ${({ theme }) => theme.color.black};
    background-image: url('/images/investors/fallback/financial-info.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    width: 100%;
    @media ${({ theme }) => theme.breakpoint.sm} {
      height: auto;
      width: 50%;
    }
  }
`

export default function FinancialInfo() {
  return (
    <SectionStyled>
      <div className='left'>
        <h2>Financial Information</h2>
        <p>
          Statements are published quarterly. Click below to access current and
          historic&nbsp;reports.
        </p>
        <Link href='/financial-reports'>
          <a>View All</a>
        </Link>
      </div>
      <div className='right' />
    </SectionStyled>
  )
}
