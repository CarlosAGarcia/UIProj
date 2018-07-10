import React from 'react';
import { LocalForm, Control, Errors } from 'react-redux-form';
import shortid from 'shortid';

/**
 * @class BiomarkerResultForm
 * @classdesc Add/Edit Biomarker result in Biomarker Pathologist UI
 * @memberof form
 */
class BiomarkerResultForm extends React.Component {
  render() {
    const { initialState, handleSubmit } = this.props;
    const required = val => val && val.length;
    const id = shortid.generate();
    return (
      <LocalForm
        initialState={initialState}
        onSubmit={val => handleSubmit(val)}
      >
        <div className="form-group">
          <label>Pathologist's Name</label>
          <Control.text
            className="form-control"
            model=".pathoName"
            id={'pathoName' + id}
            required
          />
        </div>
        <div className="form-group">
          <label>Interpretation Date</label>
          <Control
            className="form-control"
            id={'pathoTestDate' + id}
            model=".pathoTestDate"
            type="date"
            validators={{
              validDate: date => {
                var input = new Date(date);
                var today = new Date();
                return input <= today;
              }
            }}
            required
          />
          <Errors
            className="errors"
            model=".pathoTestDate"
            show="touched"
            messages={{ validDate: 'Cannot enter a future date!' }}
          />
        </div>

        <div className="form-group">
          <label>Quality of Slide</label>
          <Control.select
            model=".quality"
            id={'quality' + id}
            className="form-control"
            required
          >
            <option value="" />
            <option value="1">Ok</option>
            <option value="2">
              Staining Issue(Please specify in remarks)
            </option>
            <option value="3">
              Not Interpretable(Please specify in remarks)
            </option>
          </Control.select>
        </div>

        <div className="form-group">
          <label>Result</label>
          <Control.select
            model=".result"
            id={'result' + id}
            className="form-control"
            required
          >
            <option value="" />
            <option value="Positive">Positive</option>
            <option value="Negative">Negative</option>
            <option value="Indeterminate">Indeterminate</option>
          </Control.select>
        </div>
        <div className="from-group">
          <label>Remark</label>
          <Control.textarea
            className="form-control"
            model=".pathoRemarks"
            id={'pathoRemarks' + id}
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

export default BiomarkerResultForm;
