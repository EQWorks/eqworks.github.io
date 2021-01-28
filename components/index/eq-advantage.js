import styled from 'styled-components'

const SectionStyled = styled.section`
  color: ${({ theme }) => theme.color.black};
  margin: 0 auto ${({ theme }) => theme.spacing[12]}px auto;
  max-width: ${({ theme }) => theme.width.page};
  padding: 0 ${({ theme }) => theme.spacing[2]}px;
  text-align: center;
  h2 {
    margin: 0 0 ${({ theme }) => theme.spacing[4]}px 0;
    text-transform: uppercase;
  }
  .items {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      max-width: 250px;
      margin: ${({ theme }) => theme.spacing[2]}px
        ${({ theme }) => theme.spacing[2]}px
        ${({ theme }) => theme.spacing[4]}px
        ${({ theme }) => theme.spacing[2]}px;
    }
  }
`

export default function EQAdvantage() {
  return (
    <SectionStyled>
      <h2>The EQ Advantage</h2>
      <div className='items'>
        <div className='item'>
          <img
            alt='Brain icon'
            src='/images/index/fallback/eq-advantage-1.png'
          />
          <p>Purely Canadian tech stack with our DSP Atom & DMP&nbsp;Locus</p>
        </div>
        <div className='item'>
          <img
            alt='Avatar icon'
            src='/images/index/fallback/eq-advantage-2.png'
          />
          <p>
            Mastercard partnership gives ability to create custom segments with
            actionable&nbsp;insights
          </p>
        </div>
        <div className='item'>
          <img
            alt='Computer with charts icon'
            src='/images/index/fallback/eq-advantage-3.png'
          />
          <p>Inherently Insights-Driven Data Machine&nbsp;Learning</p>
        </div>
        <div className='item'>
          <img
            alt='Trophy icon'
            src='/images/index/fallback/eq-advantage-4.png'
          />
          <p>Award winning in-house Creative Studio</p>
        </div>
      </div>
    </SectionStyled>
  )
}
