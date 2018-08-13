import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {auth} from './Authentication';

const AuthButton = ({history}) =>
  auth.isAuthenticated === true ? (
    <Link
      to="/"
      onClick={() => {
        auth.signOut(() => history.push('/'));
      }}
    >
      Sign Out
    </Link>
  ) : (
    <Link to="/login">Login</Link>
  );
AuthButton.propTypes = {
  history: PropTypes.objectOf(String).isRequired,
};

export default withRouter(AuthButton);
