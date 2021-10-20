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
                    alt='Emerge logo'
                    src='../../images/Emerge-white.png'
                    
                  />
                  <StaticImage
                    alt='Paymi logo'
                    src='../../images/paymi-white.png'
                    
                  />
                  <StaticImage
                    alt='Mastercard logo'
                    src='../../images/mastercard-white.png'
                    
                  />
                  <StaticImage
                    alt='TMG Analytics logo'
                    src='../../images/TMG-white.png'
                    
                  />
                  <StaticImage
                    alt='Opta logo'
                    src='../../images/Opta-white.png'
                    
                  />
                </>
              ) : (
                <>
                  <StaticImage
                    alt='Emerge logo'
                    src='../../images/Emerge-black.png'
                    
                  />
                  <StaticImage
                    alt='Paymi logo'
                    src='../../images/paymi_logo_RGB.png'
                    
                  />
                  <StaticImage
                    alt='Mastercard logo'
                    src='../../images/MastercardLogo.png'
                    
                  />
                  <StaticImage
                    alt='TMG Analytics logo'
                    src='../../images/TMGLogo.png'
                    
                  />
                  <StaticImage
                    alt='Opta logo'
                    src='../../images/OptaLogo.png'
                    
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
