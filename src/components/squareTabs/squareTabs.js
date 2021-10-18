import React, { useState } from 'react'
import * as componentStyles from './squareTabs.module.scss'

const SquareTabs = ({ tabArr, children }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <div className={componentStyles.tabContainer}>
        <ul>
          {tabArr.map((tab, i) => (
            <li
              className={activeTab === i ? componentStyles.active : undefined}
            >
              <button onClick={() => setActiveTab(i)}>{tab}</button>
            </li>
          ))}
        </ul>
      </div>

      <div className={componentStyles.tabContentContainer}>
        {children.map((content, i) => (
          <>
            {activeTab === i && (
              <div className={componentStyles.tabContent}>{content}</div>
            )}
          </>
        ))}
      </div>
    </>
  )
}

export default SquareTabs
