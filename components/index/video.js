import styled from 'styled-components'

const SectionStyled = styled.section`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width.page};
  padding: 20px;
  h2 {
    margin: 20px 0;
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

const Video = (props) => {
  return (
    <SectionStyled>
      <h2>
        What we do it cool but you can't tell by the&nbsp;website
        <br />
        What this&nbsp;instead.
      </h2>
      <div className='video-container'>
        <iframe
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          frameBorder='0'
          height='315'
          loading='lazy'
          width='560'
          src='https://www.youtube.com/embed/AgZhgUsTQfI'
        ></iframe>
      </div>
    </SectionStyled>
  )
}

export default Video
