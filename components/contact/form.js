import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import TextField from '@material-ui/core/TextField'
import * as React from 'react'
import styled from 'styled-components'

import Button from '../shared/button'

const SectionStyled = styled.section`
  color: ${({ theme }) => theme.color.black};
  margin: 0 auto ${({ theme }) => theme.spacing[12]}px auto;
  max-width: ${({ theme }) => theme.width.page};
  padding: 0 ${({ theme }) => theme.spacing[2]}px;
`

export default function Form() {
  const [checked, setChecked] = React.useState(false)
  const [status, setStatus] = React.useState('')
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

    if (!formData['email'] || formData['email'].length < 1) {
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
      console.log(formData)
    }

    // const form = event.target
    // const data = new FormData(form)
    // const xhr = new XMLHttpRequest()
    // xhr.open(form.method, form.action)
    // xhr.setRequestHeader('Accept', 'application/json')
    // xhr.onreadystatechange = () => {
    //   if (xhr.readyState !== XMLHttpRequest.DONE) return
    //   if (xhr.status === 200) {
    //     form.reset()
    //     setStatus('SUCCESS')
    //   } else {
    //     setStatus('ERROR')
    //   }
    // }
    // xhr.send(data)
  }

  return (
    <SectionStyled>
      <form
        // action='https://formspree.io/mqkyorzl'
        autoComplete='off'
      >
        <FormGroup row>
          <TextField
            error={formError['first-name']}
            // helperText={(formError['first-name'] ? 'Required field.' : null)}
            label='First Name'
            name='first-name'
            onBlur={(event) => updateInput(event, 'first-name')}
            required
          />
          <TextField
            error={formError['last-name']}
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
          error={formError['message']}
          fullWidth
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
          label='Secondary'
        />
        {formError['consent'] && (
          <FormHelperText error>Required field.</FormHelperText>
        )}

        <input onClick={submitForm} type='submit' value='send' />
      </form>
    </SectionStyled>
  )
}
