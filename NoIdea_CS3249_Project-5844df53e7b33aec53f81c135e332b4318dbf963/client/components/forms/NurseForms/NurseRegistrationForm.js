import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import { v4 } from 'uuid';

/**
 * @class NurseRegistrationForm
 * @classdesc Step 1 - Nurse UI forms
 * 
 * @memberof form
 */
class NurseRHForm extends React.Component {
  constructor() {
    super();
    this.dispatch = null;
  }

  componentWillUpdate({ initialState }) {
    this.dispatch(actions.load('local', initialState));
  }

  render() {
    const { initialState, handleSubmit } = this.props;
    const id = v4();
    return (
      <LocalForm
        initialState={initialState}
        getDispatch={dispatch => this.dispatch = dispatch}
        onSubmit={val => handleSubmit(val)}
      >
        <div className="form-group">
          <label htmlFor={'nurseName' + id}>Nurse's Name</label>
          <Control.text
            id={'nurseName' + id}
            className="form-control"
            model=".nurseName"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor={'clinicVisitDate' + id}>Date of Visit</label>
          <Control
            id={'clinicVisitDate' + id}
            className="form-control"
            model=".clinicVisitDate"
            type="date"
            required
            validators={{
              validDate: date => {
                var input = new Date(date);
                var today = new Date();
                return input <= today || date == '';
              }
            }}
          />
          <Errors
            className="errors"
            model=".clinicVisitDate"
            show="touched"
            messages={{ validDate: 'Cannot enter a future date!' }}
          />
        </div>

        <div className="form-group">
          <label htmlFor={'patientID' + id}>Patient ID</label><br />
          <Control.text
            id={'patientID' + id}
            className="form-control"
            model=".patientID"
            type="number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor={'initials' + id}>Patient Initials</label>
          <Control.text
            id={'initials' + id}
            className="form-control"
            model=".initials"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor={'age' + id}>Patient Age</label><br />
          <Control.text
            id={'age' + id}
            className="form-control"
            model=".age"
            type="number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor={'clinicConsent' + id}>
            Has the patient been informed about the project and consented to participate?
          </label>
          <Control.select
            id={'clinicConsent' + id}
            className="form-control"
            model=".clinicConsent"
            required
          >
            <option value="" />
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Control.select>
        </div>

        <div className="modal-footer">
          <button className="btn btn-primary" type="submit">
            submit
          </button>
        </div>
      </LocalForm>
    );
  }
}
export default NurseRHForm;
