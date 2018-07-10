/** 
 * @namespace householdUI/forms/RegistrationFormCont
 * @memberof module:container/householdUI
 * @desc Container to connect corresponding wrapper to the actual 'Registration' form.
 */
import { connect } from 'react-redux';
import RegistrationForm
  from '../../../components/forms/householdForms/RegistrationForm';
import { editPerson } from '../../../actions/HouseholdActions';
import { addPatient } from '../../../actions/LabActions';

const mapStateToProps = (state, ownProps) => {
  return {
    initialState: state.household.find(person => person.id === ownProps.id)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: values => {
      dispatch(editPerson(ownProps.id, ownProps.formID)(values));
      dispatch(addPatient(ownProps.id, ownProps.formID)(values));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
