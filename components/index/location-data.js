import Head from 'next/head'
import Slider from 'react-slick'
import styled from 'styled-components'

const SectionStyled = styled.section`
  color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing[5]}px 0;
  .container {
    background-color: ${({ theme }) => theme.color.blue};
    box-sizing: border-box;
    .content {
      box-sizing: border-box;
      margin: 0 auto;
      max-width: ${({ theme }) => theme.width.page};
      padding: ${({ theme }) => theme.spacing[5]}px
        ${({ theme }) => theme.spacing[3]}px;
      text-align: center;
      h2 {
        margin: 0 auto;
        max-width: 750px;
        text-transform: uppercase;
      }
      .carousel {
        box-sizing: border-box;
        .item {
          align-items: center;
          box-sizing: border-box;
          display: flex !important;
          flex-direction: column;
          justify-content: center;
          padding: 20px;
          .message {
            margin: 0;
            max-width: 150px;
          }
          .title {
            font-size: 2em;
            font-weight: ${({ theme }) => theme.font.regular};
          }
        }
      }
      .image-globe {
        width: 100%;
      }
      .products {
        margin: -100px 0 0 0;
        @media ${({ theme }) => theme.breakpoint.xs} {
          margin: -150px 0 0 0;
        }
        @media ${({ theme }) => theme.breakpoint.sm} {
          align-items: center;
          display: flex;
          justify-content: center;
          margin: -175px 0 0 0;
        }
        @media ${({ theme }) => theme.breakpoint.md} {
          margin: -200px 0 0 0;
        }
        @media ${({ theme }) => theme.breakpoint.md} {
          margin: -250px 0 0 0;
        }
        .left {
          @media ${({ theme }) => theme.breakpoint.sm} {
            padding: 0 ${({ theme }) => theme.spacing[3]}px 0 0;
          }
          @media ${({ theme }) => theme.breakpoint.sm} {
            padding: 0 ${({ theme }) => theme.spacing[4]}px 0 0;
          }
        }
        .logo {
          align-items: center;
          display: flex;
          justify-content: center;
          margin: 0 0 ${({ theme }) => theme.spacing[4]}px 0;
          img {
            margin: 0 ${({ theme }) => theme.spacing[3]}px 0 0;
            max-width: 150px;
            width: 100%;
            @media ${({ theme }) => theme.breakpoint.xs} {
              max-width: 175px;
            }
          }
          p {
            font-size: 2em;
            font-weight: ${({ theme }) => theme.font.light};
            @media ${({ theme }) => theme.breakpoint.xs} {
              font-size: 2.25em;
            }
          }
        }
        .right {
          @media ${({ theme }) => theme.breakpoint.sm} {
            padding: 0 0 0 ${({ theme }) => theme.spacing[3]}px;
          }
          @media ${({ theme }) => theme.breakpoint.sm} {
            padding: 0 0 0 ${({ theme }) => theme.spacing[4]}px;
          }
        }
        .screenshot {
          margin: 0 0 ${({ theme }) => theme.spacing[5]}px 0;
          .screenshot-image {
            border-radius: 10px;
            max-width: 400px;
            width: 100%;
          }
        }
      }
    }
  }
  .shape {
    box-sizing: border-box;
    height: calc(100vw * 0.066);
    min-height: 25px;
    width: 100%;
    svg {
      fill: ${({ theme }) => theme.color.blue};
    }
  }
`

export default function LocationData() {
  const sliderSettings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  const sliderItems = [
    {
      title: '20B+',
      message: 'Daily Online Interactions'
    },
    {
      title: '100K+',
      message: 'App Access through Syndication partnership'
    },
    {
      title: '2.4B+',
      message: 'Device Graph North America'
    },
    {
      title: '260+',
      message: 'Terabytes of Data Collected Monthly'
    },
    {
      title: '18M+',
      message: 'MAU Devices in Canada'
    }
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

      <div className='shape'>
        <svg
          height='100%'
          preserveAspectRatio='none'
          width='100%'
          viewBox='0 0 100 100'
        >
          <polygon points='50 100, 100 0, 100 100, 0 100, 0 0' />
        </svg>
      </div>

      <div className='container'>
        <div className='content'>
          <h2>
            EQ Provides a Wealth of Geo-Spatial Location Data in
            our&nbsp;Algorithms
          </h2>

          <img
            alt={`Globe with logos and text emerging from different areas: Consumer Purchase Data,
              Mastercard logo, Real Estate, Statistics Canada logo, Credit Score Data, TMG Analytics logo,
              Automotive data, Behavioural data, Caddle logo, and Opta logo.`}
            className='image-globe'
            src='/images/index/fallback/location-data-world.png'
          />

          <div className='products'>
            <div className='left screenshot'>
              <div className='logo'>
                <img
                  alt='Locus logo'
                  src='/images/components/fallback/logo-locus-white.png'
                />
                <p>DMP</p>
              </div>
              <img
                alt='Product design screenshot of EQ Locus platform'
                className='screenshot-image'
                src='/images/index/fallback/location-data-locus.png'
              />
            </div>
            <div className='right screenshot'>
              <div className='logo'>
                <img
                  alt='Atom logo'
                  src='/images/components/fallback/logo-atom-white.png'
                />
                <p>DSP</p>
              </div>
              <img
                alt='Product design screenshot of EQ Atom platform'
                className='screenshot-image'
                src='/images/index/fallback/location-data-atom.jpg'
              />
            </div>
          </div>

          <div className='carousel'>
            <Slider {...sliderSettings}>
              {sliderItems.map((item) => (
                <div className='item' key={item.title}>
                  <p className='title'>{item.title}</p>
                  <p className='message'>{item.message}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className='shape'>
        <svg
          height='100%'
          preserveAspectRatio='none'
          width='100%'
          viewBox='0 0 100 100'
        >
          <polygon points='0 0, 100 0, 50, 100' />
        </svg>
      </div>
    </SectionStyled>
  )
}
