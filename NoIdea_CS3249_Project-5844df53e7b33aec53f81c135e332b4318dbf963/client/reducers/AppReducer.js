import { combineReducers, createStore } from 'redux';
import { reducer as sematable } from 'sematable';
import { community } from './CommunityReducer';
import { household } from './HouseholdReducer';
import { patient } from './PatientReducer';
import { sampleHPV, sampleBiomarker, sampleBiopsy } from './TestSampleReducer';
import { signup } from './SignUpReducer';
import { signin } from './SignInReducer';
import { user } from './UserReducer';
import { lostpassword } from './LostPasswordReducer';
import { reset } from './ResetPasswordReducer';

/**
 * @file AppReducer
 * Parent reducer to combine all other reducers and send to store.
 * @exports combined
 */
export default combineReducers({
  community,
  household,
  patient,
  sampleHPV,
  sampleBiomarker,
  sampleBiopsy,
  sematable,
  signup,
  signin,
  user,
  lostpassword,
  reset
});
