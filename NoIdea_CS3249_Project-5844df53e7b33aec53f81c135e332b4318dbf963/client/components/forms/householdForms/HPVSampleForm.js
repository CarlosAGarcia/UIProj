import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import shortid from 'shortid';

/**
 * @class HPVSampleForm
 * @classdesc Step 7 - Household UI forms
 * 
 * Shows if(eligibleStudy)
 * 
 * Sets sampleReq, increments noSamples and creates new HPVsample
 * @memberof form
 */
class HPVSampleForm extends React.Component {
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
          <label htmlFor={'TCConsent' + id}>
            Do you consent to provide genital self-collected sample today?
          </label>
          <Control.select
            id={'TCConsent' + id}
            className="form-control"
            model=".TCConsent"
            required
          >
            <option value="" />
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'KHB1TestPerformedInd' + id}>
            Was a genital sample provided?
          </label>
          <Control.select
            id={'KHB1TestPerformedInd' + id}
            className="form-control"
            model=".KHB1TestPerformedInd"
            required
          >
            <option value="" />
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'requisitionCodeNr' + id}>
            Enter the lot number for the first or only KHB test
          </label>
          <Control
            id={'requisitionCodeNr' + id}
            className="form-control"
            model=".requisitionCodeNr"
            type="number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor={'HPVTestRefusalReason' + id}>
            What is the main reason you did not want to provide genital sample as part of today’s visit?
            {' '}
            (Tick best answer choice. After participant answers, thank them for their time. Save form and close.)
            {' '}
          </label>
          <Control.select
            id={'HPVTestRefusalReason' + id}
            className="form-control"
            model=".HPVTestRefusalReason"
            required
          >
            <option value="" />
            <option value="Didn't decline">Didn't decline</option>
            <option value="Fear from sampling">Fear from sampling</option>
            <option value="Not able to selfsampling">
              Not able to selfsampling
            </option>
            <option value="Fear from possible positive result">
              Fear from possible positive result
            </option>
            <option value="Unable to spend time for study">
              Unable to spend time for study
            </option>
            <option value="Not interested">Not interested</option>
            <option
              value="Family/friend/husband might not want woman to participate"
            >
              Family/friend/husband might not want woman to participate
            </option>
            <option value="Decline to answer">Decline to answer</option>
          </Control.select>
        </div>
        <button className="btn btn-primary btn-lg pull-right" type="submit">
          Submit
        </button>
      </LocalForm>
    );
  }
}

export default HPVSampleForm;
