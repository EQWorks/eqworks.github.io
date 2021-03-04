import * as React from 'react'
import styled from 'styled-components'

const SectionStyled = styled.section`
  background-color: ${({ theme }) => theme.color.greyBackground};
  margin: ${({ theme }) => theme.spacing[12]}px auto 0 auto;
  .container {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.width.page};
    padding: ${({ theme }) => theme.spacing[6]}px
      ${({ theme }) => theme.spacing[2]}px;
    .divider {
      background-color: ${({ theme }) => theme.color.greyLight};
      box-sizing: border-box;
      height: 3px;
      margin: 0 0 ${({ theme }) => theme.spacing[4]}px 0;
      max-width: 200px;
      width: 100%;
      @media ${({ theme }) => theme.breakpoint.md} {
        height: 125px;
        margin: 0 ${({ theme }) => theme.spacing[3]}px 0
          ${({ theme }) => theme.spacing[2]}px;
        width: 3px;
      }
      @media ${({ theme }) => theme.breakpoint.lg} {
        margin: 0 ${({ theme }) => theme.spacing[7]}px 0
          ${({ theme }) => theme.spacing[4]}px;
      }
    }
    .item {
      text-align: center;
      margin: 0 0 ${({ theme }) => theme.spacing[5]}px 0;
      width: 100%;
      &:last-child {
        margin: 0;
      }
      @media ${({ theme }) => theme.breakpoint.md} {
        padding: 0 ${({ theme }) => theme.spacing[1]}px;
        text-align: left;
        width: 20%;
      }
    }
  }
`

export default function Section() {
  return (
    <SectionStyled>
      <div className='container'>
        <div className='item'>
          <p className='font-weight-bold'>Toronto Office</p>
          <p>1235 Bay Street, Suite 401</p>
          <p>Toronto, ON, M5R&nbsp;3K4</p>
        </div>
        <div className='divider' />
        <div className='item'>
          <p className='font-weight-bold'>Sales</p>
          <p>sales@eqworks.com</p>
        </div>
        <div className='item'>
          <p className='font-weight-bold'>Media inquiries</p>
          <p>press@eqworks.com</p>
        </div>
        <div className='item'>
          <p className='font-weight-bold'>Investor relations</p>
          <p>Peter Kanniah</p>
          <p>peter.kanniah@eqworks.com</p>
          <p>416 260 4326</p>
        </div>
      </div>
    </SectionStyled>
  )
}
