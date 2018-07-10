/** 
 * @namespace gynecologistUI/forms/GynTreatFormContainer
 * @memberof module:container/gynecologistUI
 * @desc Container to connect corresponding wrapper to the actual 'Gyn Treatment' form.
 */
import { connect } from 'react-redux';
import GynTreatForm from '../../../components/forms/GynForms/GynTreatForm';
import { editTreat } from '../../../actions/GynecologistActions';

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
      dispatch(editTreat(ownProps.id, ownProps.formID)(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GynTreatForm);
