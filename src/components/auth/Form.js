import React from 'react'
import './Form.css'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this._onSubmit = this._onSubmit.bind(this)
    this._changeUsername = this._changeUsername.bind(this)
    this._changePassword = this._changePassword.bind(this)
  }
  render() {
    return (
      <form className='form' onSubmit={this._onSubmit}>
        <div className='form__field-wrapper'>
          <input className='form__field-input' type='text' id='username' value={this.props.data.username} placeholder='frank.underwood' onChange={this._changeUsername} autoCorrect='off' autoCapitalize='off' spellCheck='false'/>
          <label className='form__field-label' htmlFor='username'>
            Username
          </label>
        </div>
        <div className='form__field-wrapper'>
          <input className='form__field-input' id='password' type='password' value={this.props.data.password} placeholder='••••••••••' onChange={this._changePassword}/>
          <label className='form__field-label' htmlFor='password'>
            Password
          </label>
        </div>
        <div className='form__submit-btn-wrapper'>
          <button className='form__submit-btn' type='submit'>
            {this.props.btnText}
          </button>
        </div>
      </form>
    )
  }

  _changeUsername(event) {
    this.props.update({
      ...this.props.data,
      username: event.target.value
    })
  }

  _changePassword(event) {
    this.props.update({
      ...this.props.data,
      password: event.target.value
    })
  }

  _onSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(this.props.data.username, this.props.data.password)
  }
}
