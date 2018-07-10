import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import shortid from 'shortid';

/**
 * @class RegistrationForm
 * @classdesc Step 4 - Household UI forms
 * 
 * Shows if(eligibleStudy)
 * 
 * Sets consent and creates new Patient
 * @memberof form
 */
class RegistrationForm extends React.Component {
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
          <label htmlFor={'consent' + id}>
            Has the woman signed the consent form?
          </label>
          <Control.select
            id={'consent' + id}
            className="form-control"
            model=".consent"
            required
          >
            <option value="" />
            <option value="NA">NA</option>
            <option value="Signed">Signed Consent</option>
            <option value="Refused">Refused</option>
            <option value="Pending">Pending</option>
          </Control.select>
        </div>

        <div className="form-group">
          <label htmlFor={'name' + id}>
            Full Name
          </label>
          <Control.text
            id={'name' + id}
            className="form-control"
            model=".name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor={'isComOfResidence' + id}>
            Is this patient's community of residence?
          </label>
          <Control.select
            id={'isComOfResidence' + id}
            className="form-control"
            model=".isComOfResidence"
            required
          >
            <option value="" />
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'nationalID' + id}>National ID</label>
          <Control
            id={'nationalID' + id}
            className="form-control"
            model=".nationalID"
            type="number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor={'dateOfBirth' + id}>Date of Birth</label>
          <Control
            className="form-control"
            id={'dateOfBirth' + id}
            model=".dateOfBirth"
            type="date"
            validators={{
              pastDate: date => {
                var input = new Date(date);
                var today = new Date();
                return input <= today || date == '';
              }
            }}
          />
          <Errors
            className="errors"
            model=".dateOfBirth"
            messages={{
              pastDate: "Can't enter future date!"
            }}
            show="touched"
          />
        </div>
        <div className="form-group">
          <label htmlFor={'contactNumber' + id}>Contact number</label>
          <Control
            id={'contactNumber' + id}
            className="form-control"
            model=".contactNumber"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor={'contactAddress' + id}>
            Contact address
          </label>
          <Control.text
            id={'contactAddress' + id}
            className="form-control"
            model=".contactAddress"
          />
        </div>
        <button className="btn btn-primary btn-lg pull-right" type="submit">
          Submit
        </button>
      </LocalForm>
    );
  }
}

export default RegistrationForm;
