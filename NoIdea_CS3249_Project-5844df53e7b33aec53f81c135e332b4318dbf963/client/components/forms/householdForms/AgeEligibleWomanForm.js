import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import shortid from 'shortid';

/**
 * @class AgeEligibleWomanForm
 * @classdesc Step 2 - Household UI forms
 * 
 * Shows if(eligibleAsking && presence)
 * 
 * Sets willingness
 * @memberof form
 */
class AgeEligibleWomanForm extends React.Component {
  constructor() {
    super();
    this.dispatch = null;
  }

  componentWillUpdate({ initialState }) {
    this.dispatch(actions.load('local', initialState));
  }

  render() {
    const { initialState, handleSubmit } = this.props;
    const id = shortid.generate();
    return (
      <LocalForm
        initialState={initialState}
        getDispatch={dispatch => this.dispatch = dispatch}
        onSubmit={val => handleSubmit(val)}
      >
        <div className="form-group">
          <label htmlFor={'willingness' + id}>
            Is woman willing to participate?
          </label>
          <Control.select
            id={'willingness' + id}
            className="form-control"
            model=".willingness"
            required
          >
            <option value="" />
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'reasonDecline' + id}>
            Reason to decline
          </label>
          <Control.select
            id={'reasonDecline' + id}
            className="form-control"
            model=".reasonDecline"
            required
          >
            <option value="" />
            <option value="Didn't decline">Didn't decline</option>
            <option value="Not interested">Not interested</option>
            <option value="No time">No time</option>
            <option value="Fear from being diagnosed cancer">
              Fear from being diagnosed cancer
            </option>
            <option value="Family/friends might not want woman to participate">
              Family/friends might not want woman to participate
            </option>
            <option value="Other">Other</option>
          </Control.select>
        </div>
        <button className="btn btn-primary btn-lg pull-right" type="submit">
          Submit
        </button>
      </LocalForm>
    );
  }
}

export default AgeEligibleWomanForm;
