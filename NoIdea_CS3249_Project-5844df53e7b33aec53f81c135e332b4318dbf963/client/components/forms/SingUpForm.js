import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import { Link } from 'react-router-dom';

/**
 * @class SignUpForm
 * @classdesc Form for signing 
 * @memberof form
 */
const SignUpForm = ({ handleSubmit, errorMessage, isFetching, isSuccess }) => (
  <div className="col-md-8 col-sm-8">
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
                Success! You have been registred
              </strong>
            </div>}
          {isFetching &&
            <div className="alert alert-info">Currently registring</div>}
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
          <div className="form-group">
            <label htmlFor="SelectFunc">Select Function</label>
            <div className="input-group">
              <Control.select
                className="form-control"
                id="SelectFunc"
                name="function"
                model=".function"
                defaultValue="Please Select"
                required
              >
                <option disabled>Please Select</option>
                <option>Volunteer</option>
                <option>Lab technician</option>
                <option>Clinic nurse</option>
                <option>Gynecologist</option>
                <option>Pathologist</option>
              </Control.select>
              <span className="input-group-addon">
                <span className="glyphicon glyphicon-asterisk" />
              </span>
            </div>
          </div>
          <input
            type="submit"
            name="submit"
            id="submit"
            value="Sign up"
            className="btn btn-info pull-right"
          />
        </div>
        <hr />
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="button group"
        >
          <Link to="/signin" role="button" className="btn btn-default">
            Already have an account ?
          </Link>
        </div>
      </LocalForm>
    </div>
  </div>
);

export default SignUpForm;
