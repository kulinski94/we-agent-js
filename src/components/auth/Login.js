import React from 'react'
import axios from 'axios';

import Form from './Form'
import './FormPage.css'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this._login = this._login.bind(this)
    this._update = this._update.bind(this)
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div className='form-page__wrapper'>
        <div className='form-page__form-wrapper'>
          <div className='form-page__form-header'>
            <h2 className='form-page__form-heading'>Login</h2>
          </div>
          <Form data={this.state} update={this._update} onSubmit={this._login} btnText={'Login'} error={false} currentlySending={false}/>
        </div>
      </div>
    )
  }

  _login() {
    axios.post(`http://localhost:8080/login`, {
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      console.log(res);
    });
  }

  _update(data) {
    this.setState({username: data.username, password: data.password})
  }
}
