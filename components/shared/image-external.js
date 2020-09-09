import styled from 'styled-components'

const SectionStyled = styled.section`
  img {
    max-width: 100%;
  }
`

export default function ImageExternal({ data }) {
  return (
    <SectionStyled>
      <img alt={data.title} src={data.imageUrl} />
      <p>
        Source:{' '}
        <a href={data.imageUrl} samesite='none' secure='true' target='_blank'>
          {data.sourceName}
        </a>
      </p>
    </SectionStyled>
  )
}
