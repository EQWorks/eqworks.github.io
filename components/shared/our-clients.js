import Head from 'next/head'
import Slider from 'react-slick'
import styled from 'styled-components'

import ImgWebP from '../shared/img-webp'

const SectionStyled = styled.section`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width.page};
  h2 {
    margin: 20px 0;
    text-align: center;
  }
  .carousel {
    .item {
      box-sizing: border-box;
      padding: 20px;
    }
    img {
      height: auto;
      margin: 0 auto;
      width: 100%;
    }
  }
  .image {
    height: 100%;
    padding: 40px 0 0 0;
    width: 100%;
    div {
      background-image: url('/images/index/fallback/our-clients-background.jpg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 200px;
      width: 100%;
    }
  }
`

export default function OurClients({ header }) {
  const sliderSettings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  const sliderItemAlt = [
    'td',
    'bell',
    'ikea',
    'jaguar',
    'second cup coffee co.',
    'ontario toyota dealers',
    'infiniti',
    'land rover',
    'rbc',
    'nissan',
    'microsoft windows',
    'metroland media',
    'harper collins',
    'university of waterloo',
    'scotiabank'
  ]

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
      {header && (
        <div className='image'>
          <div aria-label='people walking on the street' role='img' />
        </div>
      )}
      <div>
        <h2>Our Clients</h2>
        <div className='carousel'>
          <Slider {...sliderSettings}>
            {sliderItemAlt.map((altText, index) => (
              <div className='item' key={altText}>
                <ImgWebP
                  alt={`${altText} logo`}
                  fallback={`/images/index/fallback/our-clients-${
                    index + 1
                  }.png`}
                  src={`/images/index/our-clients-${index + 1}.webp`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </SectionStyled>
  )
}