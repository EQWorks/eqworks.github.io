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

  // const [state, handleSubmit] = useForm("xyylvbnb");
  // if (state.succeeded) {
  //     return <SuccessMsg />;
  // }

  // const formSubmit = (e) =>{
  //     // console.log('submitting...')
  //     handleSubmit(e);
  // }
  const handleOnSubmit = (e) => {
    console.log('submitting form:')
    console.log(values)

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
                  id='company'
                  labelText='Company'
                  value={values.company}
                  changeHandler={(e) =>
                    setValue({ ...values, company: e.target.value })
                  }
                />
              </Col>
              <Col>
                <TextInput
                  id='jobTitle'
                  labelText='Job Title'
                  value={values.jobTitle}
                  changeHandler={(e) =>
                    setValue({ ...values, jobTitle: e.target.value })
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
                  id='phone'
                  labelText='Phone'
                  value={values.phone}
                  changeHandler={(e) =>
                    setValue({ ...values, phone: e.target.value })
                  }
                  required
                />
              </Col>
            </Row>

            <Row className=''>
              <Col>
                <TextInput
                  id='message'
                  name='message'
                  type='textarea'
                  labelText='Your Message'
                  value={values.message}
                  changeHandler={(e) =>
                    setValue({ ...values, message: e.target.value })
                  }
                />
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
                  <button
                    type='submit'
                    disabled={status.submitting || !formValid}
                  >
                    Send &#187;
                  </button>
                </div>
              </Col>
            </Row>
          </>
        )}

        {/* <Row>
                    <Col>
                        <p>{status.info.msg}</p>
                    </Col>
                </Row> */}
      </Container>
    </form>
  )
}

export default ContactForm
