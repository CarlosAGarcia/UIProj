import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import shortid from 'shortid';

/**
 * @class HouseholdRegistrationForm
 * @classdesc Add/Edit household form in Community UI
 * @memberof form
 */
class HouseholdRegistrationForm extends React.Component {
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
          <label htmlFor={'visitDate' + id}>Visit Date</label>
          <Control
            className="form-control"
            id={'visitDate' + id}
            model=".visitDate"
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
            model=".visitDate"
            messages={{
              pastDate: "Can't enter future date!"
            }}
            show="touched"
          />
        </div>
        <div className="form-group">
          <label htmlFor={'community' + id}>Community</label>
          <Control.text
            id={'community' + id}
            className="form-control"
            model=".community"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor={'name' + id}>Household Surname</label>
          <Control.text
            id={'name' + id}
            className="form-control"
            model=".name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor={'address' + id}>Address</label>
          <Control.text
            id={'address' + id}
            className="form-control"
            model=".address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor={'householdNumber' + id}>
            Household Number (National)
          </label>
          <Control
            id={'householdNumber' + id}
            className="form-control"
            model=".householdNumber"
            type="number"
            validators={{
              validNum: num => num > 0
            }}
            errors={{
              posValid: num => num <= 0
            }}
            required
          />
          <Errors
            className="errors"
            model=".householdNumber"
            messages={{
              posValid: 'The number needs to be bigger than 0!'
            }}
            show="touched"
          />
        </div>
        <div className="form-group">
          <label>GPS location</label>
          <div className="input-group">
            <div className="input-group-addon">N: </div>
            <Control.text className="form-control" model=".gpsLocation[0]" />
            <div className="input-group-addon">E: </div>
            <Control.text className="form-control" model=".gpsLocation[1]" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor={'remarks' + id}>Description</label>
          <Control.textarea
            id={'remarks' + id}
            className="form-control"
            model=".remarks"
          />
        </div>
        <button className="btn btn-primary btn-lg" type="submit">Submit</button>
      </LocalForm>
    );
  }
}

export default HouseholdRegistrationForm;
