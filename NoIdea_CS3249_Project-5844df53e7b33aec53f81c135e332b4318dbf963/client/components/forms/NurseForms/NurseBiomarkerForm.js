import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import { v4 } from 'uuid';

/**
 * @class NurseBiomarkerForm
 * @classdesc Nurse UI forms
 * 
 * @memberof form
 */
class NurseBiomarkerForm extends React.Component {
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
          <label htmlFor={'biomarkerBatchNumber' + id}>
            Enter the biomarker test batch number
          </label>
          <br />
          <Control
            id={'biomarkerBatchNumber' + id}
            className="form-control"
            model=".biomarkerBatchNumber"
            type="number"
            required
          />
        </div>
        <div className="modal-footer">
          <button className="btn btn-primary" type="submit">
            Send to Lab
          </button>
        </div>

      </LocalForm>
    );
  }
}
export default NurseBiomarkerForm;
