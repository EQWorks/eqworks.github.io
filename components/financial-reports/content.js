import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components'

import UnorderedList from './unordered-list'

const SectionStyled = styled.section`
  color: ${({ theme }) => theme.color.greyMedium};
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width.article};
  padding: 40px 20px 40px 20px;
  @media ${({ theme }) => theme.breakpoint.xs} {
    justify-content: flex-start;
  }
`

export default function Content({ financialReports }) {
  const dtrOptions = {
    renderNode: {
      [BLOCKS.HR]: (node) => {
        return null
      },
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
