/** 
 * @namespace gynecologistUI/forms/GynExamFormContainer
 * @memberof module:container/gynecologistUI
 * @desc Container to connect corresponding wrapper to the actual 'Gyn Examination' form.
 */
import { connect } from 'react-redux';
import GynExamForm from '../../../components/forms/GynForms/GynExamForm';
import { editExam } from '../../../actions/GynecologistActions';

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
      dispatch(editExam(ownProps.id, ownProps.formID)(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GynExamForm);
