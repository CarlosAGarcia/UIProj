import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import shortid from 'shortid';

/**
 * @class EligibilityForm
 * @classdesc Step 3 - Household UI forms
 * 
 * Shows if(willingness)
 * 
 * Sets eligibleStudy
 * @memberof form
 */
class EligibilityForm extends React.Component {
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
          <label htmlFor={'hasIntactUterus' + id}>
            Does the participant have an intact uterus?
          </label>
          <Control.select
            id={'hasIntactUterus' + id}
            className="form-control"
            model=".hasIntactUterus"
            required
          >
            <option value="" />
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'hadCervicalCancer' + id}>
            Has participant ever been diagnosed to have cervical cancer?
          </label>
          <Control.select
            id={'hadCervicalCancer' + id}
            className="form-control"
            model=".hadCervicalCancer"
            required
          >
            <option value="" />
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'isPregnant' + id}>
            Is participant currently pregnant?
          </label>
          <Control.select
            id={'isPregnant' + id}
            className="form-control"
            model=".isPregnant"
            required
          >
            <option value="" />
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'understandProcedures' + id}>
            Is participant capable to understand study procedures?
          </label>
          <Control.select
            id={'understandProcedures' + id}
            className="form-control"
            model=".understandProcedures"
            required
          >
            <option value="" />
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'capableToConsent' + id}>
            Is participant able to give a valid consent?
          </label>
          <Control.select
            id={'capableToConsent' + id}
            className="form-control"
            model=".capableToConsent"
            required
          >
            <option value="" />
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Control.select>
        </div>
        <button className="btn btn-primary btn-lg pull-right" type="submit">
          Submit
        </button>
      </LocalForm>
    );
  }
}

export default EligibilityForm;
