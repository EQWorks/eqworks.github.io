import Link from 'next/link'
import styled from 'styled-components'

const SectionStyled = styled.section`
  font-size: ${(props) => (props.largeFont ? '2em' : '1em')};
  width: 100%;
  @media ${({ theme }) => theme.breakpoint.xs} {
    margin: 20px 40px;
    width: auto;
  }
  @media ${({ theme }) => theme.breakpoint.md} {
    margin: 20px 40px;
  }
  ul {
    list-style-type: none;
    margin: 0 0 40px 0;
    padding: 0;
    li {
      margin: 0 0 10px 0;
      a {
        color: ${({ theme }) => theme.color.black};
        font-weight: ${({ theme }) => theme.font.copy.medium};
        text-decoration: none;
      }
      h2 {
        color: ${({ theme }) => theme.color.black};
        font-size: 1.75em;
        margin: 0 0 15px 0;
      }
      .divider {
        background-color: ${({ theme }) => theme.color.navBarLinksListHover};
        height: 5px;
        margin: 0 0 20px 0;
        width: 50px;
      }
    }
  }
`

export default function ListItem({ data }) {
  return (
    <SectionStyled>
      <ul>
        {data.map((listItem, index) => {
          return (
            <li key={index}>
              {index === 0 && (
                <>
                  <h2>{listItem.content[0].content[0].value}</h2>
                  <div className='divider' />
                </>
              )}
              {index !== 0 && (
                <Link
                  href={
                    listItem.content[0].content[1].data.target.fields.file.url
                  }
                >
                  <a target='_blank'>
                    {listItem.content[0].content[1].content[0].value}
                  </a>
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </SectionStyled>
  )
}
