import Link from 'next/link'
import styled from 'styled-components'

const SectionStyled = styled.section`
  color: ${({ theme }) => theme.color.black};
  font-size: ${(props) => (props.largeFont ? '2em' : '1em')};
  @media ${({ theme }) => theme.breakpoint.sm} {
    /* display: none; */
  }
`

export default function ListItem({ data }) {
  return (
    <SectionStyled>
      <ul>
        {data.map((listItem, index) => {
          return (
            <li key={index}>
              <Link
                href={
                  listItem.content[0].content[1].data.target.fields.file.url
                }
              >
                <a target='_blank'>
                  {listItem.content[0].content[1].content[0].value}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </SectionStyled>
  )
}
