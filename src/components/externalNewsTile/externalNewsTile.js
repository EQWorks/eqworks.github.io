import * as React from 'react'
// import { Link } from 'gatsby'
import * as componentStyles from './externalNewsTile.module.scss'

const ExternalNewsTile = ({ date, header, body, image, linkPath }) => {
  return (
    <div className={componentStyles.tile}>
      <img alt='' className={componentStyles.image} src={image} />

      <div className={componentStyles.date}>{date}</div>

      <div className={componentStyles.content}>
        <h3 className={componentStyles.header}>{header}</h3>
        <p className={componentStyles.excerpt}>{body}</p>
      </div>

      <a className={componentStyles.link} href={linkPath}>
        Read more &#187;
      </a>
    </div>
  )
}

export default ExternalNewsTile
