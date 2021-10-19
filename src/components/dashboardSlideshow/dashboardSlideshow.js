import React, { useState } from 'react'
import classNames from 'classnames'
import { useSwipeable } from 'react-swipeable'
import * as componentStyles from './dahsboardSlideshow.module.scss'
import Arrow from '../../svgs/noun_Arrow_grey.svg'

const DashboardSlideShow = ({ children }) => {
  const [activeSlide, setActiveSlide] = useState(0)

  const handleNavClick = (dir) => {
    if (dir === -1 && activeSlide === 0) setActiveSlide(children.length - 1)
    else if (dir === 1 && activeSlide === children.length - 1) setActiveSlide(0)
    else setActiveSlide(activeSlide + dir)
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: (e) => handleNavClick(1),
    onSwipedRight: (e) => handleNavClick(-1)
  })

  return (
    <>
      <div className={componentStyles.slideshowCont} {...swipeHandlers}>
        <div aria-live='polite' className={componentStyles.slides}>
          {children.map((content, i) => (
            <>
              {activeSlide === i && (
                <div
                  className={classNames(
                    componentStyles.slideSection,
                    componentStyles.active
                  )}
                >
                  {content}
                </div>
              )}
            </>
          ))}
        </div>

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

      <div className={classNames('flexContainer', 'justifyCenter')}>
        <ul className={componentStyles.slideshowNav}>
          {children.map((content, i) => (
            <li>
              <button
                aria-label={`View slide ${i + 1}`}
                onClick={() => setActiveSlide(i)}
                className={
                  activeSlide === i ? componentStyles.active : undefined
                }
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default DashboardSlideShow
