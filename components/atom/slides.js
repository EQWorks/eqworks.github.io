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
      url('/images/atom/fallback/slide-1-background.jpg');
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
      margin: 0 auto 50px auto;
      max-width: 700px;
      @media ${({ theme }) => theme.breakpoint.sm} {
        font-size: 1.25em;
      }
      &:last-child {
        margin: 0 auto;
      }
    }
  }
  .section-3 {
    background-color: ${({ theme }) => theme.color.black};
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url('/images/atom/fallback/slide-3-background.jpg');
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
      margin: 0 auto;
      max-width: 700px;
      @media ${({ theme }) => theme.breakpoint.sm} {
        font-size: 1.25em;
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
                  alt='atom logo'
                  fallback='/images/atom/fallback/logo-atom.png'
                  src='/images/atom/logo-atom.webp'
                />
                <h1>The next generation of media buying.</h1>
              </div>
              <div className='section section-2'>
                <h2>The most advanced location-based media buying tool.</h2>
                <p>
                  Our proprietary self-serve programmatic solution and the most
                  advanced location-based advertising tool – all rolled into
                  one.
                </p>
                <p>
                  Execute on desktop and mobile based on preset location-powered
                  audiences or build your own from various geographical and
                  demographic inputs, plus get powerful advertising insights on
                  our very own reporting dashboard.
                </p>
              </div>
              <div className='section section-3'>
                <h2>Gain powerful insights.</h2>
                <p>
                  Get the metrics you need to make smart decisions with
                  comprehensive data, covering geo-locations, times of day,
                  creatives, domains, apps, operating systems and device types,
                  session depth, and much more.
                </p>
              </div>
              <div className='section section-4'>
                <h2>Get ahead with Atom.</h2>
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
