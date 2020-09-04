import styled from 'styled-components'

const ParagraphStyled = styled.p`
  margin: 0 0 20px 0;
`

export default function ReadingTime({ data }) {
  // get all content as a single string
  let stringOfContent = ''
  data.map((item) => {
    if (item.content.length > 0) {
      if (typeof item.content[0].value === 'string') {
        stringOfContent += item.content[0].value
      }
    }
  })
  // strip any trailing white space
  const strippedString = stringOfContent.replace(/^\s+/, '').replace(/\s+$/, '')
  // split string into array by spaces
  const wordCount = strippedString.split(' ').length
  // divide array count by average number of words read per minute
  const readingTime = Math.floor(wordCount / 225) + 1
  return <ParagraphStyled>{readingTime} minute read</ParagraphStyled>
}
