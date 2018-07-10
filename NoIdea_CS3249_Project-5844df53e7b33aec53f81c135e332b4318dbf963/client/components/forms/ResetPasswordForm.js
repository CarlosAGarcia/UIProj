import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import { Link } from 'react-router-dom';

/**
 * @class SignUpForm
 * @classdesc Form for signing up
 * @memberof form
 */
const SignUpForm = ({ handleSubmit, errorMessage, isFetching, isSuccess }) => (
  <div className="col-md-8">
    <div className="row">
      <LocalForm onSubmit={val => handleSubmit(val)}>
        <div className="clearfix">
          {errorMessage &&
            <div className="alert alert-danger">
              <span className="glyphicon glyphicon-remove" />
              <strong>{errorMessage}</strong>
            </div>}
          {isSuccess &&
            <div className="alert alert-success">
              <strong>
                <span className="glyphicon glyphicon-ok" />
                {' '}
                Success! Your password has been successfully changed
              </strong>
            </div>}
          {isFetching &&
            <div className="alert alert-info">
              Currently changing your password
            </div>}
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
            <label htmlFor="InputPassword">Enter New Password</label>
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
            value="Change password"
            className="btn btn-info pull-right"
          />
        </div>
        <hr />
        <div
          className="btn-group btn-group-sm btn-group-justified"
          role="group"
          aria-label="Justified button group"
        >
          <Link to="/signup" role="button" className="btn btn-default">
            No Account yet ?
          </Link>
          <Link to="/signin" role="button" className="btn btn-default">
            Remembered your password ?
          </Link>
        </div>
      </LocalForm>
    </div>
  </div>
);

export default SignUpForm;
