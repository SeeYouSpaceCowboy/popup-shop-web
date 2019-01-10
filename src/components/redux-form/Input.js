import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ field }) => {
  const { type, placeholder, meta: { touched, error } } = field

  const className = `${ touched && error ? 'invalid-input' : '' }`

  return (
    <div>
      <input
        className={ className }
        type={ type }
        placeholder={ placeholder }
        { ...field.input }
      />
      <div className="invalid-text">
        { touched ? error : '' }
      </div>
    </div>
  )
}

Input.propTypes = {
  field: PropTypes.object.isRequired
}

export default Input
