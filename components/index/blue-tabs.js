import * as React from 'react'
import styled from 'styled-components'

const SectionStyled = styled.section`
  color: ${({ theme }) => theme.color.white};
  margin: 0 auto ${({ theme }) => theme.spacing[12]}px auto;
  padding: 0;
  .container {
    background-color: ${({ theme }) => theme.color.blue};
    box-sizing: border-box;
    .content {
      box-sizing: border-box;
      margin: 0 auto;
      max-width: ${({ theme }) => theme.width.page};
      padding: ${({ theme }) => theme.spacing[8]}px
        ${({ theme }) => theme.spacing[2]}px;
      text-align: center;
      @media ${({ theme }) => theme.breakpoint.md} {
        align-items: center;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
      }
      .image {
        box-sizing: border-box;
        display: none;
        padding: ${({ theme }) => theme.spacing[4]}px;
        @media ${({ theme }) => theme.breakpoint.md} {
          display: block;
          width: 50%;
        }
        h2 {
          margin: 0 0 ${({ theme }) => theme.spacing[1]}px 0;
          max-width: 400px;
          text-align: left;
        }
        img {
          display: none;
          width: 100%;
        }
        .show {
          display: block;
        }
      }
      .tabs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2 {
          margin: 0 auto ${({ theme }) => theme.spacing[2]}px auto;
          max-width: 300px;
          @media ${({ theme }) => theme.breakpoint.md} {
            display: none;
          }
        }
        ul {
          margin: 0;
          list-style-image: none;
          list-style-type: none;
          padding: 0;
          width: 100%;
          li {
            background-color: ${({ theme }) => theme.color.blueDark};
            box-sizing: border-box;
            color: ${({ theme }) => theme.color.white};
            cursor: pointer;
            margin: ${({ theme }) => theme.spacing[1]}px auto;
            max-width: 500px;
            padding: ${({ theme }) => theme.spacing[2]}px;
            text-align: left;
            width: 100%;
            .li-content {
              padding: ${({ theme }) => theme.spacing[1]}px 0 ${({ theme }) => theme.spacing[6]}px 0;
            }
            .title {
              font-size: 1em;
            }
          }
          .active {
            background-color: ${({ theme }) => theme.color.white};
            color: ${({ theme }) => theme.color.black};
          }
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
  const [tabValue, setTabValue] = React.useState(0)

  return (
    <SectionStyled>
      <div className='shape'>
        <svg
          height='100%'
          preserveAspectRatio='none'
          width='100%'
          viewBox='0 0 100 100'
        >
          <polygon points='50 100, 100 0, 100 100, 0 100, 0 0' />
        </svg>
      </div>

      <div className='container'>
        <div className='content'>
          <div className='tabs'>
            <h2>How Can EQ Help Me Grow? <span className='font-weight-bold'>I'm A:</span></h2>
            <ul>
              <li
                className={tabValue === 0 ? 'active' : null}
                onClick={() => setTabValue(0)}
              >
                <p className='font-weight-bold title'>Business Decision Makers</p>
                {tabValue === 0 && (
                  <p className='li-content'>
                    CRM enrichment for loyalty & customer acquisition, store
                    performance benchmarking, assortment planning, return on
                    marketing&nbsp;spend.
                  </p>
                )}
              </li>
              <li
                className={tabValue === 1 ? 'active' : null}
                onClick={() => setTabValue(1)}
              >
                <p className='font-weight-bold title'>
                  Marketing & Advertising Decision Makers
            </p>
                {tabValue === 1 && (
                  <p className='li-content'>
                    SaaS data and media buying tools, performance optimization,
                    insights, and Creative&nbsp;Studio.
                  </p>
                )}
              </li>
              <li
                className={tabValue === 2 ? 'active' : null}
                onClick={() => setTabValue(2)}
              >
                <p className='font-weight-bold title'>Media Owners</p>
                {tabValue === 2 && (
                  <p className='li-content'>
                    Platform-as-a-Service to scale first party audiences and show
                    return advertising spend through changes in real world
                    consumer&nbsp;behavior.
                  </p>
                )}
              </li>
              <li
                className={tabValue === 3 ? 'active' : null}
                onClick={() => setTabValue(3)}
              >
                <p className='font-weight-bold title'>
                  Data Scientists & Developers
            </p>
                {tabValue === 3 && (
                  <p className='li-content'>
                    Juypter notebook capabilities to enable data manipulation
                    without limitation, API access for privacy-compliant
                    localization in your own environment, and machine-learning-model
                    training&nbsp;gym.
                  </p>
                )}
              </li>
            </ul>
          </div>

          <div className='image'>
            <h2>How Can EQ Help Me Grow?</h2>
            <img
              alt='Business person next to an abstract calendar.'
              className={(tabValue === 0) ? 'show' : null}
              src='/images/index/fallback/blue-tabs-0.png'
            />
            <img
              alt='Person interacting with abstract mobile phone data.'
              className={(tabValue === 1) ? 'show' : null}
              src='/images/index/fallback/blue-tabs-1.png'
            />
            <img
              alt='Person interacting with an abstract play button.'
              className={(tabValue === 2) ? 'show' : null}
              src='/images/index/fallback/blue-tabs-2.png'
            />
            <img
              alt='Scientist working with flasks.'
              className={(tabValue === 3) ? 'show' : null}
              src='/images/index/fallback/blue-tabs-3.png'
            />
          </div>
        </div>
      </div>

      <div className='shape'>
        <svg
          height='100%'
          preserveAspectRatio='none'
          width='100%'
          viewBox='0 0 100 100'
        >
          <polygon points='0 0, 100 0, 50, 100' />
        </svg>
      </div>
    </SectionStyled>
  )
}
