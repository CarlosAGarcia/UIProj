/** 
 * @namespace householdUI/forms/AgeEligibleWomanFormCont
 * @memberof module:container/householdUI
 * @desc Container to connect corresponding wrapper to the actual 'Age-Eligible' form.
 */
import { connect } from 'react-redux';
import AgeEligibleWomanForm
  from '../../../components/forms/householdForms/AgeEligibleWomanForm';
import { editPerson } from '../../../actions/HouseholdActions';

const mapStateToProps = (state, ownProps) => {
  return {
    initialState: state.household.find(person => person.id === ownProps.id)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: values =>
      dispatch(editPerson(ownProps.id, ownProps.formID)(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  AgeEligibleWomanForm
);
