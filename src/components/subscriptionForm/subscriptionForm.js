import React, { useState } from 'react'
import * as componentStyles from './subscriptionForm.module.scss'
import { useMediaQuery } from 'react-responsive'
import { useForm } from '@formspree/react'

import SuccessMsg from '../forms/successMsg'
import { FaArrowRight } from 'react-icons/fa'

const SubscriptionForm = () => {
  const isScreenSm = useMediaQuery({ maxWidth: 850 })

  const [values, setValue] = useState({
    email: ''
  })

  const [state, handleSubmit] = useForm('mrgrvbgq')
  if (state.succeeded) {
    return <SuccessMsg />
  }

  const formSubmit = (e) => {
    handleSubmit(e)
  }

  return (
    <>
      <section
        className='sectionBlueBackground'
        style={{ paddingBottom: `4rem` }}
      >
        <h3>Sign Up For Our Newsletter</h3>
        <p className='centered fontSm'>
          Make sure you never miss any of our updates by getting the news
          delivered right to your inbox.
        </p>
      </section>

      <form onSubmit={formSubmit} className={componentStyles.form}>
        <label className={componentStyles.hiddenLabel} htmlFor='email'>
          Email
        </label>
        <input
          aria-label='Email'
          id='email'
          name='_replyto'
          onChange={(e) => setValue({ ...values, email: e.target.value })}
          placeholder='Enter your email here'
          required
          type='email'
          value={values.email}
        />

        <button disabled={values.email === '' || !values.email} type='submit'>
          {isScreenSm ? <FaArrowRight /> : 'Subscribe Now'}
        </button>
      </form>
    </>
  )
}

export default SubscriptionForm
