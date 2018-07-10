/** 
 * @namespace Logic/forms/SignUpFormContainer
 * @memberof module:container/Logic
 * @desc Container to connect corresponding wrapper to the actual 'Sign up' form.
 */
import { connect } from 'react-redux';
import SignUpForm from '../../components/forms/SingUpForm';
import * as action from '../../actions/SignUpActions';

const handleSubmit = dispatch =>
  values => {
    console.log(values);
    dispatch(action.signUp(values));
  };

const mapStateToProps = (state, ownProps) => {
  return state.signup;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: values => handleSubmit(dispatch)(values)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
