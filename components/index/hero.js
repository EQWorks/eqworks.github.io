import { Newspaper } from '@styled-icons/fa-solid/Newspaper'
import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'

const SectionStyled = styled.section`
  background-color: ${({ theme }) => theme.color.blue};
  padding: 0;
  .content {
    align-items: center;
    /* background: rgba(0, 0, 0, 0.5); */
    box-sizing: border-box;
    color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    height: calc(100vh - ${({ theme }) => theme.height.navBar});
    justify-content: center;
    min-height: 600px;
    padding: 0 ${({ theme }) => theme.spacing[3]}px;
    position: relative;
    width: 100%;
    text-align: center;
    z-index: ${({ theme }) => theme.zIndex.pageContent};
    @media ${({ theme }) => theme.breakpoint.sm} {
      height: 100vh;
    }
    h1 {
      font-size: 2em;
      font-weight: ${({ theme }) => theme.font.regular};
      margin: 0 0 ${({ theme }) => theme.spacing[4]}px 0;
      text-transform: uppercase;
      @media ${({ theme }) => theme.breakpoint.xs} {
        font-size: 2.5em;
      }
      @media ${({ theme }) => theme.breakpoint.sm} {
        line-height: 1em;
        font-size: 3em;
      }
    }
    p {
      max-width: ${({ theme }) => theme.width.article};
    }
    .divider {
      background-color: ${({ theme }) => theme.color.white};
      height: 5px;
      margin: 0 0 ${({ theme }) => theme.spacing[4]}px 0;
      width: 100px;
    }
    .footer {
      align-items: center;
      bottom: 0;
      display: flex;
      margin: 0 auto ${({ theme }) => theme.spacing[4]}px auto;
      position: absolute;
      text-align: center;
      a {
        align-items: center;
        color: ${({ theme }) => theme.color.white};
        display: flex;
        text-decoration: none;
        .icon {
          align-items: center;
          border: 2px solid ${({ theme }) => theme.color.white};
          border-radius: 100%;
          display: flex;
          margin: 0 ${({ theme }) => theme.spacing[3]}px 0 0;
        }
        svg {
          color: ${({ theme }) => theme.color.white};
          padding: ${({ theme }) => theme.spacing[2]}px;
          width: 20px;
        }
      }
    }
    .subtitle-1 {
      margin: 0 auto ${({ theme }) => theme.spacing[3]}px auto;
    }
  }
  .video {
    /* bottom: 0; */
    height: 100vh;
    /* min-height: 100%; */
    /* min-width: 100%; */
    position: absolute;
    right: 0;
    top: ${({ theme }) => theme.height.navBar};
    /* width: 100%; */
    z-index: ${({ theme }) => theme.zIndex.indexHeroVideo};
    @media ${({ theme }) => theme.breakpoint.sm} {
      top: 0;
    }
  }
`

export default function Hero() {
  const sectionElement = React.useRef(null)
  const videoElement = React.useRef(null)

  React.useLayoutEffect(() => {
    function updateSize() {
      videoElement.current.style.height = `${sectionElement.current.clientHeight}px`
    }
    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return (
    <SectionStyled ref={sectionElement}>
      <div
        aria-label='Scrolling animated graphics of charts and graphs.'
        className='content'
      >
        <h1>Bring Data to Life with EQ&nbsp;Works</h1>

        <div className='divider' />

        <p className='subtitle-1'>
          EQ enables businesses to{' '}
          <span className='font-weight-bold'>Understand</span>,{' '}
          <span className='font-weight-bold'>Predict</span>, and{' '}
          <span className='font-weight-bold'>Influence</span>{' '}
          customer&nbsp;behaviour.
        </p>

        <p>
          Using unique data sets, advanced analytics, machine learning, and
          artificial intelligence, integrated into our proprietary DMP & DSP, EQ
          is trusted by some of the world’s largest&nbsp;brands.
        </p>

        <div className='footer'>
          <Link href='/press-releases'>
            <a>
              <div className='icon'>
                <Newspaper aria-label='Newspaper.' role='img' />
              </div>
              <p>Read our latest news »</p>
            </a>
          </Link>
        </div>
      </div>

      <video
        autoPlay
        className='video'
        muted
        loop
        playsInline
        ref={videoElement}
      >
        <source src='/video/index/hero.mp4' type='video/mp4' />
      </video>
    </SectionStyled>
  )
}
