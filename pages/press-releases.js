import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { ChevronLeft } from '@styled-icons/feather/ChevronLeft'
import { ChevronRight } from '@styled-icons/feather/ChevronRight'

import { getEntries } from '../api/contentful'

const Hero = dynamic(() => import('../components/shared/hero'))
const EntryPreview = dynamic(() =>
  import('../components/press-releases/entry-preview')
)

const ItemsStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: center;
  width: 100%;
`

const PaginationStyled = styled.div`
  margin: 0 auto;
  text-align: center;
  button {
    height: 30px;
    margin: 20px;
    width: 35px;
  }
`

const StyleNoContent = styled.div`
  margin: 20px auto;
  max-width: ${({ theme }) => theme.width.article};
  h2 {
    font-size: 2em;
  }
`

export default function PressReleases({ pressReleases }) {
  const [page, setPage] = useState(0)

  const ENTRIES_PER_PAGE = 5

  const nextPage = () => {
    if (page < Math.floor(pressReleases.length / ENTRIES_PER_PAGE)) {
      setPage(page + 1)
      window.scrollTo(0, 0)
    }
  }

  const previousPage = () => {
    if (page > 0) {
      setPage(page - 1)
      window.scrollTo(0, 0)
    }
  }

  if (!pressReleases.length) {
    return (
      <>
        <Hero
          imgSrc='/images/press-releases/fallback/hero.jpg'
          title='Press Releases'
        />
        <StyleNoContent>
          <h2>Error loading Press Releases, please try again.</h2>
        </StyleNoContent>
      </>
    )
  }

  return (
    <>
      <Hero
        imgSrc='/images/press-releases/fallback/hero.jpg'
        title='Press Releases'
      />
      <ItemsStyled>
        {pressReleases
          .slice(
            page * ENTRIES_PER_PAGE,
            page * ENTRIES_PER_PAGE + ENTRIES_PER_PAGE
          )
          .map((pressRelease, index) => {
            const props = {
              author: pressRelease.fields.author.fields.name,
              date: pressRelease.fields.date,
              excerpt: pressRelease.fields.excerpt,
              slug: pressRelease.fields.slug,
              title: pressRelease.fields.title
            }
            return <EntryPreview key={index} {...props} />
          })}
      </ItemsStyled>
      <PaginationStyled>
        <button disabled={page === 0 ? true : false} onClick={previousPage}>
          <ChevronLeft aria-label='left arrow' role='img' />
        </button>
        <button
          disabled={page === Math.floor(pressReleases.length / ENTRIES_PER_PAGE)}
          onClick={nextPage}
        >
          <ChevronRight aria-label='right arrow' role='img' />
        </button>
      </PaginationStyled>
    </>
  )
}

// This also gets called at build time
export async function getStaticProps() {
  const pressReleases = await getEntries('post', '4cuZTcGorM9T6djiI3JQ8l', true)

  // Pass post data to the page via props
  return { props: { pressReleases: pressReleases.items || [] } }
}
