import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import shortid from 'shortid';

/**
 * @class SociodemographicForm
 * @classdesc Step 5 - Household UI forms
 * 
 * Shows if(eligibleStudy)
 * 
 * Sets no props
 * @memberof form
 */
class SociodemographicForm extends React.Component {
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
          <label htmlFor={'educationLevel' + id}>
            What level of education have you completed?
          </label>
          <Control.select
            id={'educationLevel' + id}
            className="form-control"
            model=".educationLevel"
          >
            <option value="" />
            <option value="None">None</option>
            <option value="Non Formal">Non Formal</option>
            <option value="Primary">Primary</option>
            <option value="Secondary">Secondary</option>
            <option value="Tertiary">Tertiary (e.g. vocational)</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'employmentStatus' + id}>
            What is your current employment status?
          </label>
          <Control.select
            id={'employmentStatus' + id}
            className="form-control"
            model=".employmentStatus"
          >
            <option value="" />
            <option value="Full-time">Full-time employment</option>
            <option value="Part-time">Part-time employment</option>
            <option value="Seasonal or intermittent">
              Seasonal or intermittent employment
            </option>
            <option value="Informal self-employment">
              Informal self-employment
            </option>
            <option value="Student">Student</option>
            <option value="Retired">Retired</option>
            <option value="Unemployed">
              Not working (non-student, not retired)
            </option>
            <option value="Don't want to answer">Don't want to answer</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'maritalStatus' + id}>
            What is your current marital status?
          </label>
          <Control.select
            id={'maritalStatus' + id}
            className="form-control"
            model=".maritalStatus"
          >
            <option value="" />
            <option value="Single/Never married">Single/Never married</option>
            <option value="Cohabitating">Cohabitating</option>
            <option value="Married">Married</option>
            <option value="Divorced or Formally seperated">
              Divorced or Formally seperated
            </option>
            <option value="Widowed">Widowed</option>
            <option value="Don't want to answer">Don't want to answer</option>
          </Control.select>
        </div>
        <button className="btn btn-primary btn-lg pull-right" type="submit">
          Submit
        </button>
      </LocalForm>
    );
  }
}

export default SociodemographicForm;
