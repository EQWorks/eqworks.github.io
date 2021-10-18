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
    // console.log('submitting...')
    handleSubmit(e)
  }

  return (
    <form
      onSubmit={formSubmit}
      encType='multipart/form-data'
      method='POST'
      className='pageRow'
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
              id='firstName'
              labelText='First Name'
              value={values.firstName}
              required
              changeHandler={(e) =>
                setValue({ ...values, firstName: e.target.value })
              }
            />
          </Col>
          <Col>
            <TextInput
              id='lastName'
              labelText='Last Name'
              value={values.lastName}
              required
              changeHandler={(e) =>
                setValue({ ...values, lastName: e.target.value })
              }
            />
          </Col>
        </Row>

        <Row className=''>
          <Col md={6} sm={12}>
            <TextInput
              id='email'
              inputType='email'
              name='_replyto'
              labelText='Email'
              value={values.email}
              changeHandler={(e) =>
                setValue({ ...values, email: e.target.value })
              }
              required
            />
          </Col>
          <Col>
            <TextInput
              id='postion'
              labelText='Postion'
              value={values.postion}
              changeHandler={(e) =>
                setValue({ ...values, postion: e.target.value })
              }
            />
          </Col>
        </Row>

        <Row className=''>
          <Col md={6} sm={12}>
            <TextInput
              id='phone'
              labelText='Phone'
              value={values.phone}
              changeHandler={(e) =>
                setValue({ ...values, phone: e.target.value })
              }
              required
            />
          </Col>
          <Col style={{ marginBottom: `4rem` }}>
            <label className='fileLabel' htmlFor='myfile'>
              Upload Resume
            </label>
            <input
              ref={fileRef}
              type='file'
              id='myfile'
              name='upload'
              onChange={() => handleChange()}
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
                  type='checkbox'
                  id='accept'
                  name='accept'
                  value='yes'
                  onChange={(e) =>
                    setValue({ ...values, accept: e.target.checked })
                  }
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
              <button type='submit' disabled={state.submitting || !formValid}>
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
