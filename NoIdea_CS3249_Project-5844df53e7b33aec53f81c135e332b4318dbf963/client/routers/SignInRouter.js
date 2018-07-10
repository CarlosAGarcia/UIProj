import React from 'react';
import SignInFormCont from '../containers/forms/SignInFormCont';

//SignIn UI
const SignIn = ({ location }) => {
  let from = location.state ? location.state.from.pathname : '/';
  return (
    <div>
      <h2>Sign In</h2>
      <SignInFormCont to={from} />
    </div>
  );
};

/**
 * Router for Sign In
 * @exports SignIn
 */
export default SignIn;
