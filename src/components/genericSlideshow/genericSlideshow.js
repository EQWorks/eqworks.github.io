import React, { useState } from 'react'
import ClassNames from 'classnames'
import { useSwipeable } from 'react-swipeable'
import * as componentStyles from './genericSlideshow.module.scss'

const GenericSlideShow = ({ children }) => {
  const [activeSection, setSection] = useState(0)

  const handleNavClick = (dir) => {
    if (dir === -1 && activeSection === 0) setSection(children.length - 1)
    else if (dir === 1 && activeSection === children.length - 1) setSection(0)
    else setSection(activeSection + dir)
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: (e) => handleNavClick(1),
    onSwipedRight: (e) => handleNavClick(-1)
  })

  return (
    <>
      <div aria-live='polite' {...swipeHandlers}>
        {children.map((content, i) => (
          <div className={componentStyles.slideSection}>
            {activeSection === i && <div>{content}</div>}
          </div>
        ))}
      </div>

      <div
        className={ClassNames(
          componentStyles.slideshowNavContainer,
          'flexContainer',
          'justifyCenter'
        )}
      >
        <ul className={componentStyles.slideshowNav}>
          {children.map((content, i) => (
            <li>
              <button
                aria-label={`View slide ${i + 1}`}
                onClick={() => setSection(i)}
                className={
                  activeSection === i ? componentStyles.active : undefined
                }
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default GenericSlideShow
