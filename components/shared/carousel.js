import Slider from 'react-slick'
import styled from 'styled-components'

const ImageStyled = styled.img`
  margin: 0 auto;
  max-width: 100%;
`

export default function Carousel({ slides }) {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500
  }

  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <ImageStyled
              alt={slide.fields.title}
              style={{ width: slides[index].fields.file.details.image.width }}
              src={slide.fields.file.url}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
