import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'
import * as React from 'react'
import styled from 'styled-components'

const SectionStyled = styled.section`
  color: ${({ theme }) => theme.color.black};
  margin: ${({ theme }) => theme.spacing[12]}px auto;
  max-width: ${({ theme }) => theme.width.article};
  padding: 0 ${({ theme }) => theme.spacing[2]}px;
  text-align: center;
  input[type=submit] {
    background-color: ${({ theme }) => theme.color.blue};
    border: none;
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;
    font-size: 0.9em;
    padding: ${({ theme }) => theme.spacing[2]}px
      ${({ theme }) => theme.spacing[7]}px;
    text-transform: uppercase;
    transition: all 0.25s ease-out;
    &:hover {
      background-color: ${({ theme }) => theme.color.blueDark};
      color: ${({ theme }) => theme.color.white};
    }
  }
  .check-error-text {
    margin: 0 auto ${({ theme }) => theme.spacing[2]}px auto;
    text-align: center;
  }
  .message-field {
    box-sizing: border-box;
    margin: 0 auto ${({ theme }) => theme.spacing[4]}px auto;
    width: 100%;
    @media ${({ theme }) => theme.breakpoint.sm} {
      margin: 0 auto;
      padding: 0 ${({ theme }) => theme.spacing[2]}px ${({ theme }) => theme.spacing[6]}px ${({ theme }) => theme.spacing[2]}px;
    }
    label {
      color: ${({ theme }) => theme.color.black};
      font-weight: ${({ theme }) => theme.font.bold};
      font-size: 0.8em;
      text-transform: uppercase;
      @media ${({ theme }) => theme.breakpoint.sm} {
        padding: 0 0 0 21px;
      }
    }
  }
  .MuiFormGroup-root {
    .MuiTextField-root {
      box-sizing: border-box;
      padding: 0 0 ${({ theme }) => theme.spacing[4]}px 0;
      width: 100%;
      @media ${({ theme }) => theme.breakpoint.sm} {
        padding: 0 ${({ theme }) => theme.spacing[2]}px ${({ theme }) => theme.spacing[6]}px ${({ theme }) => theme.spacing[2]}px;
        width: 50%;
      }
      label {
        color: ${({ theme }) => theme.color.black};
        font-weight: ${({ theme }) => theme.font.bold};
        font-size: 0.8em;
        text-transform: uppercase;
        @media ${({ theme }) => theme.breakpoint.sm} {
          padding: 0 0 0 21px;
        }
      }
    }
  }
  .MuiFormControlLabel-root {
    display: block;
    box-sizing: border-box;
    .MuiFormControlLabel-label {
      font-style: italic;
      color: ${({ theme }) => theme.color.greyMedium};
    }
  }
`

