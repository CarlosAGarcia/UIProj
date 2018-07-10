import React from 'react';
import SignUpFormCont from '../containers/forms/SignUpFormCont';

//SignUp UI
const SignUp = ({ params }) => {
  return (
    <div>
      <h2>Sign Up</h2>
      <SignUpFormCont />
    </div>
  );
};

/**
 * Router for Sign Up
 * @exports SignUp
 */
export default SignUp;
