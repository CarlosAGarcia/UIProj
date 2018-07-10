/** 
 * @namespace Logic/forms/SignInFormContainer
 * @memberof module:container/Logic
 * @desc Container to connect corresponding wrapper to the actual 'Sign up' form.
 */
import { connect } from 'react-redux';
import SignInForm from '../../components/forms/SignInForm';
import * as action from '../../actions/SignInActions';

const handleSubmit = dispatch =>
  values => {
    console.log(values);
    dispatch(action.signIn(values));
  };

const mapStateToProps = (state, ownProps) => {
  return { 
    errorMessage: state.signin.errorMessage,
    isFetching: state.signin.isFetching,
    isSuccess: state.signin.isSuccess,
    isLoggedIn: state.user.isSignedIn,
    to: ownProps.to || '/'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: values => handleSubmit(dispatch)(values)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
