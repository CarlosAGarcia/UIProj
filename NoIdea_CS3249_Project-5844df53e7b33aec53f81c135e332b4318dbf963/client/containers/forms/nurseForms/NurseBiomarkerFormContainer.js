/** 
 * @namespace gynecologistUI/forms/NurseExamForm
 * @memberof module:container/nurseUI
 * @desc Container to connect corresponding wrapper to the actual 'Nurse Register' form.
 */
import { connect } from 'react-redux';
import NurseBiomarkerForm
  from '../../../components/forms/NurseForms/NurseBiomarkerForm';
import {
  editPatient,
  sendBiomarkerSample
} from '../../../actions/NurseActions';

const mapStateToProps = (state, ownProps) => {
  return {
    initialState: state.patient.find(
      patient => patient.patientID === ownProps.id
    )
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: values => {
      dispatch(editPatient(ownProps.id, ownProps.formID)(values)), dispatch(
        sendBiomarkerSample(ownProps.id, ownProps.formID)(values)
      );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NurseBiomarkerForm);
