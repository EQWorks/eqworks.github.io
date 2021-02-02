import styled, { useTheme } from 'styled-components'
import * as React from 'react'

import Button from '../shared/button'

const SectionStyled = styled.section`
  color: ${({ theme }) => theme.color.black};
  font-size: ${(props) => (props.largeFont ? '2em' : '1em')};
  text-align: center;
  margin: 0 auto ${({ theme }) => theme.spacing[12]}px auto;
  max-width: ${({ theme }) => theme.width.page};
  padding: 0 ${({ theme }) => theme.spacing[2]}px;
  h2 {
    margin: 0 auto ${({ theme }) => theme.spacing[3]}px auto;
    text-transform: uppercase;
    @media ${({ theme }) => theme.breakpoint.md} {
      margin: 0 0 ${({ theme }) => theme.spacing[3]}px 0;
    }
  }
  @media ${({ theme }) => theme.breakpoint.md} {
    align-items: center;
    display: flex;
    justify-content: space-between;
    text-align: left;
  }
  .left {
    margin: 0 auto ${({ theme }) => theme.spacing[5]}px auto;
    @media ${({ theme }) => theme.breakpoint.md} {
      margin: 0;
      padding: 0 ${({ theme }) => theme.spacing[2]}px 0 0;
      /* width: 40%; */
    }
    .divider {
      background-color: ${({ theme }) => theme.color.blue};
      height: 5px;
      margin: 0 auto ${({ theme }) => theme.spacing[3]}px auto;
      width: 100px;
      @media ${({ theme }) => theme.breakpoint.md} {
        margin: 0 0 ${({ theme }) => theme.spacing[3]}px 0;
      }
    }
    .subtitle {
      font-size: 1.15em;
      margin: 0 auto ${({ theme }) => theme.spacing[3]}px auto;
    }
    .text {
      margin: 0 auto ${({ theme }) => theme.spacing[3]}px auto;
    }
    .subtitle,
    .text {
      max-width: 500px;
      @media ${({ theme }) => theme.breakpoint.md} {
        margin: 0 0 ${({ theme }) => theme.spacing[3]}px 0;
        /* max-width: 400px; */
      }
    }
  }
  .right {
    @media ${({ theme }) => theme.breakpoint.md} {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0;
    }
    img {
      max-width: 500px;
      width: 100%;
      @media ${({ theme }) => theme.breakpoint.md} {
        max-width: 100%;
      }
    }
  }
`

export default function Creative() {
  const theme = useTheme()
  const [width, setWidth] = React.useState(null)

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <SectionStyled>
      <div className='left'>
        {width < theme.breakpointValue.md && (
          <h2>Award-Winning Omni-Channel Creative</h2>
        )}
        {width >= theme.breakpointValue.md && (
          <h2>
            <span className='color-blue'>Award-Winning</span>
            <br />
            Omni-Channel Creative
          </h2>
        )}
        <div className='divider' />
        <p className='subtitle'>
          A Canadian-based Creative Studio here to help cut through marketing
          noise and influence customers to drive real&nbsp;results.
        </p>
        <p className='text'>
          Our in-house studio includes bespoke custom ads on campaigns that
          develop positive moments and build brand&nbsp;loyalty.
        </p>
        <Button href='/contact' text='Contact us' />
      </div>
      <div className='right'>
        <img
          alt='Multiple devices (desktop monitor, laptop, tablet, and mobile) displaying an ad unit at difference sizes.'
          src='/images/index/fallback/creative-devices.jpg'
        />
      </div>
    </SectionStyled>
  )
}
