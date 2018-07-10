import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import { v4 } from 'uuid';

/**
 * @class NurseRHForm
 * @classdesc Step 2 - Nurse UI forms
 * 
 * @memberof form
 */
class NurseRHForm extends React.Component {
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
          <label htmlFor={'everHadSex' + id}>
            Have you ever had sex?
          </label>
          <Control.select
            id={'everHadSex' + id}
            className="form-control"
            model=".everHadSex"
            required
          >
            <option value="" />
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'sexualDebut' + id}>Age of sexual debut?</label>
          <Control
            id={'sexualDebut' + id}
            className="form-control"
            model=".sexualDebut"
            type="number"
            validators={{
              validAge: age => age >= 0
            }}
          />
          <Errors
            className="errors"
            model=".sexualDebut"
            messages={{
              validAge: 'Age cannot be negative!'
            }}
            show="touched"
          />
        </div>
        <div className="form-group">
          <label htmlFor={'hadSexInPast12M' + id}>
            Have you had sex in the past 12 months?
          </label>
          <Control.select
            id={'hadSexInPast12M' + id}
            className="form-control"
            model=".hadSexInPast12M"
          >
            <option value="" />
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'sexPartnersInPast12M' + id}>
            How many sex partners have you had in the past 12 months?
          </label>
          <Control
            id={'sexPartnersInPast12M' + id}
            className="form-control"
            model=".sexPartnersInPast12M"
            type="number"
            validators={{
              validAge: age => age >= 0
            }}
          />
          <Errors
            className="errors"
            model=".sexPartnersInPast12M"
            messages={{
              validAge: 'Number cannot be negative!'
            }}
            show="touched"
          />
        </div>
        <div className="form-group">
          <label htmlFor={'sexPartnersInLife' + id}>
            How many sex partners have you had in your lifetime?
          </label>
          <Control
            id={'sexPartnersInLife' + id}
            className="form-control"
            model=".sexPartnersInLife"
            type="number"
            validators={{
              validAge: age => age >= 0
            }}
          />
          <Errors
            className="errors"
            model=".sexPartnersInLife"
            messages={{
              validAge: 'Number cannot be negative!'
            }}
            show="touched"
          />
        </div>
        <div className="form-group">
          <label htmlFor={'parity' + id}>
            How many times have you been pregnant?
          </label>
          <Control
            id={'parity' + id}
            className="form-control"
            model=".parity"
            type="number"
            validators={{
              validAge: age => age >= 0
            }}
          />
          <Errors
            className="errors"
            model=".parity"
            messages={{
              validAge: 'Number cannot be negative!'
            }}
            show="touched"
          />
        </div>
        <div className="form-group">
          <label htmlFor={'isPregnant' + id}>
            Are you currently pregnant?
          </label>
          <Control.select
            id={'isPregnant' + id}
            className="form-control"
            model=".isPregnant"
          >
            <option value="" />
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'menstruation' + id}>
            When was your last menstrual period?
          </label>
          <Control.select
            id={'menstruation' + id}
            className="form-control"
            model=".menstruation"
          >
            <option value="" />
            <option value="Menstruating">Menstruating</option>
            <option value="Within the last week">Within the last week</option>
            <option value="More than a week ago">More than a week ago</option>
            <option value="Menopausal">Menopausal</option>
            <option value="Other">Other (specify ...)</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'familyPlanning' + id}>
            Do you currently use family planning?
          </label>
          <Control.select
            id={'familyPlanning' + id}
            className="form-control"
            model=".familyPlanning"
          >
            <option value="" />
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'contraceptiveMethod' + id}>
            What family planning do you use?
          </label>
          <Control.select
            id={'contraceptiveMethod' + id}
            className="form-control"
            model=".contraceptiveMethod"
          >
            <option value="" />
            <option value="NA">NA</option>
            <option value="Pill">Pill</option>
            <option value="Injection">Injection</option>
            <option value="Implant">Implant</option>
            <option value="Loop">Loop</option>
            <option value="Other">Other (specify ...)</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'priorCCTestInd' + id}>
            Have you ever previously been screened for cervical cancer?
          </label>
          <Control.select
            id={'priorCCTestInd' + id}
            className="form-control"
            model=".priorCCTestInd"
          >
            <option value="" />
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'priorCCTestLocation' + id}>
            What CC screening method was used?
          </label>
          <Control.select
            id={'priorCCTestLocation' + id}
            className="form-control"
            model=".priorCCTestLocation"
          >
            <option value="" />
            <option value="NA">NA</option>
            <option value="VIA">VIA</option>
            <option value="Pap">Pap</option>
            <option value="Other">Other (specify ...)</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'priorCCTestRecordAvailableInd' + id}>
            Is a record of your last CC screening test available to review today?
          </label>
          <Control.select
            id={'priorCCTestRecordAvailableInd' + id}
            className="form-control"
            model=".priorCCTestRecordAvailableInd"
          >
            <option value="" />
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'priorCCTestDate' + id}>
            Recorded date of previous test
          </label>
          <Control
            className="form-control"
            id={'priorCCTestDate' + id}
            model=".priorCCTestDate"
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
            model=".priorCCTestDate"
            messages={{
              pastDate: "Can't enter future date!"
            }}
            show="touched"
          />
        </div>
        <div className="form-group">
          <label htmlFor={'priorCCTestResult' + id}>
            Recorded result of previous test
          </label>
          <Control.select
            id={'priorCCTestResult' + id}
            className="form-control"
            model=".priorCCTestResult"
          >
            <option value="" />
            <option value="NA">NA</option>
            <option value="VIA+">VIA+</option>
            <option value="VIA-">VIA-</option>
            <option value="Indeterminate">Indeterminate</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'breastLump' + id}>
            Did you ever have a breast lump or an operation on your breast?
          </label>
          <Control.select
            id={'breastLump' + id}
            className="form-control"
            model=".breastLump"
          >
            <option value="" />
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'HIVTest' + id}>
            Have you ever been tested for HIV?
          </label>
          <Control.select
            id={'HIVTest' + id}
            className="form-control"
            model=".HIVTest"
          >
            <option value="" />
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'HIVTestResult' + id}>
            What was the result of your latest HIV test?
          </label>
          <Control.select
            id={'HIVTestResult' + id}
            className="form-control"
            model=".HIVTestResult"
          >
            <option value="" />
            <option value="NA">NA</option>
            <option value="Non-reactive (negative)">
              Non-reactive (negative)
            </option>
            <option value="Positive">Positive</option>
            <option value="I don't know">I don't know</option>
            <option value="I don't want to answer">
              I don't want to answer
            </option>
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor={'ART' + id}>
            Are you currently taking ART?
          </label>
          <Control.select id={'ART' + id} className="form-control" model=".ART">
            <option value="" />
            <option value="true">Yes</option>
            <option value="false">No</option>
            <option value="I don't want to answer">
              I don't want to answer
            </option>
          </Control.select>
        </div>
        <button className="btn btn-primary btn-lg pull-right" type="submit">
          Submit
        </button>
      </LocalForm>
    );
  }
}

export default NurseRHForm;
