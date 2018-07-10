/** 
 * @namespace Logic/forms/LostPasswordFormContainer
 * @memberof module:container/Logic
 * @desc Container to connect corresponding wrapper to the actual 'LostPassword' form.
 */
import { connect } from 'react-redux';
import LostPasswordForm from '../../components/forms/LostPasswordForm';
import * as action from '../../actions/LostPasswordActions';

const handleSubmit = dispatch => values => {
  console.log(values);
  dispatch(action.recuperatePassword(values));
};

const mapStateToProps = (state, ownProps) => {
  return {
    errorMessage: state.lostpassword.errorMessage,
    isFetching: state.lostpassword.isFetching,
    isSuccess: state.lostpassword.isSuccess
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: values => handleSubmit(dispatch)(values)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LostPasswordForm);
