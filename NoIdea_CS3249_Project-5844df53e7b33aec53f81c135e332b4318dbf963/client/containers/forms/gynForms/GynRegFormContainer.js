/** 
 * @namespace gynecologistUI/forms/GynRegFormContainer
 * @memberof module:container/gynecologistUI
 * @desc Container to connect corresponding wrapper to the actual 'Gyn Register' form.
 */
import { connect } from 'react-redux';
import GynRegistrationForm
  from '../../../components/forms/GynForms/GynRegistrationForm';
import { editRegistration } from '../../../actions/GynecologistActions';

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
      dispatch(editRegistration(ownProps.id, ownProps.formID)(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  GynRegistrationForm
);
