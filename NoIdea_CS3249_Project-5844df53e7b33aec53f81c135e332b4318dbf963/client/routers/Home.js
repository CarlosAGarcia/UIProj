import React from 'react';
import SignInFormCont from '../containers/forms/SignInFormCont';
import { isLoggedIn } from '../util/helpFunctions';

const SignIn = () =>
  (isLoggedIn()
    ? <div className="row">
        <h3>Welcome ! Please naviguate using the menu above</h3>
      </div>
    : <div className="col-md-8 col-sm-8">
        <div>
          <h3>Please connect to proceed</h3>
        </div>
        <SignInFormCont to="/" />
      </div>);

//Home UI
const HomeUI = ({ params }) => {
  return (
    <div>
      <h2>Home UI - ETiCCS</h2>
      <section className="col-12-md" />
      <SignIn />
    </div>
  );
};

/**
 * Router for Home UI
 * @exports HomeUI
 */
export default HomeUI;
