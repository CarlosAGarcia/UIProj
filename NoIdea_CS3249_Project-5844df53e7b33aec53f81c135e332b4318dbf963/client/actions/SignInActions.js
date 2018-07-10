/** @module Sign In actions
 * @desc Redux actions for Sign In
 */

import React, { Component, PropTypes } from 'react';
import { callApi } from '../util/apiCaller';

/**
 * Action to create a new 
 * @method SIGNIN_REQUEST
 * @param {object} user 
 */
const requestSignIn = (user) => {
    return {
        type: 'SIGNIN_REQUEST',
        user
    };
};

/**
 * Action after a successful sign In
 * @method SIGNIN_SUCCESS
 */
const successSignIn = (apiKey) => {
    return {
        type: 'SIGNIN_SUCCESS',
        apiKey
    };
};

/**
 * Action after a failed sign In
 * @method SIGNIN_ERROR
 * @param {string} message 
 */
const errorSignIn = (message) => {
    return {
        type: 'SIGNIN_ERROR',
        message
    };
};

/**
 * Thunk that take care of signing a user in
 * @method signIn
 * @param {object} values the user creditentials
 * @param {func} dispatch the dispatch method (auto injected)
 */
export const signIn = (values) => (dispatch) => {
    dispatch(requestSignIn(values));
    callApi('signin', 'POST', values).then((res) => {
        console.log(res);
        if (res.error) dispatch(errorSignIn(res.error));
        else dispatch(successSignIn(res.apiKey));
    });
};

/**
 * Action to log the user out
 * @method LOGOUT
 */
export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};
