import { Newspaper } from '@styled-icons/fa-solid/Newspaper'
import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'

const SectionStyled = styled.section`
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  box-sizing: border-box;
  height: calc(100vh - ${({ theme }) => theme.height.navBar});
  justify-content: center;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[2]}px;
  text-align: center;
  @media ${({ theme }) => theme.breakpoint.sm} {
    height: calc(100vh - ${({ theme }) => theme.height.navBarMD});
  }
  @media ${({ theme }) => theme.breakpoint.md} {
    margin: 0 auto ${({ theme }) => theme.spacing[12]}px auto;
  }
  .content {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: ${({ theme }) => theme.zIndex.pageContent};
    h1 {
      margin: 0 0 ${({ theme }) => theme.spacing[4]}px 0;
      text-transform: uppercase;
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
      display: none;
      margin: 0 auto ${({ theme }) => theme.spacing[4]}px auto;
      position: absolute;
      text-align: center;
      @media ${({ theme }) => theme.breakpointVertical.xs} {
        display: flex;
      }
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
          margin: 0 ${({ theme }) => theme.spacing[2]}px 0 0;
        }
        svg {
          color: ${({ theme }) => theme.color.white};
          padding: ${({ theme }) => theme.spacing[1]}px;
          width: 20px;
        }
      }
    }
    .subtitle-1 {
      margin: 0 auto ${({ theme }) => theme.spacing[2]}px auto;
    }
  }
  .video-container {
    box-sizing: border-box;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    video {
      box-sizing: border-box;
      left: 50%;
      min-height: 100%;
      min-width: 100%;
      object-fit: cover;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
    }
  }
  .video-container:after {
    /* background: rgba(0, 0, 0, 0.5); */
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
    top: 0;
    z-index: ${({ theme }) => theme.zIndex.indexHeroVideo};
  }
`

export default function Hero() {
  return (
    <SectionStyled>
      <div className='video-container'>
        <video autoPlay className='video' muted loop playsInline>
          <source src='/video/index/hero.mp4' type='video/mp4' />
        </video>
      </div>

      <div className='content'>
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
    </SectionStyled>
  )
}
