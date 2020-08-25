import styled from 'styled-components'

const ImageStyled = styled.img`
  max-width: 100%;
`

export default function Image({ data }) {
  return (
    <ImageStyled
      alt={data.alt}
      style={{ width: data.file.details.image.width }}
      src={data.file.url}
    />
  )
}
