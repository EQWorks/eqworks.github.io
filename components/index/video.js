import styled from 'styled-components'

import * as GlobalStyles from '../../utils/style-variables'

const SectionStyled = styled.section`
  margin: 0 auto;
  max-width: ${GlobalStyles.width.page};
  padding: 20px;
  h2 {
    text-align: center;
  }
  .video-container {
    height: 0;
    margin: 0 auto;
    max-width: 1200px;
    padding-bottom: 50%;
    position: relative;
    width: 100%;
    iframe {
      height: 100%;
      left: 0;
      max-height: 600px;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
`

export default function Video(props) {
  return (
    <SectionStyled>
      <h2>
        What we do it cool but you can't tell by the&nbsp;website
        <br />
        What this&nbsp;instead.
      </h2>
      <div className='video-container'>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube-nocookie.com/embed/AgZhgUsTQfI'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </SectionStyled>
  )
}
