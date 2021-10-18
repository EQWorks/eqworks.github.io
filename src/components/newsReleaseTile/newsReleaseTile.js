import * as React from 'react'
import { Link } from 'gatsby'
import * as componentStyles from './newsReleaseTile.module.scss'

const NewsReleaseTile = ({ date, readingTime, header, snippet, linkPath }) => {
  return (
    <div className={componentStyles.tile}>
      <div className={`${componentStyles.date} flexContainer`}>
        <span>{date}</span>
        <span className={componentStyles.readingTime}>{readingTime} mins</span>
      </div>
      <h3 className={componentStyles.header}>{header}</h3>
      <div className={componentStyles.excerpt}>{snippet}</div>
      <Link to={linkPath} className={componentStyles.link}>
        Read more &#187;
      </Link>
    </div>
  )
}

export default NewsReleaseTile
