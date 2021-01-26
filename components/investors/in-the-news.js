import styled from 'styled-components'

const SectionStyled = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px 40px 0;
  text-align: center;
  h2 {
    margin: 0 auto 20px auto;
    text-align: center;
  }
  .videos {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px 0;
    .video-container {
      margin: 20px;
      max-width: 400px;
      min-width: 200px;
      overflow: hidden;
      position: relative;
      width: 100%;
    }
    .video-container::after {
      content: '';
      display: block;
      padding-top: 56.25%;
    }
    .video-container iframe {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
`

export default function InTheNews() {
  return (
    <SectionStyled>
      <h2>In the&nbsp;News</h2>
      <div className='videos'>
        <div className='video-container'>
          <iframe
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            frameBorder='0'
            height='315'
            loading='lazy'
            title='VIRTUAL PANEL: "AI in the Cloud - A Look at the Canadian-listed Smallcap Technology Sector"'
            width='560'
            src='https://www.youtube.com/embed/Cp_DPsdAqmg'
          ></iframe>
        </div>
        <div className='video-container'>
          <iframe
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            frameBorder='0'
            height='315'
            loading='lazy'
            title='EQ Interview with SNN Network on Using Geospatial Data to Help Businesses'
            width='560'
            src='https://www.youtube.com/embed/ap1ucdHdip0'
          ></iframe>
        </div>
      </div>
    </SectionStyled>
  )
}
