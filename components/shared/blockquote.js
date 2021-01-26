import styled from 'styled-components'
import { QuoteLeft } from '@styled-icons/fa-solid/QuoteLeft'

const BlockquoteStyled = styled.blockquote`
  background-color: ${({ theme }) => theme.color.greyBorder};
  border-left: 5px solid ${({ theme }) => theme.color.navBarLinksListHover};
  display: flex;
  margin: 0;
  padding: 20px;
  .left-side {
    display: none;
    min-width: 25px;
    width: 25px;
    @media ${({ theme }) => theme.breakpoint.xs} {
      display: block;
    }
    svg {
      color: ${({ theme }) => theme.color.navBarLinksListHover};
      width: 100%;
    }
  }
  .right-side {
    @media ${({ theme }) => theme.breakpoint.xs} {
      padding: 0 0 0 20px;
      width: calc(100% - 25px);
    }
    p {
      color: ${({ theme }) => theme.color.black};
      margin: 0;
      &:first-child {
        font-style: italic;
        margin: 0 0 10px 0;
      }
      &:last-child {
        font-weight: ${({ theme }) => theme.font.bold};
      }
    }
  }
`

export default function Blockquote({ data }) {
  return (
    <BlockquoteStyled>
      <div className='left-side'>
        <QuoteLeft aria-label='left quote' role='img' />
      </div>
      <div className='right-side'>
        {data[0] && <p>{data[0].content[0].value}</p>}
        {data[1] && <p>{data[1].content[0].value}</p>}
      </div>
    </BlockquoteStyled>
  )
}
