import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import { v4 } from 'uuid';

/**
 * @class NurseExitForm
 * @classdesc Step 4 - Nurse UI forms
 * 
 * @memberof form
 */
class NurseExitForm extends React.Component {
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
          <label htmlFor={'exitMsgNurse' + id}>Exit Message</label><br />
          <Control.select
            id={'exitMsgNurse' + id}
            className="form-control"
            model=".exitMsgNurse"
            required
          >
            <option value="" />
            <option value="referred to gynecologist">
              Referred to gynecologist
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
          <label htmlFor={'nurseExitMsgRemark' + id}>Remark</label>
          <Control.textarea
            id={'nurseExitMsgRemark' + id}
            className="form-control"
            model=".nurseExitMsgRemark"
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
export default NurseExitForm;
