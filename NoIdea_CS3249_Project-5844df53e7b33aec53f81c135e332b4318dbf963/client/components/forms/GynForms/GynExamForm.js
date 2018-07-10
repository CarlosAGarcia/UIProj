import React from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import shortid from 'shortid';

/**
 * @class GynExamForm
 * @classdesc Add/Edit examination info in Gynecologist UI
 * @memberof form
 */

class GynExamForm extends React.Component {
  render() {
    const { initialState, handleSubmit } = this.props;
    const id = shortid.generate();

    return (
      <LocalForm
        initialState={initialState}
        onSubmit={val => handleSubmit(val)}
      >
        <div className="form-group">
          <label>Bimanual Examination Result</label>
          <Control.select
            id={'bimanualResult' + id}
            model=".bimanualResult"
            className="form-control"
            required
          >
            <option value="" />
            <option value="Normal">Normal</option>
            <option value="Abnormal">
              Abnormal(Please specify in remarks)
            </option>
          </Control.select>
        </div>
        <div className="form-group">
          <label>Was a colposcopy done before?</label>
          <Control.select
            id={'colDoneBefore' + id}
            model=".colDoneBefore"
            className="form-control"
            required
          >
            <option value="" />
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label>Date of last colposcopy (if applicable)</label>
          <Control
            className="form-control"
            id={'lastColDate' + id}
            model=".lastColDate"
            type="date"
            validators={{
              validDate: date => {
                var input = new Date(date);
                var today = new Date();
                return date.length === 0 || input <= today;
              }
            }}
          />
          <Errors
            className="errors"
            model=".lastColDate"
            show="touched"
            messages={{ validDate: 'Cannot enter a future date!' }}
          />
        </div>
        <div className="form-group">
          <label>What was the finding of latestet colposcopy?</label>
          <Control.select
            model=".lastColResult"
            className="form-control"
            id={'lastColResult' + id}
          >
            <option value="" />
            <option value="Normal">Normal</option>
            <option value="Abnormal">
              Abnormal(Please specify in remarks)
            </option>
          </Control.select>
        </div>
        <div className="form-group">
          <label>Was a colposcopy done today?</label>
          <Control.select
            model=".colCurrentDone"
            className="form-control"
            id={'colCurrentDone' + id}
            required
          >
            <option value="" />
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label>Why was the colposcopy not done? (if applicable)</label>
          <Control.select
            model=".colNotDoneReason"
            className="form-control"
            id={'colNotDoneReason' + id}
          >
            <option value="" />
            <option value="Menstruating">Menstruating</option>
            <option value="Infection">Infection</option>
            <option value="Patient Refused">Patient Refused</option>
            <option value="Technical Issue">Technical Issue</option>
            <option value="Others">Others(Please specify in remarks)</option>
          </Control.select>
        </div>
        <label>Current Findings (if applicable):</label>
        <div className="form-group">
          <label>Uptake of acetic acis</label>
          <Control.select
            model=".colFindingUOAA"
            className="form-control"
            id={'colFindingUOAA' + id}
          >
            <option value="" />
            <option value="None or transparent">None or transparent</option>
            <option value="Shady, milky">Shady, milky</option>
            <option value="Distinct stearin-like">Distinct stearin-like</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label>Margin and surface</label>
          <Control.select
            model=".colFindingMAS"
            className="form-control"
            id={'colFindingMAS' + id}
          >
            <option value="" />
            <option value="None or diffuse">None or diffuse</option>
            <option
              value="Sharp, but irregular, jagged, 'geographical' satellites"
            >
              Sharp, but irregular, jagged, "geographical" satellites
            </option>
            <option
              value="Sharp and even, difference in surface level such as 'cutting'"
            >
              Sharp and even, difference in surface level such as "cutting"
            </option>
          </Control.select>
        </div>
        <div className="form-group">
          <label>Vessels</label>
          <Control.select
            model=".colFindingV"
            className="form-control"
            id={'colFindingV' + id}
          >
            <option value="" />
            <option value="Fine, regular">Fine, regular</option>
            <option value="Absent">Absent</option>
            <option value="Coarse or atypical">Coarse or atypical</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label>Lesion size</label>
          <Control.select
            model=".colFindingLS"
            className="form-control"
            id={'colFindingLS' + id}
          >
            <option value="" />
            <option value="Less than 5mm">less than 5mm</option>
            <option value="5-15 mm or spanning 2 quadrants">
              5-15 mm or spanning 2 quadrants
            </option>
            <option
              value="More than 15mm or spanning 3-4 quadrants or endocervically undefined"
            >
              More than 15mm or spanning 3-4 quadrants or endocervically undefined
            </option>
          </Control.select>
        </div>
        <div className="form-group">
          <label>Iodine staining</label>
          <Control.select
            model=".colFindingIS"
            className="form-control"
            id={'colFindingIS' + id}
          >
            <option value="" />
            <option value="Brown">Brown</option>
            <option value="Faintly or patchy yellow">
              Faintly or patchy yellow
            </option>
            <option value="Distinct yellow">
              Distinct yellow
            </option>
          </Control.select>
        </div>
        <div className="form-group">
          <label>Swede value</label>
          <Control.text
            className="form-control"
            model=".swedeScore"
            id={'swedeScore' + id}
            type="number"
            required
          />
        </div>
        <div className="form-group">
          <label>Was a biopsy done?</label>
          <Control.select
            model=".biopsyDone"
            className="form-control"
            required
            id={'biopsyDone' + id}
          >
            <option value="" />
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Control.select>
        </div>
        <div className="form-group">
          <label>Biopsy result</label>
          <Control.select
            model=".biopsyresult"
            className="form-control"
            id={'biopsyresult' + id}
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
          </Control.select>
        </div>
        <div className="from-group">
          <label>Remark</label>
          <Control.textarea
            className="form-control"
            model=".gynExamRemark"
            id={'gynExamRemark' + id}
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
export default GynExamForm;
