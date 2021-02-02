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
      img {
        margin: 0 auto ${({ theme }) => theme.spacing[1]}px auto;
      }
      .title {
        color: ${({ theme }) => theme.color.blue};
        font-weight: ${({ theme }) => theme.font.bold};
        margin: 0 auto ${({ theme }) => theme.spacing[1]}px auto;
      }
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
          <p className='title'>Scale</p>
          <p>
            More than a petabyte of geospatial data collected, organized,
            and&nbsp;stored
          </p>
        </div>
        <div className='item'>
          <img
            alt='Avatar icon'
            src='/images/index/fallback/eq-advantage-2.png'
          />
          <p className='title'>ROI</p>
          <p>
            Ability to connect online events to real-world behavior, such as a
            store-visit
          </p>
        </div>
        <div className='item'>
          <img
            alt='Computer with charts icon'
            src='/images/index/fallback/eq-advantage-3.png'
          />
          <p className='title'>Time Travel</p>
          <p>
            Ability to understand historical consumer behavior to find an engage
            them&nbsp;today
          </p>
        </div>
        <div className='item'>
          <img
            alt='Trophy icon'
            src='/images/index/fallback/eq-advantage-4.png'
          />
          <p className='title'>Tools</p>
          <p>
            Award-winning Creative Studio, with omni-channel ideation and design
            support.
          </p>
        </div>
      </div>
    </SectionStyled>
  )
}
