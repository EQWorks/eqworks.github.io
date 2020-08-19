import React, { useLayoutEffect, useState } from 'react'
import Link from 'next/link'
import { Document, Page } from 'react-pdf'
import styled from 'styled-components'
import { ChevronLeft } from '@styled-icons/feather/ChevronLeft'
import { ChevronRight } from '@styled-icons/feather/ChevronRight'

import * as StyleConstant from '../../utils/style-constants'

const SectionStyled = styled.div`
  background-color: ${StyleConstant.color.white};
  display: flex;
  flex-direction: column;
  margin: 0 0 10px 0;
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
    .react-pdf__Page__annotations {
      height: 0;
    }
    .react-pdf__Page__canvas {
      border-radius: 8px;
      height: auto !important;
      width: 100% !important;
    }
    .react-pdf__Page__svg {
      border-radius: 8px;
      height: auto !important;
      width: 100% !important;
      svg {
        border-radius: 8px;
        height: auto;
        width: 100%;
      }
    }
    .react-pdf__Page__textContent {
      height: 0 !important;
      width: 0 !important;
      span {
        font-size: 0 !important;
      }
    }
  }
`

const PDF = ({ id, url }) => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [pdfHeight, setPdfHeight] = useState(0)

  useLayoutEffect(() => {
    window.addEventListener('resize', updateHeight)
    updateHeight()
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  const onRenderSuccess = () => {
    updateHeight()
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

  const updateHeight = () => {
    const pdfHeight = document.getElementById(`pdf-${id}`).clientHeight
    const controlsHeight = document.getElementById(`controls-${id}`)
      .clientHeight
    setPdfHeight(pdfHeight + controlsHeight)
  }

  return (
    <SectionStyled style={{ height: pdfHeight }}>
      <div id={`pdf-${id}`}>
        <Document
          file={url}
          onLoadError={console.error}
          onLoadSuccess={onDocumentLoadSuccess}
          renderMode='svg'
        >
          <Page onRenderSuccess={onRenderSuccess} pageNumber={pageNumber} />
        </Document>
      </div>
      <div id={`controls-${id}`}>
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
      </div>
    </SectionStyled>
  )
}

export default PDF
