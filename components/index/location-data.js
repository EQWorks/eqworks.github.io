import styled from 'styled-components'

const SectionStyled = styled.section`
  color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing[5]}px 0;
  .container {
    background-color: ${({ theme }) => theme.color.blue};
    box-sizing: border-box;
    .content {
      border: 1px solid red;
      box-sizing: border-box;
      margin: 0 auto;
      max-width: ${({ theme }) => theme.width.page};
      padding: ${({ theme }) => theme.spacing[5]}px
        ${({ theme }) => theme.spacing[3]}px;
      text-align: center;
      h2 {
        font-size: 1.5em;
        margin: 0 auto;
        max-width: 750px;
        text-transform: uppercase;
        @media ${({ theme }) => theme.breakpoint.sm} {
          font-size: 2em;
        }
      }
    }
  }
  .shape {
    box-sizing: border-box;
    height: calc(100vw * 0.066);
    min-height: 25px;
    width: 100%;
    svg {
      fill: ${({ theme }) => theme.color.blue};
    }
  }
`

export default function LocationData() {
  return (
    <SectionStyled>
      <div className='shape'>
        <svg height='100%' preserveAspectRatio='none' width='100%' viewBox='0 0 100 100'>
          <polygon points='50 100, 100 0, 100 100, 0 100, 0 0' />
        </svg>
      </div>

      <div className='container'>
        <div className='content'>
          <h2>EQ Provides a Wealth of Geo-Spatial Location Data in our&nbsp;Algorithms</h2>
        </div>
      </div>

      <div className='shape'>
        <svg height='100%' preserveAspectRatio='none' width='100%' viewBox='0 0 100 100'>
          <polygon points='0 0, 100 0, 50, 100' />
        </svg>
      </div>
    </SectionStyled>
  )
}
