import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-grid-system'
// import { useForm } from "@formspree/react";
import axios from 'axios'

import TextInput from '../../components/textInput/textInput'
import SuccessMsg from './successMsg'
// import Recaptcha from "react-recaptcha";

const ContactForm = () => {
  const [values, setValue] = useState({})
  const [formValid, setFormValid] = useState(false)

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  useEffect(() => {
    const required = ['firstName', 'lastName', 'email', 'phone', 'accept']
    let isFormValid = true
    required.map((key) => {
      if (!values[key]) isFormValid = false
      if (values[key] === '') isFormValid = false
    })
    setFormValid(isFormValid)
  }, [values])

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/xyylvbnb',
      data: values
    })
      .then((response) => {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: 'SUCCESS!' }
        })
      })
      .catch((error) => {
        setStatus({
          info: { error: true, msg: error.response.data.error }
        })
      })
  }

  return (
    <form onSubmit={handleOnSubmit} method='POST' className='pageRow marginAll'>
      <Container className='container'>
        {status.submitted ? (
          <Row>
            <Col>
              <SuccessMsg />
            </Col>
          </Row>
        ) : (
          <>
            <Row className=''>
              <Col md={6} sm={12}>
                <TextInput
                  changeHandler={(e) =>
                    setValue({ ...values, firstName: e.target.value })
                  }
                  id='firstName'
                  labelText='First Name'
                  required
                  value={values.firstName}
                />
              </Col>
              <Col>
                <TextInput
                  changeHandler={(e) =>
                    setValue({ ...values, lastName: e.target.value })
                  }
                  id='lastName'
                  labelText='Last Name'
                  required
                  value={values.lastName}
                />
              </Col>
            </Row>

            <Row className=''>
              <Col md={6} sm={12}>
                <TextInput
                  changeHandler={(e) =>
                    setValue({ ...values, company: e.target.value })
                  }
                  id='company'
                  labelText='Company'
                  value={values.company}
                />
              </Col>
              <Col>
                <TextInput
                  changeHandler={(e) =>
                    setValue({ ...values, jobTitle: e.target.value })
                  }
                  id='jobTitle'
                  labelText='Job Title'
                  value={values.jobTitle}
                />
              </Col>
            </Row>

            <Row className=''>
              <Col md={6} sm={12}>
                <TextInput
                  changeHandler={(e) =>
                    setValue({ ...values, email: e.target.value })
                  }
                  id='email'
                  inputType='email'
                  labelText='Email'
                  name='_replyto'
                  required
                  value={values.email}
                />
              </Col>
              <Col>
                <TextInput
                  changeHandler={(e) =>
                    setValue({ ...values, phone: e.target.value })
                  }
                  id='phone'
                  labelText='Phone'
                  required
                  value={values.phone}
                />
              </Col>
            </Row>

            <Row className=''>
              <Col>
                <TextInput
                  changeHandler={(e) =>
                    setValue({ ...values, message: e.target.value })
                  }
                  id='message'
                  labelText='Your Message'
                  name='message'
                  type='textarea'
                  value={values.message}
                />
              </Col>
            </Row>

            <Row className=''>
              <Col>
                <div className='flexContainer column justifyCenter'>
                  <div>
                    <input
                      onChange={(e) =>
                        setValue({ ...values, accept: e.target.checked })
                      }
                      id='accept'
                      name='accept'
                      type='checkbox'
                      value='yes'
                    />
                    <label htmlFor='accept'>
                      I consent to EQ Works contacting me{' '}
                      <span className='required'>*</span>
                    </label>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className='pageRowSm'>
              <Col>
                <div className='flexContainer column justifyCenter'>
                  <button
                    disabled={status.submitting || !formValid}
                    type='submit'
                  >
                    Send &#187;
                  </button>
                </div>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </form>
  )
}

export default ContactForm
