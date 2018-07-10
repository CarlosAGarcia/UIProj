/** @module community actions
 * @desc Redux actions for Community UI
 */
import React, { Component, PropTypes } from 'react';
import shortid from 'shortid';
import { callApi } from '../util/apiCaller';

/**
 * Receives households (from the server)
 * @method RECEIVE_HOUSEHOLD
 * @type {action}
 * @param {string} response
 */
const receiveHouseholdAction = (response) => {
  return {
    type: 'RECEIVE_HOUSEHOLD',
    response
  };
};

export const receiveHousehold = () => dispatch => {
  callApi('community/getAll', 'GET')
      .then(values => {
        if (values.success) dispatch(receiveHouseholdAction(values.success));
        else console.log(values);
      })
      .catch(err => console.log(err));
};

/**
 * Add household (with 'Household registration' form)
 * @method ADD_HOUSEHOLD
 * @type {action}
 * @param {string} id
 * @param {string} formID
 * @param {object} data 
 */
export const addHousehold = (id, formID) => data => {
  $('#' + formID).modal('hide');
  let visited = data.visitDate != '' ? true : false;
  let body = { ...data, visited };
  callApi('community/add', 'POST', body);
  return {
    type: 'ADD_HOUSEHOLD',
    id,
    data,
    visited
  };
};

/**
 * Update Household (with 'Household registration' form)
 * @method UPDATE_HOUSEHOLD
 * @type {action}
 * @param {string} id
 * @param {string} formID
 * @param {object} data 
 */
export const updateHousehold = (id, formID) => data => {
  $('#' + formID).modal('hide');
  return {
    type: 'UPDATE_HOUSEHOLD',
    id,
    data
  };
};

/**
 * Toggle visited checkbox
 * @method TOGGLE_VISITED
 * @type {action}
 * @param {string} id
 */
export const toggleVisited = id => {
  return {
    type: 'TOGGLE_VISITED',
    id: id
  };
};

/**
 * Toggle completed checkbox
 * @method TOGGLE_COMPLETED
 * @type {action}
 * @param {string} id
 */
export const toggleCompleted = id => {
  return {
    type: 'TOGGLE_COMPLETED',
    id: id
  };
};

/**
 * Edit remarks
 * @method ADD_REMARKS
 * @type {action}
 * @param {string} id 
 * @param {string} text 
 */
export const addRemark = (id, text) => {
  return {
    type: 'ADD_REMARK',
    id: id,
    remarks: text
  };
};
