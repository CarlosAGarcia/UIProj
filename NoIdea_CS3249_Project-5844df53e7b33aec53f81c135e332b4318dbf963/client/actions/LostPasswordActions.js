/** @module Lost Password actions
 * @desc Redux actions for recuperating password
 */

import React, { Component, PropTypes } from 'react';
import { callApi } from '../util/apiCaller';

/**
 * Action to recuperate Password
 * @method LOSTPASSWORD_REQUEST
 * @param {object} user 
 */
const requestLostPassword = (user) => {
    return {
        type: 'LOSTPASSWORD_REQUEST',
        user
    };
};

/**
 * Action after a successful request
 * @method LOSTPASSWORD_SUCCESS
 */
const successLostPassword = () => {
    return {
        type: 'LOSTPASSWORD_SUCCESS',
    };
};

/**
 * Action after a failed request
 * @method LOSTPASSWORD_ERROR
 * @param {string} message 
 */
const errorLostPassword = (message) => {
    return {
        type: 'LOSTPASSWORD_ERROR',
        message
    };
};

export const recuperatePassword = (values) => (dispatch) => {
    dispatch(requestLostPassword(values));
    callApi('lostPassword', 'POST', values).then((res) => {
        console.log(res);
        if (res.error) return dispatch(errorLostPassword(res.error));
        else return dispatch(successLostPassword());
    });
}