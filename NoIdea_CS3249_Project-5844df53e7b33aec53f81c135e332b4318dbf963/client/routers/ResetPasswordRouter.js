import React from 'react';
import ResetPasswordFormCont from '../containers/forms/ResetPasswordFormCont';

//ResetPassword UI
const ResetPassword = ({ match }) => {
  return (
    <div>
      <h2>Reset Password</h2>
      <ResetPasswordFormCont reset={ match.params.reset }/>
    </div>
  );
};

/**
 * Router for Sign In
 * @exports ResetPassword
 */
export default ResetPassword;
