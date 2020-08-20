import styled from 'styled-components'

import { breakpoint } from '../../utils/style-breakpoints'

const SectionStyled = styled.section`
  color: ${({ theme }) => theme.color.white};
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
