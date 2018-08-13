import React from 'react';
import {Field, reduxForm} from 'redux-form';
import PropTypes from 'prop-types';
import {required, iSAdmin, isCorrectPassword} from './validation';

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
  <div style={{padding: `20px`}}>
    <input
      style={{border: 0, borderBottom: `1px solid #2DB1FF`}}
      {...input}
      placeholder={label}
      type={type}
    />
    {touched &&
      ((error && <div style={{color: 'red'}}>{error}</div>) ||
        (warning && <span>{warning}</span>))}
  </div>
);

const LoginForm = ({handleSubmit, pristine, reset, submitting}) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="username"
      type="text"
      component={renderField}
      label="Username"
      validate={[required, iSAdmin]}
    />
    <Field
      name="password"
      type="password"
      component={renderField}
      label="Password"
      validate={[required, isCorrectPassword]}
    />

    <div
      style={{padding: `20px`, display: `flex`, justifyContent: `space-evenly`}}
    >
      <button
        type="submit"
        disabled={submitting}
        style={{
          border: `0`,
          background: `#2db1ff`,
          color: '#fff',
          padding: `10px`,
          cursor: `pointer`,
        }}
      >
        Submit
      </button>
      <button
        style={{
          border: `0`,
          background: `#2db1ff`,
          color: '#fff',
          padding: `3px`,
          cursor: `pointer`,
        }}
        type="button"
        disabled={pristine || submitting}
        onClick={reset}
      >
        Clear Values
      </button>
    </div>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({form: 'Login'})(LoginForm);
