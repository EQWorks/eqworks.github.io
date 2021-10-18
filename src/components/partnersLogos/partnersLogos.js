import * as React from 'react'
import ClassNames from 'classnames'
import { Container, Row, Col } from 'react-grid-system'
import { StaticImage } from 'gatsby-plugin-image'
import * as componentStyles from './partnersLogos.module.scss'

const PartnersLogos = ({ dark, colorLogos }) => {
  let styles
  if (colorLogos)
    styles = ClassNames(
      componentStyles.sectionMain,
      componentStyles.coloredLogos
    )
  else if (dark)
    styles = ClassNames(componentStyles.sectionMain, componentStyles.dark)
  else styles = ClassNames(componentStyles.sectionMain, 'pageRow')

  return (
    <section className={styles}>
      <Container className='container'>
        <Row>
          <Col>
            <h3 className='centered'>
              {colorLogos ? 'Access These And More' : 'Trusted EQ Partners'}
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={componentStyles.logos}>
              {!colorLogos ? (
                <>
                  <StaticImage
                    src='../../images/Emerge-white.png'
                    alt='Emerge logo'
                  />
                  <StaticImage
                    src='../../images/paymi-white.png'
                    alt='Paymi logo'
                  />
                  <StaticImage
                    src='../../images/mastercard-white.png'
                    alt='Mastercard logo'
                  />
                  <StaticImage
                    src='../../images/TMG-white.png'
                    alt='TMG Analytics logo'
                  />
                  <StaticImage
                    src='../../images/Opta-white.png'
                    alt='Opta logo'
                  />
                </>
              ) : (
                <>
                  <StaticImage
                    src='../../images/Emerge-black.png'
                    alt='Emerge logo'
                  />
                  <StaticImage
                    src='../../images/paymi_logo_RGB.png'
                    alt='Paymi logo'
                  />
                  <StaticImage
                    src='../../images/MastercardLogo.png'
                    alt='Mastercard logo'
                  />
                  <StaticImage
                    src='../../images/TMGLogo.png'
                    alt='TMG Analytics logo'
                  />
                  <StaticImage
                    src='../../images/OptaLogo.png'
                    alt='Opta logo'
                  />
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PartnersLogos
