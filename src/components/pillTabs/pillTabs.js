import React, { useState } from 'react'
import * as componentStyles from './pillTabs.module.scss'

const PillTabs = ({ tabArr, children }) => {
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

      <div className={componentStyles.tabContent}>
        {children.map((content, i) => (
          <>{activeTab === i && <div className=''>{content}</div>}</>
        ))}
      </div>
    </>
  )
}

export default PillTabs
