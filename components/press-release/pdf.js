import React, { useState } from 'react'
import Link from 'next/link'
import { Document, Page } from 'react-pdf'
import styled from 'styled-components'
import { ChevronLeft } from '@styled-icons/feather/ChevronLeft'
import { ChevronRight } from '@styled-icons/feather/ChevronRight'

import * as StyleConstant from '../../utils/style-constants'

const SectionStyled = styled.div`
  max-width: 100%;
  text-align: center;
  .controls {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px auto 0 auto;
    max-width: 200px;
    width: 100%;

    svg {
      color: ${StyleConstant.color.black};
      cursor: pointer;
      height: auto;
      margin: 0 auto;
      transition: all 0.25s ease-out;
      width: 40px;
      &:hover {
        color: ${StyleConstant.color.NavBarLinksListHover};
      }
    }
    .disabled {
      color: ${StyleConstant.color.greyLight};
      cursor: default;
      &:hover {
        color: ${StyleConstant.color.greyLight};
      }
    }
    .page-numbers {
      font-feature-settings: 'tnum';
      font-variant-numeric: tabular-nums;
      text-align: center;
      margin: 0 auto;
    }
  }
  .link {
    a {
      margin: 0 auto;
    }
  }
  .react-pdf__Page {
    border: 1px solid ${StyleConstant.color.greyLight};
    border-radius: 8px;
    margin: 0 auto;
    max-width: 500px;
    position: relative;
    user-select: none;
    width: 100%;
    .react-pdf__Page__textContent {
      height: 100% !important;
      max-width: 500px;
    }
    .react-pdf__Page__svg {
      border-radius: 8px;
      height: auto !important;
      width: auto !important;
    }
    svg {
      background-color: ${StyleConstant.color.white};
      border-radius: 8px;
      display: block;
      height: auto;
      max-width: 500px;
      width: 100%;
    }
  }
`

const PDF = ({ url }) => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1)
    }
  }

  const previousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1)
    }
  }

  return (
    <SectionStyled>
      <Document
        file={url}
        onLoadError={console.error}
        onLoadSuccess={onDocumentLoadSuccess}
        renderMode='svg'
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className='controls'>
        <ChevronLeft
          aria-label='left arrow'
          className={pageNumber === 1 ? 'disabled' : null}
          onClick={previousPage}
          role='img'
        />
        <p className='page-numbers'>
          {pageNumber} of {numPages}
        </p>
        <ChevronRight
          aria-label='right arrow'
          className={pageNumber === numPages ? 'disabled' : null}
          onClick={nextPage}
          role='img'
        />
      </div>
      <div className='link'>
        <Link href={url}>
          <a target='_blank'>View file</a>
        </Link>
      </div>
    </SectionStyled>
  )
}

export default PDF
