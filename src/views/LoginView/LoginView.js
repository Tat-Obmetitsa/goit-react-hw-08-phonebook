import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from './LoginView.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1 className={s.form__title}>Authorization</h1>
        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          className={s.form}
        >
          <label className={s.form__label}>
            Email
            <input
              type="email"
              name="email"
              pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
              value={email}
              onChange={this.handleChange}
              className={s.form__input}
            />
          </label>

          <label className={s.form__label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={s.form__input}
            />
          </label>

          <button type="submit" className={s.form__button}>Log in</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);