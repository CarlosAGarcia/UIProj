/** 
 * @namespace householdUI/forms/editPersonFormsCont
 * @memberof module:container/householdUI
 * @desc Container to connect corresponding wrapper to the actual 'Household Composition' form.
 */
import { connect } from 'react-redux';
import HouseholdCompositionForm
  from '../../components/forms/householdForms/HouseholdCompositionForm';
import { editPerson } from '../../actions/HouseholdActions';

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
  HouseholdCompositionForm
);
