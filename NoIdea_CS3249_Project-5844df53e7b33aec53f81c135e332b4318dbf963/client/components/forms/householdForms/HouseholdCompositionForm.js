import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import shortid from 'shortid';

/**
 * @class HouseholdCompositionForm
 * @classdesc Step 1 - Household UI forms
 * 
 * Shows always (Add/Edit buttons)
 * 
 * Sets basic info, eligibleAsking and presence
 * @memberof form
 */
class HouseholdCompositionForm extends React.Component {
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
        <div>
          <div className="form-group">
            <label htmlFor={'name' + id}>Full Name</label>
            <Control.text
              className="form-control"
              id={'name' + id}
              model=".name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor={'initials' + id}>Initials</label>
            <Control.text
              className="form-control"
              id={'initials' + id}
              model=".initials"
            />
          </div>
          <div className="form-group">
            <label htmlFor={'gender' + id}>Gender</label>
            <Control.select
              id={'gender' + id}
              className="form-control"
              model=".gender"
              required
            >
              <option value="" />
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Control.select>
          </div>
          <div className="form-group">
            <label htmlFor={'age' + id}>Age</label>
            <Control
              id={'age' + id}
              className="form-control"
              model=".age"
              type="number"
              validators={{
                validAge: age => age >= 0
              }}
              required
            />
            <Errors
              className="errors"
              model=".age"
              messages={{
                validAge: 'Age cannot be negative!'
              }}
              show="touched"
            />
          </div>
          <div className="form-group">
            <label htmlFor={'relationship' + id}>
              Relationship to head of household
            </label>
            <Control.select
              id={'relationship' + id}
              className="form-control"
              model=".relationship"
              required
            >
              <option value="" />
              <option value="Is Head">Is Head</option>
              <option value="Spouse">Spouse</option>
              <option value="Child">Child</option>
              <option value="Parent">Parent</option>
              <option value="Mother- or Father-in-law">
                Mother- or Father-in-law
              </option>
              <option value="Grandparent">Grandparent</option>
              <option value="Sibling">Sibling</option>
              <option value="Sister- or Brother-in-law">
                Sister- or Brother-in-law
              </option>
              <option value="Aunt or Uncle">Aunt or Uncle</option>
              <option value="Cousin">Cousin</option>
              <option value="Cohabiting partner">Cohabiting partner</option>
              <option value="Friend">Friend</option>
              <option value="Roommate">Roommate</option>
              <option value="Servant">Servant</option>
              <option value="Other">Other</option>
            </Control.select>
          </div>
          <div className="form-group">
            <label htmlFor={'presence' + id}>Presence</label>
            <Control.select
              id={'presence' + id}
              className="form-control"
              model=".presence"
              required
            >
              <option value="" />
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Control.select>
          </div>
          <div className="form-group">
            <label htmlFor={'residency' + id}>Residency Status</label>
            <Control.select
              id={'residency' + id}
              className="form-control"
              model=".residency"
              required
            >
              <option value="" />
              <option value="permanent">
                Permanent (present more than 14 nights/month)
              </option>
              <option value="partTime">
                Part-time (present 3-14 nights/month)
              </option>
            </Control.select>
          </div>
        </div>
        <button className="btn btn-primary btn-lg pull-right" type="submit">
          Submit
        </button>
      </LocalForm>
    );
  }
}

export default HouseholdCompositionForm;
