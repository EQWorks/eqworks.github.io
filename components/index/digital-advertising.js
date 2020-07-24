import Link from 'next/link'
import styled from 'styled-components'

import * as StyleConstant from '../../utils/style-constants'
import { breakpoint } from '../../utils/style-breakpoints'

const SectionStyled = styled.section`
  margin: 0 auto;
  max-width: ${StyleConstant.width.page};
  padding: 40px 20px;
  .top {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 0 20px 0;
    .left {
      text-align: center;
      width: 100%;
      ${breakpoint.sm`
        width: 33%;
      `}
    }
    .right {
      width: 100%;
      ${breakpoint.sm`
        width: 66%;
      `}
      p {
        margin: 0 0 20px 0;
      }
      .grey {
        color: ${StyleConstant.color.greyLight};
      }
      .subtitle {
        font-family: copyBold, sans-serif;
      }
    }
  }
  .bottom {
    ${breakpoint.sm`
      align-items: flex-start;
      display: flex;
      justify-content: center;
    `}
    a {
      background-color: ${StyleConstant.color.NavBarLinksListHover};
      border: none;
      color: ${StyleConstant.color.white};
      cursor: pointer;
      display: inline-block;
      font-size: 0.75em;
      margin: 0 0 40px 0;
      padding: 20px 40px;
      text-decoration: none;
      text-transform: uppercase;
      transition: all 0.25s ease-out;
      &:hover {
        background-color: ${StyleConstant.color.black};
      }
    }
    div {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      ${breakpoint.sm`
        padding: 0 20px;
        text-align: center;
      `}
    }
    img {
      max-width: 200px;
      ${breakpoint.sm`
        height: 50px;
        max-width: 100%;
        width: auto;
      `}
    }
    .grey {
      color: ${StyleConstant.color.greyLight};
      margin: 0 0 20px 0;
    }
    .title {
      font-family: copyBold, sans-serif;
      margin: 20px 0;
      text-transform: uppercase;
    }
  }
`

export default function DigitalAdvertising() {
  return (
    <SectionStyled>
      <div className='top'>
        <div className='left'>
          <img
            alt='abstract cube icon'
            src='/images/index/digital-advertising-cube.png'
          />
        </div>
        <div className='right'>
          <h2>Simplify your digital advertising</h2>
          <p className='subtitle'>
            Our product lineup means you get the best of <i>all</i> worlds – in
            one place.
          </p>
          <p className='grey'>
            We incorporate the value of location behaviour and the EQ data
            advantage into each step of the advertising process for maximum –
            and undeniable – results.
          </p>
          <p className='grey'>
            From media buying and targeted audience creation to campaign
            measurement, exploring your options elsewhere is no longer a
            requirement.
          </p>
        </div>
      </div>
      <div className='bottom'>
        <div>
          <img
            alt='atom logo'
            src='/images/index/digital-advertising-atom.png'
          />
          <p className='title'>Media buying</p>
          <p className='grey'>
            Proprietary self-serve platform allows brands to wield the power of
            programmatic digital advertising through the same technology
            employed by Fortune 500 companies.
          </p>
          <Link href='/atom'>
            <a>Learn more</a>
          </Link>
        </div>
        <div>
          <img
            alt='locus logo'
            src='/images/index/digital-advertising-locus.png'
          />
          <p className='title'>Audience creation</p>
          <p className='grey'>
            Unique first-party audience segments based on where people go. Use
            location behaviour to create, target, and analyze audiences and
            provide deep customer insights.
          </p>
          <Link href='/locus'>
            <a>Learn more</a>
          </Link>
        </div>
        <div>
          <img
            alt='visilink logo'
            src='/images/index/digital-advertising-visilink.png'
          />
          <p className='title'>Ad verification</p>
          <p className='grey'>
            First of its kind, Visilink is the most effective way to measure the
            performance of a digital campaign and uncover the right strategy for
            your brand.
          </p>
          <Link href='/visilink'>
            <a>Learn more</a>
          </Link>
        </div>
      </div>
    </SectionStyled>
  )
}
