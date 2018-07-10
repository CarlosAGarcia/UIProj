import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import { v4 } from 'uuid';

/**
 * @class NurseExamForm
 * @classdesc Step 3 - Nurse UI forms
 * 
 * @memberof form
 */
class NurseExamForm extends React.Component {
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
          <label htmlFor={'viaHistory' + id}>
            Was a VIA done before?
          </label>
          <Control.select
            id={'viaHistory' + id}
            className="form-control"
            model=".viaHistory"
            required
          >
            <option value="" />
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Control.select>
        </div>

        <div className="form-group">
          <label htmlFor={'latestVIADate' + id}>
            When was the last VIA done
          </label>
          <Control
            id={'latestVIADate' + id}
            className="form-control"
            model=".latestVIADate"
            type="date"
            validators={{
              pastDate: date => {
                var input = new Date(date);
                var today = new Date();
                return input <= today || date == '';
              }
            }}
          />
          <Errors
            className="errors"
            model=".latestVIADate"
            messages={{
              pastDate: "Can't enter future date!"
            }}
            show="touched"
          />
        </div>

        <div className="form-group">
          <label htmlFor={'colposcopyHistory' + id}>
            Was a colposcopy done before?
          </label>
          <Control.select
            id={'colposcopyHistory' + id}
            className="form-control"
            model=".colposcopyHistory"
            required
          >
            <option value="" />
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'latestColDate' + id}>
            When was the last colposcopy done
          </label>
          <Control
            id={'latestColDate' + id}
            className="form-control"
            model=".latestColDate"
            type="date"
            validators={{
              pastDate: date => {
                var input = new Date(date);
                var today = new Date();
                return input <= today || date == '';
              }
            }}
          />
          <Errors
            className="errors"
            model=".latestColDate"
            messages={{
              pastDate: "Can't enter future date!"
            }}
            show="touched"
          />
        </div>
        <div className="form-group">
          <label htmlFor={'biomarkerTaken' + id}>
            Was a biomarker sample taken today?
          </label>
          <Control.select
            id={'biomarkerTaken' + id}
            className="form-control"
            model=".biomarkerTaken"
            required
          >
            <option value="" />
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Control.select>
        </div>

        <div className="form-group">
          <label htmlFor={'biomarkerCode' + id}>Enter Biomarker code</label><br />
          <Control.text
            id={'biomarkerCode' + id}
            className="form-control"
            model=".biomarkerCode"
            type="number"
          />
        </div>

        <div className="form-group">
          <label htmlFor={'biomarkerRefusalReason' + id}>
            What is the main reason you did not provide genital sample  as part of today's visit?
          </label>
          <Control.select
            id={'biomarkerRefusalReason' + id}
            className="form-control"
            model=".biomarkerRefusalReason"
          >
            <option value="" />
            <option value="refused">Woman Refused</option>
            <option value="noCollectionKit">No collection kit</option>
            <option value="notReq">Not Required this visit</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'colposcopyTaken' + id}>
            Was a colposcopy sample taken today?
          </label>
          <Control.select
            id={'colposcopyTaken' + id}
            className="form-control"
            model=".colposcopyTaken"
            required
          >
            <option value="" />
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'colposcopyRefusalReason' + id}>
            Why was the colposcopy not done
          </label>
          <Control.select
            id={'colposcopyRefusalReason' + id}
            className="form-control"
            model=".colposcopyRefusalReason"
          >
            <option value="" />
            <option value=" menstruating ">menstruating</option>
            <option value="infection">infection</option>
            <option value="refused">refused</option>
            <option value="technicalIssue ">technical issue </option>
            <option value="other">other</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'swedeScoreNurse' + id}>Swede score</label><br />
          <Control.text
            id={'swedeScoreNurse' + id}
            className="form-control"
            model=".swedeScoreNurse"
            type="number"
            required
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
export default NurseExamForm;
