import React, { useState } from 'react'
import * as componentStyles from './creativeStudioSlideshow.module.scss'
import { useSwipeable } from 'react-swipeable'
import Arrow from '../../svgs/noun_Arrow_2335767.svg'

const CSslideshow = ({ slideshowArr, children }) => {
  const [activeSlide, setActiveSlide] = useState(0)

  const handleNavClick = (dir) => {
    if (dir === -1 && activeSlide === 0) setActiveSlide(slideshowArr.length - 1)
    else if (dir === 1 && activeSlide === slideshowArr.length - 1)
      setActiveSlide(0)
    else setActiveSlide(activeSlide + dir)
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: (e) => handleNavClick(1),
    onSwipedRight: (e) => handleNavClick(-1)
  })

  return (
    <>
      <div className={componentStyles.tabContainer}>
        <ul>
          {slideshowArr.map((tab, i) => (
            <li
              className={activeSlide === i ? componentStyles.active : undefined}
            >
              <button onClick={() => setActiveSlide(i)}>{tab}</button>
            </li>
          ))}
        </ul>
      </div>

      <div
        aria-live='polite'
        className={componentStyles.slideshowCont}
        {...swipeHandlers}
      >
        {children.map((content, i) => (
          <div className={componentStyles.slide}>
            {activeSlide === i && <div>{content}</div>}
          </div>
        ))}

        <button
          aria-label='View previous slide'
          className={componentStyles.prevBtn}
          onClick={() => handleNavClick(-1)}
        >
          <Arrow />
        </button>

        <button
          aria-label='View next slide'
          className={componentStyles.nextBtn}
          onClick={() => handleNavClick(1)}
        >
          <Arrow />
        </button>
      </div>
    </>
  )
}

export default CSslideshow
