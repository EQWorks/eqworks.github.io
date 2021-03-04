import Link from 'next/link'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  background-color: ${(props) =>
    props.secondary
      ? ({ theme }) => theme.color.greyBorder
      : ({ theme }) => theme.color.blue};
  color: ${(props) =>
    props.secondary
      ? ({ theme }) => theme.color.black
      : ({ theme }) => theme.color.white};
  cursor: pointer;
  font-size: 0.9em;
  padding: ${({ theme }) => theme.spacing[2]}px
    ${({ theme }) => theme.spacing[5]}px;
  text-transform: uppercase;
  transition: all 0.25s ease-out;
  &:hover {
    background-color: ${(props) =>
      props.secondary
        ? ({ theme }) => theme.color.greyTextFooter
        : ({ theme }) => theme.color.blueDark};
    color: ${({ theme }) => theme.color.white};
    a {
      color: ${({ theme }) => theme.color.white};
    }
  }
  a {
    color: ${(props) =>
      props.secondary
        ? ({ theme }) => theme.color.black
        : ({ theme }) => theme.color.white};
    text-decoration: none;
  }
`

export default function Button({ href, secondary, text, ...props }) {
  if (href) {
    return (
      <ButtonStyled {...props} secondary={secondary}>
        <Link href={href}>
          <a className='font-weight-bold'>{text} »</a>
        </Link>
      </ButtonStyled>
    )
  }

  return (
    <ButtonStyled {...props} secondary={secondary}>
      {text} »
    </ButtonStyled>
  )
}
