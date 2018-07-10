/** @module container/main */
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import CommunityUI from './routers/CommunityRouter'; // Community UI - child for router
import HouseholdUI from './routers/HouseholdRouter'; // Household UI - child for router
import NurseUI from './routers/NurseRouter'; // Nurse UI - child for router
import GynecologistUI from './routers/GynecologistRouter'; // Gynecologist UI - child for router
import LabUI from './routers/LabRouter'; // Laboratory UI - child for router
import PathoUI from './routers/PathoRouter'; // Pathologist UI - child for router
import SignUp from './routers/SignUpRouter'; //Logic - sign up the users
import SignIn from './routers/SignInRouter'; //Logic - sign in the users
import LostPassword from './routers/LostPasswordRouter'; //Logic - form for lost password part 1
import ResetPassword from './routers/ResetPasswordRouter'; //Logic - form to rest password part 2
import HomeUI from './routers/Home'; // Design UI for the homepage

import DevTools from './components/DevTools';
import { isLoggedIn } from './util/helpFunctions';
const env = process.env.NODE_ENV === 'development';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isLoggedIn() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/signin',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

// The app will get a value of props as children which are going to be rendered
// below header.
class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={HomeUI} />
        <PrivateRoute path="/community" component={CommunityUI} />
        <PrivateRoute path="/household/:number" component={HouseholdUI} />
        <PrivateRoute path="/nurse" component={NurseUI} />
        <PrivateRoute path="/gynecologist" component={GynecologistUI} />
        <PrivateRoute path="/lab/:type" component={LabUI} />
        <PrivateRoute path="/patho/:type" component={PathoUI} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route exact path="/lostpassword" component={LostPassword} />
        <Route path="/lostpassword/:reset" component={ResetPassword} />
        {env && <DevTools />}
      </div>
    );
  }
}

export default App;
