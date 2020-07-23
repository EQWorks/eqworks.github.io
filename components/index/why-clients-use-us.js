import styled from 'styled-components'
import { Map } from '@styled-icons/feather/Map'
import { User } from '@styled-icons/feather/User'
import { ShoppingBag } from '@styled-icons/feather/ShoppingBag'
import { Target } from '@styled-icons/feather/Target'
import { BarChart2 } from '@styled-icons/feather/BarChart2'

import * as GlobalStyles from '../../utils/style-constants'
import { breakpoint } from '../../utils/style-breakpoints'

const SectionStyled = styled.section`
  padding: 40px 0 0 0;
  text-align: center;
  .icons {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    max-width: ${GlobalStyles.width.page};
    padding: 0 20px;
    text-transform: uppercase;
    div {
      margin: 0 0 30px 0;
      text-align: center;
      width: 100%;
      ${breakpoint.xs`
        width: 50%;
      `}
      ${breakpoint.sm`
        width: 33%;
      `}
      ${breakpoint.md`
        width: 20%;
      `}
    }
    svg {
      height: auto;
      padding: 0 0 20px 0;
      width: 50px;
    }
  }
  .image {
    height: 100%;
    padding: 40px 0 0 0;
    width: 100%;
    div {
      background-image: url('/images/index/why-clients-use-us.jpg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 200px;
      width: 100%;
    }
  }
  .title {
    margin: 0 0 20px 0;
    padding: 0 20px;
    h2 {
      font-family: titleBold, sans-serif;
      font-size: 1.5em;
    }
  }
`

export default function WhyClientsUseUs() {
  return (
    <SectionStyled>
      <div className='title'>
        <h2>Why clients use us</h2>
      </div>
      <div className='icons'>
        <div>
          <Map aria-label='generic map' role='img' />
          <p>Location behaviour</p>
        </div>
        <div>
          <User aria-label='user icon' />
          <p>Audience creation</p>
        </div>
        <div>
          <ShoppingBag aria-label='shopping bag' role='img' />
          <p>Media buying</p>
        </div>
        <div>
          <Target aria-label='target' role='img' />
          <p>Verified walk-ins</p>
        </div>
        <div>
          <BarChart2 aria-label='bar graph' role='img' />
          <p>Verified walk-ins</p>
        </div>
      </div>
      <div className='image'>
        <div aria-label='person looking through a camera' role='img' />
      </div>
    </SectionStyled>
  )
}
