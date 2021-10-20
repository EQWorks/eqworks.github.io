import React from 'react'
import ClassNames from 'classnames'
import * as componentStyles from './verticalBoxList.module.scss'

const VerticalBoxList = ({ horizontal, children }) => {
  return (
    <ul
      className={
        horizontal
          ? ClassNames(componentStyles.list, componentStyles.horizontal)
          : componentStyles.list
      }
    >
      {children.map((content, i) => (
        <li key={i}>{content}</li>
      ))}
    </ul>
  )
}

export default VerticalBoxList
