import * as React from 'react'
import BlueCheck from '../../svgs/blueCheck.svg'

const SuccessMsg = () => {
  return (
    <div
      className='flexContainer column alignCenter justifyCenter'
      style={{ padding: `7.5rem 0` }}
    >
      <BlueCheck />
      <p className='centered'>Submission successful!</p>
    </div>
  )
}

export default SuccessMsg
