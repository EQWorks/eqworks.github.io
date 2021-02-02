import * as React from 'react'
import styled from 'styled-components'

const SectionStyled = styled.section`
  margin: 0 auto ${({ theme }) => theme.spacing[12]}px auto;
  max-width: ${({ theme }) => theme.width.page};
  padding: 0 ${({ theme }) => theme.spacing[2]}px;
  @media ${({ theme }) => theme.breakpoint.md} {
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }
  .image {
    display: none;
    @media ${({ theme }) => theme.breakpoint.md} {
      display: block;
      width: 50%;
    }
    .image-file {
      height: 400px;
      margin: 0 auto;
      max-width: 400px;
      width: 100%;
    }
    .file-0 {
      background-color: ${({ theme }) => theme.color.greyDark};
    }
    .file-1 {
      background-color: ${({ theme }) => theme.color.greyMedium};
    }
    .file-2 {
      background-color: ${({ theme }) => theme.color.greyTextFooter};
    }
    .file-3 {
      background-color: ${({ theme }) => theme.color.greyLight};
    }
  }
  .tabs {
    display: flex;
    justify-content: center;
    ul {
      margin: 0;
      list-style-image: none;
      list-style-type: none;
      padding: 0;
      width: 100%;
      li {
        background-color: ${({ theme }) => theme.color.blue};
        box-sizing: border-box;
        color: ${({ theme }) => theme.color.white};
        cursor: pointer;
        margin: ${({ theme }) => theme.spacing[1]}px auto;
        max-width: 500px;
        padding: ${({ theme }) => theme.spacing[2]}px;
        width: 100%;
        .title {
          font-size: 1em;
        }
      }
      .active {
        background-color: ${({ theme }) => theme.color.white};
        border: 2px solid ${({ theme }) => theme.color.greyLight};
        color: ${({ theme }) => theme.color.black};
      }
    }
  }
`

export default function Tabs() {
  const [tabValue, setTabValue] = React.useState(0)

  return (
    <SectionStyled>
      <div className='tabs'>
        <ul>
          <li
            className={tabValue === 0 ? 'active' : null}
            onClick={() => setTabValue(0)}
          >
            <p className='font-weight-bold title'>Business Decision Makers</p>
            {tabValue === 0 && (
              <p className='content'>
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
              <p className='content'>
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
              <p className='content'>
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
              <p className='content'>
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
        {tabValue === 0 && <div className='image-file file-0' />}
        {tabValue === 1 && <div className='image-file file-1' />}
        {tabValue === 2 && <div className='image-file file-2' />}
        {tabValue === 3 && <div className='image-file file-3' />}
      </div>
    </SectionStyled>
  )
}
