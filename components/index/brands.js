import Slider from 'react-slick'
import styled from 'styled-components'

const SectionStyled = styled.section`
  background-color: ${({ theme }) => theme.color.greyBackground};
  padding: ${({ theme }) => theme.spacing[12]}px 0;
  h2 {
    font-size: 1em;
    font-weight: bold;
    margin: 0 auto ${({ theme }) => theme.spacing[5]}px auto;
    text-align: center;
    @media ${({ theme }) => theme.breakpoint.sm} {
      font-size: 1.15em;
    }
    @media ${({ theme }) => theme.breakpoint.md} {
      font-size: 1.25em;
    }
  }
  .carousel {
    margin: 0 auto;
    max-width: ${({ theme }) => theme.width.page};
    padding: 0 ${({ theme }) => theme.spacing[2]}px;
    .item {
      align-items: center;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      padding: 0 ${({ theme }) => theme.spacing[4]}px;
    }
    img {
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
        breakpoint: 350,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  const sliderItemAlt = [
    'Walmart',
    'Amazon Prime Video',
    'Sobeys',
    'Harry Rosen',
    'Audi',
    'TD Bank'
  ]

  return (
    <SectionStyled>
      <h2>Trusted by some of the world's largest&nbsp;brands</h2>
      <div className='carousel'>
        <Slider {...sliderSettings}>
          {sliderItemAlt.map((altText, index) => (
            <div className='item' key={altText}>
              <img
                alt={`${altText} logo`}
                src={`/images/index/fallback/brands-${index + 1}.png`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </SectionStyled>
  )
}
