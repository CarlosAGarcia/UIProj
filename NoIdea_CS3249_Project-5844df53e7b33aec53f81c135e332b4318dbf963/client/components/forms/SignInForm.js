import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import { Redirect, Link } from 'react-router-dom';

/**
 * @class SignInForm
 * @classdesc Form for signing in
 * @memberof form
 */
const SignInForm = ({
  handleSubmit,
  errorMessage,
  isFetching,
  isSuccess,
  isLoggedIn,
  to
}) => (
  <div className="col-md-8">
    <LocalForm onSubmit={val => handleSubmit(val)}>
      <div className="clearfix">
        {errorMessage &&
          <div className="alert alert-danger">
            <span className="glyphicon glyphicon-remove" />
            <strong>{errorMessage}</strong>
          </div>}
        {isFetching &&
          <div className="alert alert-info">Currently signing up</div>}
        {isSuccess && isLoggedIn && <Redirect push to={to} />}
        <div className="well well-sm">
          <strong>
            <span className="glyphicon glyphicon-asterisk" />Required Field
          </strong>
        </div>
        <div className="form-group">
          <label htmlFor="InputEmail">Enter Email</label>
          <div className="input-group">
            <Control
              type="email"
              className="form-control"
              id="InputEmail"
              name="InputEmail"
              placeholder="Enter Email"
              model=".email"
              required
            />
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-asterisk" />
            </span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="InputPassword">Enter Password</label>
          <div className="input-group">
            <Control
              type="password"
              className="form-control"
              name="InputPassword"
              id="InputPassword"
              placeholder="Enter Password"
              model=".password"
              required
            />
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-asterisk" />
            </span>
          </div>
        </div>
        <input
          type="submit"
          name="submit"
          id="submit"
          value="Sign in"
          className="btn btn-info"
        />
      </div>
    </LocalForm>
    <hr className="clearfix" />
    <div
      className="btn-group btn-group-sm btn-group-justified"
      role="group"
      aria-label="Justified button group"
    >
      <Link to="/signup" role="button" className="btn btn-default">
        No Account yet ?
      </Link>
      <Link to="/lostpassword" role="button" className="btn btn-default">
        Lost your password
      </Link>
    </div>
  </div>
);

export default SignInForm;
