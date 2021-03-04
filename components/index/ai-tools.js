import styled from 'styled-components'

const SectionStyled = styled.section`
  color: ${({ theme }) => theme.color.black};
  margin: ${({ theme }) => theme.spacing[12]}px auto;
  max-width: ${({ theme }) => theme.width.page};
  padding: 0 ${({ theme }) => theme.spacing[2]}px;
  text-align: center;
  h2 {
    margin: 0 auto ${({ theme }) => theme.spacing[6]}px auto;
  }
  .items {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .item {
      margin: 0 auto ${({ theme }) => theme.spacing[6]}px auto;
      width: 100%;
      @media ${({ theme }) => theme.breakpoint.sm} {
        width: 50%;
      }
      @media ${({ theme }) => theme.breakpoint.md} {
        width: 33%;
      }
      img {
        margin: 0 auto ${({ theme }) => theme.spacing[2]}px auto;
        max-width: 75px;
        width: 100%;
      }
      p {
        margin: 0 auto;
        max-width: 325px;
      }
      .font-weight-bold {
        margin: 0 auto ${({ theme }) => theme.spacing[1]}px auto;
      }
    }
  }
`

export default function Section() {
  return (
    <SectionStyled>
      <h2>
        EQ's AI-based tools
        <br />
        power real customer outcomes
      </h2>
      <div className='items'>
        <div className='item'>
          <img
            alt='User avatar with stars and a checkmark.'
            src='/images/index/fallback/ai-tools-1.svg'
          />
          <p className='font-weight-bold'>Retention & Loyaly</p>
          <p>
            Read the signals that predict customer churn to take
            preventative&nbsp;action.
          </p>
        </div>
        <div className='item'>
          <img
            alt='Watering can watering a money plant.'
            src='/images/index/fallback/ai-tools-2.svg'
          />
          <p className='font-weight-bold'>Share of Wallet</p>
          <p>
            Understand which product categories represent the biggest
            share-growth opportunities among your customers, and deploy
            marketing initiatives based on these&nbsp;insights.
          </p>
        </div>
        <div className='item'>
          <img
            alt='Globe with a user avatar overlayed.'
            src='/images/index/fallback/ai-tools-3.svg'
          />
          <p className='font-weight-bold'>Customer Acquisition</p>
          <p>
            Find new customers that look like your best customers to drive
            market penetration and life-time&nbsp;value.
          </p>
        </div>
      </div>
    </SectionStyled>
  )
}
