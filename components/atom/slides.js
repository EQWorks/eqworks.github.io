import ReactFullpage from '@fullpage/react-fullpage'
import styled from 'styled-components'

// import ImgWebP from '../shared/img-webp'

const SectionStyled = styled.section`
  .section .fp-tableCell {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .section-1 {
    background-color: red;
  }
  .section-2 {
    background-color: orange;
  }
`

export default function Slides() {
  return (
    <SectionStyled>
      <ReactFullpage
        licenseKey={process.env.FULLPAGE_JS_LICENSE_KEY}
        scrollingSpeed={1000}
        navigation={true}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className='section section-1'>
                <h1>Create audiences with impact.</h1>
              </div>
              <div className='section section-2'>
                <p>Section 2</p>
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </SectionStyled>
  )
}
