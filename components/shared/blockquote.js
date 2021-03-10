import styled from 'styled-components'
import { QuoteLeft } from '@styled-icons/fa-solid/QuoteLeft'
import { QuoteRight } from '@styled-icons/fa-solid/QuoteRight'

const DivStyled = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing[8]}px 0 0 0;
  width: 100%;
  .side {
    box-sizing: border-box;
    width: 10%;
    svg {
      color: ${({ theme }) => theme.color.greyLight};
      max-width: 35px;
    }
    &:first-child {
      align-items: flex-start;
      display: none;
      justify-content: flex-end;
      padding: 0 ${({ theme }) => theme.spacing[2]}px 0 0;
      @media ${({ theme }) => theme.breakpoint.xs} {
        display: flex;
      }
    }
    &:last-child {
      align-items: flex-end;
      display: none;
      justify-content: flex-start;
      padding: 0 0 0 ${({ theme }) => theme.spacing[2]}px;
      @media ${({ theme }) => theme.breakpoint.sm} {
        display: flex;
      }
    }
  }
  .center {
    box-sizing: border-box;
    text-align: left;
    width: 90%;
    @media ${({ theme }) => theme.breakpoint.sm} {
      width: 80%;
    }
    @media ${({ theme }) => theme.breakpoint.md} {
      max-width: 800px;
    }
    blockquote {
      border: 3px solid ${({ theme }) => theme.color.blue};
      margin: 0;
      padding: ${({ theme }) => theme.spacing[3]}px;
    }
  }
`

export default function Blockquote({ data }) {
  return (
    <DivStyled>
      <div className='side'>
        <QuoteLeft aria-label='left quote' role='img' />
      </div>
      <div className='center'>
        <blockquote>{data[0].content[0].value}</blockquote>
      </div>
      <div className='side'>
        <QuoteRight aria-label='right quote' role='img' />
      </div>
    </DivStyled>
  )
}
