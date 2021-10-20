import React, { useState, useRef } from 'react'
import { FaPlay } from 'react-icons/fa'

const VideoElement = ({ videoSrc, posterSrc }) => {
  const vidRef = useRef(null)
  const [vidPlaying, setVideoState] = useState(false)
  const [isShown, setIsShown] = useState(true)

  const clickHandler = () => {
    vidRef.current.play()
    setIsShown(false)
    setVideoState(true)
  }

  return (
    <div
      className={
        !isShown ? 'inlineVideoContainer hidden' : 'inlineVideoContainer'
      }
    >
      {/* eslint-disable-next-line */}
      <video
        controls
        ref={vidRef}
        onEnded={() => {
          setIsShown(true)
          setVideoState(false)
        }}
        poster={posterSrc}
      >
        <source src={videoSrc} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {!vidPlaying && <div className='overlay'></div>}

      {!vidPlaying && (
        <button
          aria-label='Play/pause video'
          onClick={() => clickHandler(this)}
        >
          <FaPlay />
        </button>
      )}
    </div>
  )
}

export default VideoElement
