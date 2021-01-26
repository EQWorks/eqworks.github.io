import React, { useState } from 'react'
import styled from 'styled-components'

const SectionStyled = styled.section`
  color: ${({ theme }) => theme.color.black};
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width.page};
  padding: 20px;
  h3 {
    font-size: 2em;
    margin: 20px auto;
  }
  p {
    color: ${({ theme }) => theme.color.greyMedium};
    margin: 0 0 20px 0;
  }
  form {
    color: ${({ theme }) => theme.color.greyMedium};
    button {
      background-color: ${({ theme }) => theme.color.white};
      border: 2px solid ${({ theme }) => theme.color.black};
      cursor: pointer;
      font-weight: ${({ theme }) => theme.font.bold};
      margin: 0 0 20px 0;
      padding: 10px 20px;
      text-transform: uppercase;
      transition: all 0.25s ease-out;
      &:hover {
        background-color: ${({ theme }) => theme.color.black};
        color: ${({ theme }) => theme.color.white};
      }
    }
    input {
      border: 1px solid ${({ theme }) => theme.color.greyMedium};
      border-radius: 5px;
      box-sizing: border-box;
      margin: 0 0 30px 0;
      padding: 15px;
      width: 100%;
    }
    label {
      display: block;
    }
  }
`

export default function ApplicationForm() {
  const [status, setStatus] = useState('')

  const submitForm = (event) => {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus('SUCCESS')
      } else {
        setStatus('ERROR')
      }
    }
    xhr.send(data)
  }

  return (
    <SectionStyled>
      <h3>Application Form</h3>
      <p>
        Please leave us a quick note with the job you are applying for in the
        subject line and a brief overview of your qualifications. We will
        contact the applicants that we would like to meet with in order to have
        further conversations.
      </p>
      <form
        action='https://formspree.io/xvownjne'
        method='POST'
        onSubmit={submitForm}
      >
        <label>Your name (required)</label>
        <input name='name' required type='text' />
        <label>Email (required)</label>
        <input name='email' required type='email' />
        <label>Subject</label>
        <input name='subject' required type='text' />
        <label>Your Message</label>
        <input cols='50' name='message' required rows='4' type='textarea' />
        <button>Send</button>
        {status === 'SUCCESS' && (
          <p>Thank you for your message. It has been sent.</p>
        )}
        {status === 'ERROR' && (
          <p>Ooops! There was an error. Please try again</p>
        )}
      </form>
    </SectionStyled>
  )
}
