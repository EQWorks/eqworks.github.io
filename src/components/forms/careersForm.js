import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { useForm } from '@formspree/react'

import TextInput from '../../components/textInput/textInput'
import SuccessMsg from './successMsg'

const CareersForm = () => {
  const fileRef = useRef(null)
  const [fileName, setFileName] = useState(false)
  const [values, setValue] = useState({})
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    const required = ['firstName', 'lastName', 'email', 'phone', 'accept']
    let isFormValid = true
    required.map((key) => {
      if (!values[key]) isFormValid = false
      if (values[key] === '') isFormValid = false
    })
    setFormValid(isFormValid)
  }, [values])

  const [state, handleSubmit] = useForm('xvownjne')
  if (state.succeeded) {
    return <SuccessMsg />
  }

  const handleChange = () => {
    setFileName(fileRef.current.value.split('\\').pop())
  }

  const formSubmit = (e) => {
    handleSubmit(e)
  }

  return (
    <form
      className='pageRow'
      encType='multipart/form-data'
      method='POST'
      onSubmit={formSubmit}
    >
      <Container className='container'>
        <Row className='pageRowSm'>
          <Col>
            <h2>Application Form</h2>
            <p className='centered'>
              Please leave us a quick note with the job you are applying for in
              the subject line and a brief overview of your qualifications.
              <br />
              We will contact the applicants that we would like to meet with in
              order to have further conversations.
            </p>
          </Col>
        </Row>

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
                setValue({ ...values, postion: e.target.value })
              }
              id='postion'
              labelText='Postion'
              value={values.postion}
            />
          </Col>
        </Row>

        <Row className=''>
          <Col md={6} sm={12}>
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
          <Col style={{ marginBottom: `4rem` }}>
            <label className='fileLabel' htmlFor='myfile'>
              Upload Resume
            </label>
            <input
              onChange={() => handleChange()}
              id='myfile'
              name='upload'
              ref={fileRef}
              type='file'
            />
            <br />
            <span className='fileName'>{fileName}</span>
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
              <button disabled={state.submitting || !formValid} type='submit'>
                Send &#187;
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </form>
  )
}

export default CareersForm
