/** @module Sign up actions
 * @desc Redux actions for Sign Up
 */

import React, { Component, PropTypes } from 'react';
import { callApi } from '../util/apiCaller';

/**
 * Action to create a new user
 * @method SIGNUP_REQUEST
 * @param {object} user 
 */
const requestSignUp = user => {
  return {
    type: 'SIGNUP_REQUEST',
    user
  };
};

/**
 * Action after a successful sign up
 * @method SIGNUP_SUCCESS
 */
const successSignUp = () => {
  return {
    type: 'SIGNUP_SUCCESS'
  };
};

/**
 * Action after a failed sign up
 * @method SIGNUP_ERROR
 * @param {string} message 
 */
const errorSignUp = message => {
  return {
    type: 'SIGNUP_ERROR',
    message
  };
};

export const signUp = values => dispatch => {
  dispatch(requestSignUp(values));
  callApi('signup', 'POST', values).then(res => {
    console.log(res);
    if (res.error) return dispatch(errorSignUp(res.error));
    else return dispatch(successSignUp());
  });
};
