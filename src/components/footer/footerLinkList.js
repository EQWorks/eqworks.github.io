import * as React from 'react'
import { Link } from 'gatsby'
import * as componentStyles from './footer.module.scss'

const FooterLinkList = ({ header, linkArr }) => {
  return (
    <div>
      <span className={componentStyles.listHdr}>{header}</span>
      <ul className={componentStyles.linkList}>
        {linkArr.map((link, i) => {
          if (link.external) {
            return (
              <li key={i}>
                <a href={link.path} target='_blank' rel='noreferrer'>
                  {link.text}
                </a>
              </li>
            )
          } else {
            return (
              <li key={i}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default FooterLinkList
