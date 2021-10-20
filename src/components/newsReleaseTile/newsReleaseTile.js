import * as React from 'react'
import { Link } from 'gatsby'
import * as componentStyles from './newsReleaseTile.module.scss'

const NewsReleaseTile = ({ date, readingTime, header, snippet, linkPath }) => {
  return (
    <div className={componentStyles.tile}>
      <div className={`${componentStyles.date} flexContainer`}>
        <span>{date}</span>
        {readingTime &&
          <span className={componentStyles.readingTime}>{readingTime} mins</span>
        }
      </div>
      <h3 className={componentStyles.header}>{header}</h3>
      <div className={componentStyles.excerpt}>{snippet}</div>
      <Link className={componentStyles.link} to={linkPath}>
        Read more &#187;
      </Link>
    </div>
  )
}

export default NewsReleaseTile
