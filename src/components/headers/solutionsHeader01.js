import * as React from 'react'
import ClassNames from 'classnames'
import * as componentStyles from './headers.module.scss'

const SolutionHdr = ({ header, headerClass, icon, children }) => {
  return (
    <header
      className={
        headerClass
          ? ClassNames(
              componentStyles.solutionsHdr1,
              componentStyles[headerClass]
            )
          : componentStyles.solutionsHdr1
      }
    >
      <div className={componentStyles.content}>
        {icon && <span className={componentStyles.icon}>{icon}</span>}
        <h1 className='capitalize'>{header}</h1>
        {children}
      </div>
    </header>
  )
}

export default SolutionHdr
