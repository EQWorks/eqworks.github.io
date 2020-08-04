import styled from 'styled-components'

import * as StyleConstant from '../../utils/style-constants'
import { breakpoint } from '../../utils/style-breakpoints'

const SectionStyled = styled.section`
  ${breakpoint.sm`
    /* display: none; */
  `}
  ${breakpoint.md`
    /* display: none; */
  `}
`

const Section = () => {
  return (
    <SectionStyled>
      <p>Hello there</p>
    </SectionStyled>
  )
}

export default Section
