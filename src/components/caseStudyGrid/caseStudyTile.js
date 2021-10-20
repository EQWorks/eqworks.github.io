import * as React from 'react'
import ClassNames from 'classnames'
import { Link } from 'gatsby'
import * as componentStyles from './caseStudyGrid.module.scss'

const CaseStudyTile = ({
  image,
  title,
  date,
  snippet,
  linkPath,
  large,
  column
}) => {
  var tileClasses
  if (column)
    tileClasses = ClassNames(componentStyles.tile, componentStyles.column)
  else if (large)
    tileClasses = ClassNames(componentStyles.tile, componentStyles.large)
  else tileClasses = componentStyles.tile

  var snippetLength = !large && !column ? 50 : 100

  return (
    <div className={tileClasses}>
      <div className={componentStyles.image}>
        <img src={image} alt='' />
      </div>
      <div className={componentStyles.content}>
        <h3 className='left'>{title}</h3>
        {snippet && (
          <p className='fontSm'>
            {snippet.length < snippetLength
              ? snippet
              : `${snippet.substring(0, snippetLength - 3)}...`}
          </p>
        )}
        <Link to={linkPath} className='uppercase primaryColor bold'>
          Read More &#187;
        </Link>
      </div>
    </div>
  )
}

export default CaseStudyTile
