/** 
 * @namespace gynecologistUI/forms/GynExitMsgFormContainer
 * @memberof module:container/gynecologistUI
 * @desc Container to connect corresponding wrapper to the actual 'Gyn Exit Message' form.
 */
import { connect } from 'react-redux';
import GynExitMsgForm from '../../../components/forms/GynForms/GynExitMsgForm';
import { editExitMsg } from '../../../actions/GynecologistActions';

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
      dispatch(editExitMsg(ownProps.id, ownProps.formID)(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GynExitMsgForm);
