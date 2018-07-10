/** 
 * @namespace Logic/forms/ResetPasswordFormContainer
 * @memberof module:container/Logic
 * @desc Container to connect corresponding wrapper to the actual 'Reset password' form.
 */
import { connect } from 'react-redux';
import ResetPasswordForm from '../../components/forms/ResetPasswordForm';
import * as action from '../../actions/ResetPasswordActions';

const handleSubmit = (dispatch, reset) => values => {
  values = { ...values, reset };
  console.log(values);
  dispatch(action.reset(values));
};

const mapStateToProps = (state, ownProps) => {
  return state.reset;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: values => handleSubmit(dispatch, ownProps.reset)(values)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm);
