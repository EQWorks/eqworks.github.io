import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components'

import UnorderedList from './unordered-list'

const SectionStyled = styled.section`
  color: ${({ theme }) => theme.color.greyLight};
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width.article};
  padding: 40px 20px 40px 20px;
  h2 {
    color: ${({ theme }) => theme.color.black};
    font-size: 1.75em;
    margin: 0 0 20px 0;
  }
`

export default function Content({ financialReports }) {
  const dtrOptions = {
    renderNode: {
      [BLOCKS.UL_LIST]: (node) => {
        return <UnorderedList data={node.content} />
      }
    }
  }

  return (
    <SectionStyled>
      {documentToReactComponents(financialReports.content, dtrOptions)}
    </SectionStyled>
  )
}
