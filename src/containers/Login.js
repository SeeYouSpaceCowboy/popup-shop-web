import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { login } from '../actions/userActions'
import Input from '../components/redux-form/Input'

class Login extends Component {
  constructor() {
    super()

    this.renderField = this.renderField.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) { return <Input field={ field }/> }

  onSubmit(values) {
    this.props.login(values, () => this.props.history.push('/chats'))
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form className='login' onSubmit={ handleSubmit(this.onSubmit) }>
        <h1>Welcome Back</h1>

        <Field
          type="text"
          placeholder="username"
          name='username'
          component={ this.renderField }
        />
        <Field
          type="password"
          placeholder="password"
          name='password'
          component={ this.renderField }
        />

        <p>Dont have an account? <Link to='/signup'>Sign Up</Link></p>

        <button type="submit">Login</button>

        <Link to='/forgot-password'>Forgot your password?</Link>
      </form>
    )
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  login: PropTypes.func
}

function validate(values) {
  const errors = {}

  if(!values.username) errors.username = "Enter a username"
  if(!values.password) errors.password = "Enter a password"

  return errors
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    login
  }, dispatch)
}

export default reduxForm({
  validate,
  form: 'PostsLoginForm'
})(withRouter(connect(null, mapDispatchToProps)(Login)))
