import React from 'react';
import LostPasswordFormCont from '../containers/forms/LostPasswordFormCont';

//LostPassword UI
const LostPassword = (params) => {
  return (
    <div>
      <h2>Lost Password</h2>
      <LostPasswordFormCont />
    </div>
  );
};

/**
 * Router for Sign In
 * @exports LostPassword
 */
export default LostPassword;
