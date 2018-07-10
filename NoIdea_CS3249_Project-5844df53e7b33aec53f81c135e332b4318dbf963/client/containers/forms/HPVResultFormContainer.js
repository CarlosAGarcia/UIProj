/** 
 * @namespace LabUI/forms/HPVResultFormContainer
 * @memberof module:container/LabUI
 * @desc Container to connect corresponding wrapper to the actual 'HPV Result' form.
 */
import { connect } from 'react-redux';
import HPVResultForm from '../../components/forms/LabForms/HPVResultForm';
import {
  editHPVResult,
  editHPVResultToPatient
} from '../../actions/LabActions';
const mapStateToProps = (state, ownProps) => {
  return {
    initialState: state.sampleHPV.find(
      sampleHPV => sampleHPV.id === ownProps.id
    )
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: values => {
      dispatch(editHPVResult(ownProps.id)(values));
      dispatch(editHPVResultToPatient(ownProps.id)(values));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HPVResultForm);
