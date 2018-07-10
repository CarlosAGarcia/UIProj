/** 
 * @namespace householdUI/forms/ReproductiveHealthFormCont
 * @memberof module:container/householdUI
 * @desc Container to connect corresponding wrapper to the actual 'Reproductive Health' form.
 */
import { connect } from 'react-redux';
import ReproductiveHealthForm
  from '../../../components/forms/householdForms/ReproductiveHealthForm';
import { setQuestionnaire } from '../../../actions/HouseholdActions';

const mapStateToProps = (state, ownProps) => {
  return {
    initialState: state.household.find(person => person.id === ownProps.id)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: values =>
      dispatch(setQuestionnaire(ownProps.id, ownProps.formID)(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ReproductiveHealthForm
);
