import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import shortid from 'shortid';

/**
 * @class HPVResultForm
 * @classdesc Add/Edit HPV result in HPV lab UI
 * @memberof form
 */
class HPVResultForm extends React.Component {
  render() {
    const { initialState, handleSubmit } = this.props;
    const id = shortid.generate();
    return (
      <LocalForm
        initialState={initialState}
        onSubmit={val => handleSubmit(val)}
      >
        <div className="form-group">
          <label>Lab Tech's Name</label>
          <Control.text
            className="form-control"
            model=".techName"
            id={'techName' + id}
            required
          />
        </div>
        <div className="form-group">
          <label>Assay Date</label>
          <Control
            className="form-control"
            id="labTestDate"
            model=".labTestDate"
            id={'labTestDate' + id}
            type="date"
            required
            validators={{
              validDate: date => {
                var input = new Date(date);
                var today = new Date();
                return input <= today;
              }
            }}
          />
          <Errors
            className="errors"
            model=".labTestDate"
            show="touched"
            messages={{ validDate: 'Cannot enter a future date!' }}
          />
        </div>
        <div className="form-group">
          <label>HPV Batch Number</label>
          <Control.text
            className="form-control"
            id={'id' + id}
            model=".id"
            type="number"
            required
          />
        </div>
        <div className="form-group">
          <label>Was the HPV run successful?</label>
          <Control.select
            model=".runStatus"
            id={'runStatus' + id}
            className="form-control"
            required
          >
            <option value="" />
            <option value="Yes">Yes</option>
            <option value="No">No(Please specify in remarks)</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label>HPV Value</label>
          <Control
            id={'testValue' + id}
            type="number"
            className="form-control"
            model=".testValue"
            required
          />
        </div>
        <div className="form-group">
          <label>Result (if successful)</label>
          <Control.select
            model=".labTestResult"
            id={'labTestResult' + id}
            className="form-control"
          >
            <option value="" />
            <option value="Positive">Positive</option>
            <option value="Negative">Negative</option>
          </Control.select>
        </div>
        <div className="from-group">
          <label>Remark</label>
          <Control.textarea
            className="form-control"
            id={'labRemark' + id}
            model=".labRemark"
          />
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

export default HPVResultForm;
