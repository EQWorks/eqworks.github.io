import * as React from 'react'
import { isMobile } from 'react-device-detect'
import BgVid from '../images/homepageVid.mp4'

const HomeHero = () => {
  return (
    <header className='homeHero'>
      {!isMobile && (
        <video autoPlay={true} muted loop className='vidOverlay'>
          <source src={BgVid} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      )}

      <div className='heroText'>
        <h1>
          Turning data into <br />
          business performance.
        </h1>
        <p>
          EQ enables businesses to <strong>Understand</strong>, <br />
          <strong>Predict</strong>, and <strong>Influence</strong> consumer
          behaviour.
        </p>
      </div>
    </header>
  )
}

export default HomeHero
