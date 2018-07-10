/** 
 * @namespace householdUI/forms/EligibilityFormCont
 * @memberof module:container/householdUI
 * @desc Container to connect corresponding wrapper to the actual 'Eligibility' form.
 */
import { connect } from 'react-redux';
import EligibilityForm
  from '../../../components/forms/householdForms/EligibilityForm';
import { setEligibility } from '../../../actions/HouseholdActions';

const mapStateToProps = (state, ownProps) => {
  return {
    initialState: state.household.find(person => person.id === ownProps.id)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: values =>
      dispatch(setEligibility(ownProps.id, ownProps.formID)(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EligibilityForm);
