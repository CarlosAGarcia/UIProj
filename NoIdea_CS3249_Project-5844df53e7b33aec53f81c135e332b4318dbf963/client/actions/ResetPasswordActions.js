/** @module Reset Password actions
 * @desc Redux actions for Reset Password
 */

import React, { Component, PropTypes } from 'react';
import { callApi } from '../util/apiCaller';

/**
 * Action to reset password
 * @method RESET_REQUEST
 * @param {object} user 
 */
const requestReset = user => {
  return {
    type: 'RESET_REQUEST',
    user
  };
};

/**
 * Action after a successful reset
 * @method RESET_SUCCESS
 */
const successReset = () => {
  return {
    type: 'RESET_SUCCESS'
  };
};

/**
 * Action after a failed reset
 * @method RESET_ERROR
 * @param {string} message 
 */
const errorReset = message => {
  return {
    type: 'RESET_ERROR',
    message
  };
};

export const reset = values => dispatch => {
  dispatch(requestReset(values));
  callApi('reset', 'POST', values).then(res => {
    console.log(res);
    if (res.error) return dispatch(errorReset(res.error));
    else return dispatch(successReset());
  });
};
