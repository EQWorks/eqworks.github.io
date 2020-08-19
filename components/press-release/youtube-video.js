import styled from 'styled-components'

const SectionStyled = styled.section`
  height: 0;
  margin: 0 auto;
  max-width: 100%;
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
`

const YouTubeVideo = ({ data }) => {
  const videoId = data.url.split('v=')[1].substring(0, 11)

  return (
    <SectionStyled>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </SectionStyled>
  )
}

export default YouTubeVideo
