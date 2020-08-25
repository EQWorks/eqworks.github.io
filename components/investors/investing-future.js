import styled from 'styled-components'
import { Database } from '@styled-icons/feather/Database'
import { Star } from '@styled-icons/feather/Star'
import { Zap } from '@styled-icons/feather/Zap'

const SectionStyled = styled.section`
  padding: 40px 20px;
  text-align: center;
  .items {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    div {
      padding: 30px 0 20px 0;
      width: 100%;
      @media ${({ theme }) => theme.breakpoint.sm} {
        width: 50%;
      }
      @media ${({ theme }) => theme.breakpoint.md} {
        width: 33%;
      }
      p {
        margin: 0 auto;
        max-width: 350px;
        @media ${({ theme }) => theme.breakpoint.sm} {
          max-width: 300px;
        }
      }
      svg {
        color: ${({ theme }) => theme.color.navBarLinksListHover};
        height: auto;
        width: 55px;
      }
    }
    .subtitle {
      font-family: ${({ theme }) => theme.font.copy.name}, sans-serif;
      font-weight: ${({ theme }) => theme.font.copy.bold};
      padding: 20px 0 10px 0;
    }
  }
`

export default function InvestingFuture() {
  return (
    <SectionStyled>
      <h2>Investing in the Future</h2>
      <div className='items'>
        <div>
          <Database aria-label='database' role='img' />
          <p className='subtitle'>Largest Dataset</p>
          <p>
            We track the entire mobile ecosystem on the continent, giving us the
            largest database of location behaviour data and insights in North
            America.
          </p>
        </div>
        <div>
          <Zap aria-label='lightning bolt' role='img' />
          <p className='subtitle'>Proprietary Platform</p>
          <p>
            Our proprietary technology overlays location behaviour data with
            machine learning algorithms and advanced AI solutions for
            unparalleled results.
          </p>
        </div>
        <div>
          <Star aria-label='star' role='img' />
          <p className='subtitle'>Industry Leadership</p>
          <p>
            Our winning combination of data science and location behaviour
            insights makes us the leader in the fastest growing segment of the
            advertising industry.
          </p>
        </div>
      </div>
    </SectionStyled>
  )
}
