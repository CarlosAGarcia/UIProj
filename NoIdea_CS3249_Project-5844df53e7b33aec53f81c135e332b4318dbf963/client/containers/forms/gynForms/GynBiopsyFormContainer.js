/** 
 * @namespace gynecologistUI/forms/GynBiopsyForm
 * @memberof module:container/gynecologistUI
 * @desc Container to connect corresponding wrapper to the actual 'Gyn Biopsy' form.
 */
import { connect } from 'react-redux';
import GynBiopsyForm from '../../../components/forms/GynForms/GynBiopsyForm';
import {
  editBiopsyBatchNumber,
  sendBiopsySample
} from '../../../actions/GynecologistActions';

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
      dispatch(
        editBiopsyBatchNumber(ownProps.id, ownProps.formID)(values)
      ), dispatch(sendBiopsySample(ownProps.id, ownProps.formID)(values));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GynBiopsyForm);
