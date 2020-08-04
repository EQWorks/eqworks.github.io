import styled from 'styled-components'

import * as StyleConstant from '../../utils/style-constants'
import { breakpoint } from '../../utils/style-breakpoints'

const SectionStyled = styled.section`
  align-items: center;
  background-color: ${StyleConstant.color.black};
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/marketers/hero.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${StyleConstant.color.white};
  display: flex;
  height: 400px;
  justify-content: center;
  padding: 0 20px;
  ${breakpoint.sm`
    height: 500px;
  `}
  h1 {
    font-size: 2em;
    text-align: center;
    ${breakpoint.sm`
      font-size: 3.5em;
      max-width: 700px;
    `}
  }
`

const Hero = () => {
  return (
    <SectionStyled>
      <h1>Marketers looking for results partner with EQ.</h1>
    </SectionStyled>
  )
}

export default Hero
