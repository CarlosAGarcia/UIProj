import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import shortid from 'shortid';

/**
 * @class GynRegistrationForm
 * @classdesc Add/Edit registration info in Gynecologist UI
 * @memberof form
 */

class GynRegistrationForm extends React.Component {
  render() {
    const { initialState, handleSubmit } = this.props;
    const id = shortid.generate();

    return (
      <LocalForm
        initialState={initialState}
        onSubmit={val => handleSubmit(val)}
      >
        <div className="form-group">
          <label>Date of Visit</label>
          <Control
            className="form-control"
            model=".gynRegDate"
            id={'gynRegDate' + id}
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
            model=".gynRegDate"
            show="touched"
            messages={{ validDate: 'Cannot enter a future date!' }}
          />
        </div>
        <div className="form-group">
          <label>Referral Reason</label>
          <Control.select
            model=".gynRefReason"
            id={'gynRefReason' + id}
            className="form-control"
            required
          >
            <option value="" />
            <option value="Abnormal colposcopy">Abnormal colposcopy</option>
            <option value="Positive HPV">Positive HPV</option>
            <option value="Others">Others(Please specify in remarks)</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label>Last menstrual period</label>
          <Control.select
            model=".menstruation"
            id={'menstruation' + id}
            className="form-control"
            required
          >
            <option value="" />
            <option value="Menstruating">Menstruating</option>
            <option value="Within last week">Within last week</option>
            <option value="More than one week ago">
              More than one week ago
            </option>
            <option value="Menopausal">Menopausal</option>
            <option value="Others">Others(Please specify in remarks)</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label>Currently use family planning</label>
          <Control.select
            model=".familyPlanningStatus"
            id={'familyPlanningStatus' + id}
            className="form-control"
            required
          >
            <option value="" />
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label>Family planning method (if applicable)</label>
          <Control.select
            model=".contraception"
            id={'contraception' + id}
            className="form-control"
          >
            <option value="" />
            <option value="Pill">Pill</option>
            <option value="Injection">Injection</option>
            <option value="Implant">Implant</option>
            <option value="Loop">Loop</option>
            <option value="Others">Others(Please specify in remarks)</option>
          </Control.select>
        </div>
        <div className="from-group">
          <label>Remark</label>
          <Control.textarea
            className="form-control"
            model=".gynRegRemark"
            id={'gynRegRemark' + id}
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
export default GynRegistrationForm;
