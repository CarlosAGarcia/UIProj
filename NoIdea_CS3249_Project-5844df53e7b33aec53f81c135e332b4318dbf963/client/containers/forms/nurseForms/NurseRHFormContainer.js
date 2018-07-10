/** 
 * @namespace gynecologistUI/forms/NurseRHFormContainer
 * @memberof module:container/nurseUI
 * @desc Container to connect corresponding wrapper to the actual 'Nurse Register' form.
 */
import { connect } from 'react-redux';
import NurseRHForm from '../../../components/forms/NurseForms/NurseRHForm';
import { setQuestionnaire2 } from '../../../actions/NurseActions';

const mapStateToProps = (state, ownProps) => {
  return {
    initialState: state.patient.find(
      patient => patient.patientID === ownProps.id
    )
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: values =>
      dispatch(setQuestionnaire2(ownProps.id, ownProps.formID)(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NurseRHForm);