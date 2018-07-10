import React from 'react';
import { LocalForm, Control, actions } from 'react-redux-form';
import shortid from 'shortid';
import StepZilla from 'react-stepzilla';
import '../../../node_modules/react-stepzilla/src/css/main.css';

class Step1 extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <div>
        <div className="form-group">
          <label htmlFor={'visitDate' + id}>Visit Date</label>
          <Control
            className="form-control"
            id={'visitDate' + id}
            model=".visitDate"
            type="date"
          />
        </div>
        <div className="form-group">
          <label htmlFor={'community' + id}>Community</label>
          <Control.text
            id={'community' + id}
            className="form-control"
            model=".community"
          />
        </div>
        <div className="form-group">
          <label htmlFor={'name' + id}>Household name</label>
          <Control.text
            id={'name' + id}
            className="form-control"
            model=".name"
          />
        </div>
        <div className="form-group">
          <label htmlFor={'address' + id}>Address</label>
          <Control.text
            id={'address' + id}
            className="form-control"
            model=".address"
          />
        </div>
      </div>
    );
  }
}

class Step2 extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <div>
        <div className="form-group">
          <label htmlFor={'householdNumber' + id}>
            Household Number (National)
          </label>
          <Control
            id={'householdNumber' + id}
            className="form-control"
            model=".householdNumber"
            type="number"
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
        <button className="btn btn-primary btn-lg pull-right" type="submit">
          Submit
        </button>
      </div>
    );
  }
}

/**
 * @class ElegibilityForm
 * @classdesc Example multistep form model, NOT USED!!!
 * @memberof form
 */
class ElegibilityForm extends React.Component {
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
    const steps = [
      { name: 'Step1', component: <Step1 id={id} /> },
      { name: 'Step2', component: <Step2 id={id} /> }
    ];
    return (
      <LocalForm
        initialState={initialState}
        getDispatch={dispatch => this.dispatch = dispatch}
        onSubmit={val => handleSubmit(val)}
      >
        <StepZilla
          steps={steps}
          showNavigation={true}
          preventEnterSubmission={true}
          prevBtnOnLastStep={false}
        />
      </LocalForm>
    );
  }
}

export default ElegibilityForm;
