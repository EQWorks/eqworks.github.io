import styled from 'styled-components'

import Button from '../shared/button'

const SectionStyled = styled.section`
  border: 1px solid red;
  color: ${({ theme }) => theme.color.black};
  font-size: ${(props) => (props.largeFont ? '2em' : '1em')};
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacing[2]}px;
  h2 {
    margin: 0 auto ${({ theme }) => theme.spacing[2]}px auto;
  }
  @media ${({ theme }) => theme.breakpoint.sm} {
    /* display: none; */
  }
  .left {
    .divider {
      background-color: ${({ theme }) => theme.color.blue};
      height: 5px;
      margin: 0 auto ${({ theme }) => theme.spacing[2]}px auto;
      width: 100px;
      @media ${({ theme }) => theme.breakpoint.md} {
        margin: 0 0 ${({ theme }) => theme.spacing[2]}px 0;
      }
    }
    .subtitle {
      font-size: 1.15em;
      margin: 0 auto ${({ theme }) => theme.spacing[2]}px auto;
    }
    .text {
      margin: 0 auto ${({ theme }) => theme.spacing[2]}px auto;
    }
  }
`

export default function Creative() {
  return (
    <SectionStyled>
      <div className='left'>
        <h2>Award-Winning Omni-Channel Creative</h2>
        <div className='divider' />
        <p className='subtitle'>
          A Canadian-based Creative Studio here to help cut
          through marketing noise and influence customers to drive real&nbsp;results.
        </p>
        <p className='text'>
          Our in-house studio includes bespoke custom ads on campaigns that
          develop positive moments and build brand&nbsp;loyalty.
        </p>
        <Button href='/contact' text='EQ Studio' />
      </div>
      <div className='right'>
        <img
          alt='Multiple devices (desktop monitor, laptop, tablet, and mobile) displaying an ad unit at difference sizes.'
          src='/images/index/fallback/creative-devices.png'
        />
      </div>
    </SectionStyled>
  )
}
