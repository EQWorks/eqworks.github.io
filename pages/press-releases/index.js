import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { ChevronLeft } from '@styled-icons/feather/ChevronLeft'
import { ChevronRight } from '@styled-icons/feather/ChevronRight'

import { getEntries } from '../../api/contentful'

const Hero = dynamic(() => import('../../components/shared/hero'))
const Preview = dynamic(() => import('../../components/press-releases/preview'))

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

export default function PressReleases({ pressReleasesData }) {
  const [pressReleases, setPressReleases] = useState(pressReleasesData)
  const [page, setPage] = useState(0)

  const TOTAL_PRESS_RELEASES = pressReleasesData.length
  const ENTRIES_PER_PAGE = 5

  const nextPage = () => {
    if (page < Math.floor(TOTAL_PRESS_RELEASES / ENTRIES_PER_PAGE)) {
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
            return <Preview key={index} {...props} />
          })}
      </ItemsStyled>
      <PaginationStyled>
        <button disabled={page === 0 ? true : false} onClick={previousPage}>
          <ChevronLeft aria-label='left arrow' role='img' />
        </button>
        <button
          disabled={
            page === Math.floor(TOTAL_PRESS_RELEASES / ENTRIES_PER_PAGE)
              ? true
              : false
          }
          onClick={nextPage}
        >
          <ChevronRight aria-label='right arrow' role='img' />
        </button>
      </PaginationStyled>
    </>
  )
}

export async function getStaticProps() {
  const pressReleasesData = await getEntries('post', '4cuZTcGorM9T6djiI3JQ8l')

  return {
    props: {
      pressReleasesData
    }
  }
}
