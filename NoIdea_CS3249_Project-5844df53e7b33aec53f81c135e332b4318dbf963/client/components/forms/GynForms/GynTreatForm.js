import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import shortid from 'shortid';

/**
 * @class GynTreatForm
 * @classdesc Add/Edit Treatment info in Gynecologist UI
 * @memberof form
 */

class GynTreatForm extends React.Component {
  render() {
    const { initialState, handleSubmit } = this.props;
    const id = shortid.generate();

    return (
      <LocalForm
        initialState={initialState}
        onSubmit={val => handleSubmit(val)}
      >
        <div className="form-group">
          <label>Was a pre-cancer Rx done today?</label>
          <Control.select
            model=".treatmentDone"
            id={'treatmentDone' + id}
            className="form-control"
            required
          >
            <option value="" />
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label>What pre-cancer treatment was done? (if applicable)</label>
          <Control.select
            model=".treatmentProcedure"
            id={'reatmentProcedure' + id}
            className="form-control"
          >
            <option value="" />
            <option value="Cryo">Cryo</option>
            <option value="LeeP">LeeP</option>
            <option value="Cold-coagulation">Cold-coagulation</option>
            <option value="Cone-biopsy">Cone-biopsy</option>
            <option value="Others">Others(Please specify in remarks)</option>
          </Control.select>
        </div>

        <div className="form-group">
          <label>Why was no pre-cancer treatment done? (if applicable)</label>
          <Control.select
            model=".treatmentNotDone"
            id={'treatmentNotDone' + id}
            className="form-control"
          >
            <option value="" />
            <option value="Not needed">Not needed</option>
            <option value="Patient refused">Patient refused</option>
            <option value="Others">Others(Please specify in remarks)</option>
          </Control.select>
        </div>

        <div className="from-group">
          <label>Remark</label>
          <Control.textarea
            className="form-control"
            model=".gynTreatRemark"
            id={'gynTreatRemark' + id}
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
export default GynTreatForm;
