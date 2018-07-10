import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import shortid from 'shortid';

/**
 * @class GynExitMsgForm
 * @classdesc Add/Edit exit message in Gynecologist UI
 * @memberof form
 */

class GynExitMsgForm extends React.Component {
  render() {
    const { initialState, handleSubmit } = this.props;
    const id = shortid.generate();

    return (
      <LocalForm
        initialState={initialState}
        onSubmit={val => handleSubmit(val)}
      >
        <div className="form-group">
          <label>Exit Message</label>
          <Control.select
            model=".exitMsg"
            id={'exitMsg' + id}
            className="form-control"
            required
          >
            <option value="" />
            <option value="Referred for cancer Rx">
              Referred for cancer Rx
            </option>
            <option value="Infection treated">
              Infection treated
            </option>
            <option value="repeat visit">
              Repeat visit(specify in remarks)
            </option>
            <option value="Follow-up visit in months">
              Follow-up visit in months (specify in remarks)
            </option>
          </Control.select>
        </div>
        <div className="from-group">
          <label>Remark</label>
          <Control.textarea
            className="form-control"
            model=".gynExitMsgRemark"
            id={'gynExitMsgRemark' + id}
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
export default GynExitMsgForm;
