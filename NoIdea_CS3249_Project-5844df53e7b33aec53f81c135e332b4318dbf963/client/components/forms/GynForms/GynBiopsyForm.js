import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import shortid from 'shortid';

/**
 * @class GynBiopsyForm
 * @classdesc Send a biopsy sample in Gynecologist UI
 * @memberof form
 */

class GynBiopsyForm extends React.Component {
  render() {
    const { initialState, handleSubmit } = this.props;
    const id = shortid.generate();

    return (
      <LocalForm
        initialState={initialState}
        onSubmit={val => handleSubmit(val)}
      >
        <div className="from-group">
          <label>Enter the biopsy test batch number</label>
          <Control
            className="form-control"
            model=".biopsyBatchNumber"
            type="number"
            id={'gynBiopsy' + id}
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
export default GynBiopsyForm;
