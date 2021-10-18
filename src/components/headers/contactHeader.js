import * as React from 'react'
import { isMobile } from 'react-device-detect'
import BgVid from '../../images/Contact.mp4'

const ContactHdr = ({ header, children }) => {
  return (
    <header className='blockheader interface contact'>
      {!isMobile && (
        <video autoPlay={true} muted loop className='vidOverlay'>
          <source src={BgVid} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      )}

      <div className='headerContents'>
        <h1>{header}</h1>
        {children}
      </div>
    </header>
  )
}

export default ContactHdr
