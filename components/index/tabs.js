import * as React from 'react'
import styled from 'styled-components'

const SectionStyled = styled.section`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width.page};
  .content-container {
    padding: ${({ theme }) => theme.spacing[5]}px
      ${({ theme }) => theme.spacing[3]}px;
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
          margin: ${({ theme }) => theme.spacing[2]}px auto;
          max-width: 500px;
          padding: ${({ theme }) => theme.spacing[3]}px;
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
  }
  .divider {
    background-color: ${({ theme }) => theme.color.greyLight};
    height: 1px;
    margin: ${({ theme }) => theme.spacing[5]}px auto
      ${({ theme }) => theme.spacing[5]}px auto;
    width: 66%;
  }
`

export default function Tabs() {
  const [tabValue, setTabValue] = React.useState(0)

  return (
    <SectionStyled>
      <div className='divider' />

      <div className='content-container'>
        <div className='tabs'>
          <ul>
            <li
              className={tabValue === 0 ? 'active' : null}
              onClick={() => setTabValue(0)}
            >
              <p className='font-weight-bold title'>Locus DMP</p>
              {tabValue === 0 && (
                <p className='content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas lobortis molestie velit, id venenatis dui
                  condimentum.
                </p>
              )}
            </li>
            <li
              className={tabValue === 1 ? 'active' : null}
              onClick={() => setTabValue(1)}
            >
              <p className='font-weight-bold title'>Atom DSP</p>
              {tabValue === 1 && (
                <p className='content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas lobortis molestie velit, id venenatis dui condimentum
                  ut. Quisque fringilla ex eu ante posuere.
                </p>
              )}
            </li>
            <li
              className={tabValue === 2 ? 'active' : null}
              onClick={() => setTabValue(2)}
            >
              <p className='font-weight-bold title'>Cognitive</p>
              {tabValue === 2 && (
                <p className='content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas lobortis molestie velit.
                </p>
              )}
            </li>
            <li
              className={tabValue === 3 ? 'active' : null}
              onClick={() => setTabValue(3)}
            >
              <p className='font-weight-bold title'>Creative Studio</p>
              {tabValue === 3 && (
                <p className='content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas lobortis molestie velit, id venenatis dui condimentum
                  ut. Quisque fringilla
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
      </div>
    </SectionStyled>
  )
}
