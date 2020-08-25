import styled from 'styled-components'
import { HardDrive } from '@styled-icons/feather/HardDrive'
import { MapPin } from '@styled-icons/feather/MapPin'
import { Smile } from '@styled-icons/feather/Smile'

import ImgWebP from '../shared/img-webp'

const SectionStyled = styled.section`
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(3, 78, 144, 0.9) 0%,
    rgba(25, 180, 215, 0.9) 100%
  );
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 20px;
  .left {
    text-align: center;
    width: 100%;
    @media ${({ theme }) => theme.breakpoint.sm} {
      width: 33%;
    }
    img {
      height: auto;
      margin: 0 auto;
      max-width: 300px;
      width: 100%;
    }
  }
  .right {
    width: 100%;
    @media ${({ theme }) => theme.breakpoint.sm} {
      width: 66%;
    }
    h2 {
      margin: 0 0 20px 0;
    }
    .bottom {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      @media ${({ theme }) => theme.breakpoint.sm} {
        justify-content: flex-start;
      }
      div {
        margin: 30px 0 0 0;
        text-align: center;
        width: 100%;
        @media ${({ theme }) => theme.breakpoint.sm} {
          text-align: left;
          width: 33%;
        }
        @media ${({ theme }) => theme.breakpoint.md} {
          text-align: left;
          width: 25%;
        }
        svg {
          height: auto;
          margin: 0 0 10px 0;
          width: 40px;
        }
        .bold {
          font-family: ${({ theme }) => theme.font.copy.name}, sans-serif;
          font-weight: ${({ theme }) => theme.font.copy.bold};
        }
      }
    }
    .top {
      text-align: center;
      @media ${({ theme }) => theme.breakpoint.sm} {
        text-align: left;
      }
      p {
        margin: 0 auto;
        max-width: 400px;
        @media ${({ theme }) => theme.breakpoint.sm} {
          margin: 0;
          max-width: 600px;
        }
      }
    }
  }
`

export default function ConnectedDevices() {
  return (
    <SectionStyled>
      <div className='left'>
        <ImgWebP
          alt='abstract map of north america with a smartphone overlayed'
          fallback='images/index/fallback/connected-devices.png'
          src='images/index/connected-devices.webp'
        />
      </div>
      <div className='right'>
        <div className='top'>
          <h2>
            350,000,000
            <br />
            Connected devices
          </h2>
          <p>
            With data from over 350,000,000 devices across North America, we are
            able to discern and leverage location behaviour in ways our
            competitors can only dream of.
          </p>
        </div>
        <div className='bottom'>
          <div>
            <MapPin aria-label='map pin' role='img' />
            <p>
              <span className='bold'>40,000,000</span>
              <br />
              Points of interest
            </p>
          </div>
          <div>
            <Smile aria-label='smiley face' role='img' />
            <p>
              <span className='bold'>300,000 +</span>
              <br />
              App integrations
            </p>
          </div>
          <div>
            <HardDrive aria-label='hard drive disk' role='img' />
            <p>
              <span className='bold'>7 TB</span>
              <br />
              Data daily
            </p>
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}
