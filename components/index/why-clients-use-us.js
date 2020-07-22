import styled from 'styled-components'
import { Map } from '@styled-icons/feather/Map'
import { User } from '@styled-icons/feather/User'
import { ShoppingBag } from '@styled-icons/feather/ShoppingBag'
import { Target } from '@styled-icons/feather/Target'
import { BarChart2 } from '@styled-icons/feather/BarChart2'

import * as GlobalStyles from '../../utils/style-variables'
import { breakpoint } from '../../utils/style-breakpoints'

const SectionStyled = styled.section`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: ${GlobalStyles.width.page};
  padding: 20px;
  div {
    margin: 0 0 30px 0;
    text-align: center;
    width: 100%;
    ${breakpoint.xs`
      width: 50%;
      &:first-child {
        width: 100%;
      }
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
    width: 50px;
  }
  .title {
    font-family: titleBold, sans-serif;
    font-size: 1.5em;
    margin: 0 0 20px 0;
  }
`

export default function WhyClientsUseUs() {
  return (
    <SectionStyled>
      <div>
        <p className='title'>Why clients use us</p>
      </div>
      <div>
        <Map />
        <p>Location behaviour</p>
      </div>
      <div>
        <User />
        <p>Audience creation</p>
      </div>
      <div>
        <ShoppingBag />
        <p>Media buying</p>
      </div>
      <div>
        <Target />
        <p>Verified walk-ins</p>
      </div>
      <div>
        <BarChart2 />
        <p>Verified walk-ins</p>
      </div>
    </SectionStyled>
  )
}
