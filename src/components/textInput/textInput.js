import React, { useState } from 'react'
import ClassNames from 'classnames'
import * as componentStyles from './textInput.module.scss'

const TextInput = ({
  id,
  labelText,
  inputType,
  name,
  changeHandler,
  value,
  invalid,
  required
}) => {
  const [isPopulated, setPopulated] = useState(false)

  return (
    <div className={componentStyles.inputContainer}>
      <label
        className={
          isPopulated
            ? ClassNames(componentStyles.label, componentStyles.sm)
            : componentStyles.label
        }
        htmlFor={id}
      >
        {labelText}
        {required && <span className='required'>*</span>}
      </label>
      <input
        className={
          isPopulated
            ? ClassNames(componentStyles.input, componentStyles.populated)
            : componentStyles.input
        }
        id={id}
        name={name ? name : id}
        type={inputType ? inputType : 'text'}
        onFocus={() => setPopulated(true)}
        onBlur={(e) => {
          if (e.target.value && e.target.value !== '') setPopulated(true)
          else setPopulated(false)
        }}
        onChange={changeHandler ? changeHandler : ''}
        value={value ? value : ''}
        valid={invalid ? 'false' : 'true'}
      />
    </div>
  )
}

export default TextInput