export default function Form() {
  const [checked, setChecked] = React.useState(false)
  const [status, statusSet] = React.useState('')
  const [formData, FormDataSet] = React.useState({})
  const [formError, formErrorSet] = React.useState({})

  const handleChange = (event) => {
    formErrorSet(prevData => ({
      ...prevData,
      'consent': !event.target.checked,
    }))

    setChecked(event.target.checked)
  }

  const updateInput = (event, field) => {
    FormDataSet(prevData => ({
      ...prevData,
      [field]: event.target.value,
    }))

    const fieldError = (event.target.value.length > 0) ? false : true
    formErrorSet(prevData => ({
      ...prevData,
      [field]: fieldError,
    }))
  }

  const submitForm = (event) => {
    event.preventDefault()

    const syncErrors = []
    if (!formData['first-name'] || formData['first-name'].length < 1) {
      formErrorSet(prevData => ({
        ...prevData,
        'first-name': true,
      }))
      syncErrors.push('first-name')
    }

    if (!formData['last-name'] || formData['last-name'].length < 1) {
      formErrorSet(prevData => ({
        ...prevData,
        'last-name': true,
      }))
      syncErrors.push('last-name')
    }

    if (!formData['company'] || formData['company'].length < 1) {
      formErrorSet(prevData => ({
        ...prevData,
        'company': true,
      }))
      syncErrors.push('company')
    }

    if (!formData['job-title'] || formData['job-title'].length < 1) {
      formErrorSet(prevData => ({
        ...prevData,
        'job-title': true,
      }))
      syncErrors.push('job-title')
    }

    if (!formData['email'] || formData['email'].length < 1 || !validateEmail(formData['email'])) {
      formErrorSet(prevData => ({
        ...prevData,
        'email': true,
      }))
      syncErrors.push('email')
    }

    if (!formData['phone'] || formData['phone'].length < 1) {
      formErrorSet(prevData => ({
        ...prevData,
        'phone': true,
      }))
      syncErrors.push('phone')
    }

    if (!formData['message'] || formData['message'].length < 1) {
      formErrorSet(prevData => ({
        ...prevData,
        'message': true,
      }))
      syncErrors.push('message')
    }

    if (!checked) {
      formErrorSet(prevData => ({
        ...prevData,
        'consent': true,
      }))
      syncErrors.push('consent')
    }

    if (syncErrors.length === 0) {
      axios({
        url: 'https://formspree.io/f/mqkyorzl',
        method: 'post',
        headers: {
          'Accept': 'application/json'
        },
        data: {
          first_name: formData['first-name'],
          last_name: formData['last-name'],
          company: formData['company'],
          job_title: formData['job-title'],
          email: formData['email'],
          phone: formData['phone'],
          message: formData['message'],
          consent: formData['consent']
        }
      }).then((response) => {
        if (response.status === 200) {
          statusSet('SUCCESS')
        } else {
          statusSet('ERROR')
        }
      })
    }
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <SectionStyled>
      <form autoComplete='off'>
        <FormGroup row>
          <TextField
            error={formError['first-name']}
            fullWidth
            // helperText={(formError['first-name'] ? 'Required field.' : null)}
            label='First Name'
            name='first-name'
            onBlur={(event) => updateInput(event, 'first-name')}
            required
          />
          <TextField
            error={formError['last-name']}
            fullWidth
            // helperText={(formError['last-name'] ? 'Required field.' : null)}
            label='last Name'
            name='last-name'
            onBlur={(event) => updateInput(event, 'last-name')}
            required
          />
        </FormGroup>

        <FormGroup row>
          <TextField
            error={formError['company']}
            // helperText={(formError['company'] ? 'Required field.' : null)}
            label='Company'
            name='company'
            onBlur={(event) => updateInput(event, 'company')}
            required
          />
          <TextField
            error={formError['job-title']}
            // helperText={(formError['job-title'] ? 'Required field.' : null)}
            label='Job Title'
            name='job-title'
            onBlur={(event) => updateInput(event, 'job-title')}
            required
          />
        </FormGroup>

        <FormGroup row>
          <TextField
            error={formError['email']}
            // helperText={(formError['email'] ? 'Required field.' : null)}
            label='Email'
            name='email'
            onBlur={(event) => updateInput(event, 'email')}
            required
            type='email'
          />
          <TextField
            error={formError['phone']}
            // helperText={(formError['phone'] ? 'Required field.' : null)}
            label='Phone'
            name='phone'
            onBlur={(event) => updateInput(event, 'phone')}
            required
            type='tel'
          />
        </FormGroup>

        <TextField
          className='message-field'
          error={formError['message']}
          // fullWidth
          // helperText={(formError['message'] ? 'Required field.' : null)}
          label='Your Message'
          multiline
          name='message'
          onBlur={(event) => updateInput(event, 'message')}
          required
          rowsMax={4}
          type='tel'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              name='consent'
              value='consent'
            />
          }
          label='I consent to my submitted data being collected and stored.'
        />
        <FormHelperText className='check-error-text' error>{(formError['consent']) ? 'Required field.' : <span>&nbsp;</span>}</FormHelperText>

        <input onClick={submitForm} type='submit' value='send »' />
      </form>

      {status === 'SUCCESS' && (
        <p>Thank you for your message. It has been sent.</p>
      )}
      {status === 'ERROR' && (
        <p>Ooops! There was an error. Please try again</p>
      )}
    </SectionStyled>
  )
}
