import React, { useEffect } from 'react'
import Link from 'next/link'
import ReactFullpage from '@fullpage/react-fullpage'
import styled from 'styled-components'

import ImgWebP from '../shared/img-webp'

const SectionStyled = styled.section`
  left: 0;
  min-width: 250px;
  position: absolute;
  top: 0;
  .section {
    .fp-tableCell {
      align-items: center;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: ${({ theme }) => theme.height.navBar} 40px
        calc(${({ theme }) => theme.height.navBar} / 2) 40px;
      text-align: center;
      @media ${({ theme }) => theme.breakpoint.sm} {
        padding: ${({ theme }) => theme.height.navBarMD} 40px
          calc(${({ theme }) => theme.height.navBarMD} / 2) 40px;
      }
    }
  }
  .section-1 {
    background-color: ${({ theme }) => theme.color.black};
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url('/images/locus/fallback/slide-1-background.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    color: ${({ theme }) => theme.color.white};
    h1 {
      font-size: 2em;
      @media ${({ theme }) => theme.breakpoint.sm} {
        font-size: 2.5em;
      }
    }
    img {
      margin: 0 0 20px 0;
      width: 100%;
    }
  }
  .section-2 {
    background-color: ${({ theme }) => theme.color.white};
    margin: 0 auto;
    max-width: ${({ theme }) => theme.width.page};
    h2 {
      font-size: 1.5em;
      margin: 0 auto 50px auto;
      max-width: 500px;
      @media ${({ theme }) => theme.breakpoint.sm} {
        font-size: 2em;
        margin: 0 auto 20px auto;
        max-width: 600px;
      }
      @media ${({ theme }) => theme.breakpoint.md} {
        font-size: 3em;
        margin: 0 auto 60px auto;
        max-width: 700px;
      }
    }
    .items {
      @media ${({ theme }) => theme.breakpoint.md} {
        align-items: center;
        display: flex;
        justify-content: center;
      }
      .item {
        margin: 0 auto 20px auto;
        max-width: 400px;
        @media ${({ theme }) => theme.breakpoint.sm} {
          margin: 0 auto 40px auto;
          max-width: 600px;
        }
        @media ${({ theme }) => theme.breakpoint.md} {
          padding: 0 20px;
        }
        p {
          color: ${({ theme }) => theme.color.greyLight};
          text-align: left;
        }
        .title {
          color: ${({ theme }) => theme.color.black};
          font-weight: ${({ theme }) => theme.font.copy.bold};
          text-transform: uppercase;
          .number {
            color: ${({ theme }) => theme.color.navBarLinksListHover};
          }
        }
      }
    }
  }
  .section-3 {
    background-color: ${({ theme }) => theme.color.black};
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url('/images/locus/fallback/slide-3-background.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    color: ${({ theme }) => theme.color.white};
    h2 {
      font-size: 1.5em;
      margin: 0 auto 50px auto;
      max-width: 800px;
      @media ${({ theme }) => theme.breakpoint.sm} {
        font-size: 3em;
      }
    }
    p {
      font-size: 1em;
      margin: 0 auto 20px auto;
      max-width: 700px;
      @media ${({ theme }) => theme.breakpoint.sm} {
        font-size: 1.25em;
      }
      &:last-child {
        margin: 0 auto;
      }
    }
  }
  .section-4 {
    background-color: ${({ theme }) => theme.color.white};
    h2 {
      font-size: 2em;
      margin: 0 auto 50px auto;
      max-width: 800px;
      @media ${({ theme }) => theme.breakpoint.sm} {
        font-size: 3em;
      }
    }
    .link {
      background-color: ${({ theme }) => theme.color.navBarLinksListHover};
      color: ${({ theme }) => theme.color.white};
      font-weight: ${({ theme }) => theme.font.copy.bold};
      padding: 15px 30px;
      text-decoration: none;
      text-transform: uppercase;
      svg {
        height: auto;
        width: 1em;
      }
    }
  }
`

export default function Slides() {
  useEffect(() => {
    const navigationElement = document.getElementById('fp-nav')
    navigationElement.classList.add('fp-nav-white')
    return () => {
      document.getElementById('fullpage').remove()
    }
  }, [])

  const updateNavDotsStyling = (origin, destination, direction) => {
    const navigationElement = document.getElementById('fp-nav')
    if (destination.index === 1 || destination.index === 3) {
      navigationElement.classList.remove('fp-nav-white')
      navigationElement.classList.add('fp-nav-black')
    } else {
      navigationElement.classList.remove('fp-nav-black')
      navigationElement.classList.add('fp-nav-white')
    }
  }

  return (
    <SectionStyled>
      <ReactFullpage
        licenseKey={process.env.FULLPAGE_JS_LICENSE_KEY}
        onLeave={updateNavDotsStyling}
        scrollingSpeed={1000}
        navigation={true}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className='section section-1'>
                <ImgWebP
                  alt='locus logo'
                  fallback='/images/locus/fallback/logo-locus.png'
                  src='/images/locus/logo-locus.webp'
                />
                <h1>Create audiences with impact.</h1>
              </div>
              <div className='section section-2'>
                <h2>Delivering powerful results from where people go.</h2>
                <div className='items'>
                  <div className='item'>
                    <p className='title'>
                      <span className='number'>01 |</span> Get Visual
                    </p>
                    <p>
                      <b>
                        Leverage LOCUS location behaviour data to determine and
                        visually analyze your audiences.
                      </b>{' '}
                      Overlay physical locations and demographical factors to
                      create high-value custom audiences.
                    </p>
                  </div>
                  <div className='item'>
                    <p className='title'>
                      <span className='number'>02 |</span> Competitor Insights
                    </p>
                    <p>
                      <b>
                        Know more about your competitor’s customers than they
                        do.
                      </b>{' '}
                      Access information that’s otherwise impossible to obtain,
                      and compare your traffic with your competitors across
                      KPIs.
                    </p>
                  </div>
                  <div className='item'>
                    <p className='title'>
                      <span className='number'>03 |</span> Data Access
                    </p>
                    <p>
                      <b>
                        Access customized reporting and attribution metrics.
                      </b>{' '}
                      Plus, export your custom audiences for media buying
                      through our in-house platform or another media buying
                      partner.
                    </p>
                  </div>
                </div>
              </div>
              <div className='section section-3'>
                <h2>Uncover your blind spots.</h2>
                <p>
                  An individual may indicate a preference toward certain
                  behaviours, but their actions convey an entirely different
                  picture.
                </p>
                <p>
                  Nothing provides a more genuine indication of purchase intent
                  than location behaviour, and now you can access that with
                  LOCUS.
                </p>
              </div>
              <div className='section section-4'>
                <h2>Get LOCUS working for you.</h2>
                <Link href='/contact'>
                  <a className='link'>Book a demo</a>
                </Link>
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </SectionStyled>
  )
}
