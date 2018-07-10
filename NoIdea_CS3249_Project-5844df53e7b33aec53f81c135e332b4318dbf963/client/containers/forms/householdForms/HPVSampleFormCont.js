/** 
 * @namespace householdUI/forms/HPVSampleFormCont
 * @memberof module:container/householdUI
 * @desc Container to connect corresponding wrapper to the actual 'HPV Sample' form.
 */
import { connect } from 'react-redux';
import HPVSampleForm
  from '../../../components/forms/householdForms/HPVSampleForm';
import {
  setHPVSample,
  incrementSamples
} from '../../../actions/HouseholdActions';
import { addHPVSample } from '../../../actions/LabActions';

const mapStateToProps = (state, ownProps) => {
  return {
    initialState: state.household.find(person => person.id === ownProps.id)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: values => {
      dispatch(setHPVSample(ownProps.id, ownProps.formID)(values)); // Modifies household
      dispatch(addHPVSample(ownProps.id)(values)); // Modifies sampleHPV
      dispatch(incrementSamples(ownProps.id)(values)); // Modifies patient
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HPVSampleForm);
