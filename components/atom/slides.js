import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Slider from 'react-slick'
import styled from 'styled-components'

// import ImgWebP from '../shared/img-webp'

const SectionStyled = styled.section`
  .carousel {
    background-color: ${({ theme }) => theme.color.black};
    height: 100vh;
    left: 0;
    position: absolute;
    top: 0;
    width: 100vw;
    z-index: ${({ theme }) => theme.zIndex.indexHeroVideo};
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
  .scroll-container {
    height: 100vh;
    overflow: auto;
    opacity: 0;
    -ms-overflow-style: none;
    position: relative;
    scrollbar-width: none;
    width: 100vw;
    z-index: ${({ theme }) => theme.zIndex.footer};
    .content {
      height: 105vh;
    }
  }
  .scroll-container::-webkit-scrollbar {
    display: none;
  }
`

export default function Slides() {
  const scrollResetPosition = 12
  const delayBetweenScrolls = 1500
  const [scrollTop, setScrollTop] = useState(scrollResetPosition)
  let scrollReset = false
  let userScrolled = false

  useEffect(() => {
    document.body.classList.add('no-scroll')
    const scrollDetector = document.getElementById('vertical-carousel')
    scrollDetector.scrollTo(0, scrollResetPosition)
    scrollDetector.addEventListener('scroll', handleScroll)
    return () => {
      document.body.classList.remove('no-scroll')
      scrollDetector.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const sliderSettings = {
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

  const handleScroll = (event) => {
    if (!scrollReset) {
      scrollReset = true
      return
    }

    if (!userScrolled) {
      userScrolled = true

      const currentScroll = event.target.scrollTop

      if (currentScroll > scrollTop) {
        console.log('up')
      } else {
        console.log('down')
      }
      setScrollTop(currentScroll)

      window.setTimeout(() => {
        scrollReset = false
        userScrolled = false
        document
          .getElementById('vertical-carousel')
          .scrollTo(0, scrollResetPosition)
      }, delayBetweenScrolls)
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
      <div className='scroll-container' id='vertical-carousel'>
        <p className='content'>scroll me</p>
      </div>
      <div className='carousel'>
        <Slider {...sliderSettings}>
          <div className='item item-1'>
            <p>1</p>
          </div>
          <div className='item item-2'>
            <p>2</p>
          </div>
        </Slider>
      </div>
    </SectionStyled>
  )
}
