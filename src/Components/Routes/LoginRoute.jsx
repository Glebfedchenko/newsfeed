import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {auth} from '../Auth/Authentication';

const LoginRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: {from: props.location},
          }}
        />
      )
    }
  />
);
LoginRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default LoginRoute;
