/** 
 * @namespace gynecologistUI/forms/NurseRegFormContainer
 * @memberof module:container/nurseUI
 * @desc Container to connect corresponding wrapper to the actual 'Nurse Register' form.
 */
import { connect } from 'react-redux';
import NurseRegistrationForm
  from '../../../components/forms/NurseForms/NurseRegistrationForm';
import { regClinic } from '../../../actions/NurseActions';

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
      dispatch(regClinic(ownProps.id, ownProps.formID)(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  NurseRegistrationForm
);
