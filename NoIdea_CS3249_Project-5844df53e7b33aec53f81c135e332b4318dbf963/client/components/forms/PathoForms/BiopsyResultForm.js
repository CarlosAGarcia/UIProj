import React from 'react';
import { LocalForm, Control, Errors } from 'react-redux-form';
import shortid from 'shortid';

/**
 * @class BiopsyResultForm
 * @classdesc Add/Edit Biopsy result in Biopsy Pathologist UI
 * @memberof form
 */
class BiopsyResultForm extends React.Component {
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
            model=".pathoTestDate"
            show="touched"
            messages={{ validDate: 'Cannot enter a future date!' }}
          />
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
            <option value="1">Negative</option>
            <option value="2">CIN I</option>
            <option value="3">CIN II</option>
            <option value="4">CIN III</option>
            <option value="5">Microinvasive Squamous Cancer</option>
            <option value="6">Invasive Squamous Cancer</option>
            <option value="7">Adenocarcinoma In-situ</option>
            <option value="8">Adenocarcinoma</option>
            <option value="9">P16 Positive</option>
          </Control.select>
        </div>

        <div className="from-group">
          <label>Remark</label>
          <Control.textarea
            model=".pathoRemarks"
            id={'pathoRemarks' + id}
            className="form-control"
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

export default BiopsyResultForm;
