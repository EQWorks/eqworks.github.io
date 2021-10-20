import * as React from 'react'
import { Link } from 'gatsby'
import * as componentStyles from './button.module.scss'

const Button = ({ linkPath, variation, text, small, external }) => {
  // solid, outline, light outline
  let activeClass
  if (variation === 'outline') activeClass = componentStyles.outline
  else if (variation === 'light outline')
    activeClass = componentStyles.outlineLt
  else activeClass = componentStyles.solid

  return (
    <>
      {external ? (
        <a
          className={`${componentStyles.button} ${activeClass} ${
            small ? componentStyles.small : undefined
          }`}
          href={linkPath}
          rel='noreferrer'
          target='_blank'
        >
          <span>{text}</span>{' '}
          <span className={componentStyles.icon}>&#187;</span>
        </a>
      ) : (
        <Link
          className={`${componentStyles.button} ${activeClass} ${
            small ? componentStyles.small : undefined
          } `}
          to={linkPath}
        >
          <span>{text}</span>{' '}
          <span className={componentStyles.icon}>&#187;</span>
        </Link>
      )}
    </>
  )
}

export default Button
