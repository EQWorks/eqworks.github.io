import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Slider from 'react-slick'
import styled from 'styled-components'

// import ImgWebP from '../shared/img-webp'

const SectionStyled = styled.section`
  .carousel {
    background-color: ${({ theme }) => theme.color.black};
    .item {
      align-items: center;
      display: flex !important;
      height: 100vh;
      justify-content: center;
      margin: 0;
      outline: none;
      padding: 0;
    }
    .item-1 {
      background-color: red;
    }
    .item-2 {
      background-color: orange;
    }
  }
`

export default function Slides() {
  const [end, setEnd] = useState(0)
  const [rowData, setRowData] = useState([])
  const [slideIndex, setIndex] = useState(0)

  const parentRef = useRef(null)
  const sliderRef = useRef()

  useEffect(() => {
    if (!parentRef.current) {
      return
    }
    parentRef.current.addEventListener('wheel', (e) => handleScroll(e))

    return () => {
      parentRef.current.removeEventListener('wheel', (e) => handleScroll(e))
    }
  }, [parentRef, rowData])

  const sliderSettings = {
    afterChange: (current) => {
      setEnd(current)
    },
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: true
  }

  const handleScroll = (e) => {
    if (e.deltaY < 0) {
      sliderRef && sliderRef.current.slickPrev()
    } else if (e.deltaY > 0) {
      sliderRef && sliderRef.current.slickNext()
    }
  }

  return (
    <SectionStyled>
      <Head>
        <link
          charSet='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
          rel='stylesheet'
          type='text/css'
        />
        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
          rel='stylesheet'
          type='text/css'
        />
      </Head>
      <div>
        <div className='carousel' ref={parentRef}>
          <Slider ref={sliderRef} {...sliderSettings}>
            <div className='item item-1'>
              <p>1</p>
            </div>
            <div className='item item-2'>
              <p>2</p>
            </div>
          </Slider>
        </div>
      </div>
    </SectionStyled>
  )
}
