import styled from 'styled-components'

const DivStyled = styled.div`
  margin: 0 auto ${({ theme }) => theme.spacing[12]}px auto;
  max-width: ${({ theme }) => theme.width.page};
  padding: ${({ theme }) => theme.spacing[1]}px 0;
  @media ${({ theme }) => theme.breakpoint.xs} {
    padding: ${({ theme }) => theme.spacing[2]}px 0;
  }
  @media ${({ theme }) => theme.breakpoint.sm} {
    padding: ${({ theme }) => theme.spacing[5]}px 0;
  }
  @media ${({ theme }) => theme.breakpoint.md} {
    padding: ${({ theme }) => theme.spacing[7]}px 0;
  }
  .divider {
    background-color: ${({ theme }) => theme.color.greyLight};
    height: 1px;
    margin: 0 auto;
    width: 66%;
  }
`

export default function Divider() {
  return (
    <DivStyled>
      <div className='divider' />
    </DivStyled>
  )
}
