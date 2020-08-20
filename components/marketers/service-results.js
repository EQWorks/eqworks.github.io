import styled from 'styled-components'

import { breakpoint } from '../../utils/style-breakpoints'

const SectionStyled = styled.section`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width.page};
  padding: 20px;
  ${breakpoint.sm`
    display: flex;
  `}
  h2 {
    margin: 0 0 20px 0;
  }
  .left {
    ${breakpoint.sm`
      padding: 0 20px 0 0;
      width: 60%
    `}
    ${breakpoint.md`
      width: 50%
    `}
    p {
      margin: 0 auto 20px auto;
    }
    .subtitle {
      font-family: ${({ theme }) => theme.font.copy.name}, sans-serif;
      font-weight: ${({ theme }) => theme.font.copy.bold};
      margin: 0 0 20px 0;
    }
  }
  .right {
    text-align: center;
    ${breakpoint.sm`
      width: 40%
    `}
    ${breakpoint.md`
      width: 50%
    `}
    img {
      height: auto;
      max-width: 500px;
      width: 100%;
    }
  }
`

const Section = () => {
  return (
    <SectionStyled>
      <div className='left'>
        <h2>Impeccable service, unparalleled results.</h2>
        <p className='subtitle'>And we don’t stop there.</p>
        <p>
          We ensure that you get the service and the results you need by
          deploying the power of data to effectively identify, analyze, and
          optimize your advertising campaigns.
        </p>
      </div>
      <div className='right'>
        <img
          alt='people working together at a table'
          src='/images/marketers/serice-results.jpg'
        />
      </div>
    </SectionStyled>
  )
}

export default Section
