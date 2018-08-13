import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {auth} from '../Auth/Authentication';
import LoginForm from './LoginForm';

class Login extends Component {
  state = {redirect: false};

  login = () =>
    auth.authenticate(() => {
      this.setState(() => ({redirect: true}));
    });

  render() {
    const {location} = this.props;
    const {redirect} = this.state;
    const {from} = location.state || {from: {pathname: '/profile'}};
    if (redirect === true) {
      return <Redirect to={from} />;
    }
    return (
      <div>
        <LoginForm onSubmit={this.login} />
      </div>
    );
  }
}

Login.propTypes = {
  location: PropTypes.objectOf(String).isRequired,
};

export default Login;
