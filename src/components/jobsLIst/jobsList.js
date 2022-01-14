import * as React from 'react'
import * as componentStyles from './jobsList.module.scss'

import Button from '../button/button'

const JobsList = ({ jobsArr }) => {
  return (
    <>
      {jobsArr.length === 0 ? (
        <p className='centered footnote'>
          There are no open positions at this time.
        </p>
      ) : (
        <ul className={componentStyles.list}>
          {jobsArr.map((job, i) => (
            <li className={componentStyles.listItem} key={job.shortcode}>
              <h3>{job.title}</h3>
              <div
                // dangerouslySetInnerHTML={{
                //   __html: `${job.description
                //     .split('</p>')[0]
                //     .replace('<br>', '')}`
                // }}
                dangerouslySetInnerHTML={{
                  __html: `${
                    job.description.indexOf('<strong>The Role</strong>') >= 0
                      ? job.description
                          .split('<strong>The Role</strong>')[1]
                          .split('<strong>')[0]
                          .replace('<br>', '')
                          .replace('<p></p>', '')
                      : job.description.split('</p>')[0].replace('<br>', '')
                  }`
                }}
              ></div>
              <div className={componentStyles.buttonCont}>
                <Button
                  linkPath={job.application_url}
                  text='Apply for this Job'
                  external
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default JobsList
