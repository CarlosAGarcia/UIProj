/** @module household actions 
 * @desc Redux actions for Household UI
 */
import React, { Component, PropTypes } from 'react';
import shortid from 'shortid';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert';
import { convertBool } from '../util/helpFunctions';
import { callApi } from '../util/apiCaller';

/**
 * Receives persones (from the server)
 * @method RECEIVE_PERSON
 * @type {action}
 * @param {string} response
 */
const retreivePersonsAction = (response) => {
  return {
    type: 'RECEIVE_PERSON',
    response
  };
};

export const retreivePersons = () => dispatch => {
  callApi('household/getAll', 'GET')
      .then(values => {
        if (values.success) dispatch(retreivePersonsAction(values.success));
        else console.log(values);
      })
      .catch(err => console.log(err));
};


/**
 * Add person 'Household Composition' form
 * @method ADD_PERSON
 * @type {action}
 * @param {string} id 
 * @param {string} formID
 * @param {object} data
 */
export const addPerson = (id, formID) => data => {
  // Convert string values from forms to booleans
  let newData = convertBool(data);
  let eligibleAsking = data.gender == 'female' && data.age >= 19;
  let body = { ...newData, eligibleAsking };
  callApi('household/add', 'POST', body);
  $('#' + formID).modal('hide');
  return {
    type: 'ADD_PERSON',
    id,
    data: newData,
    eligibleAsking
  };
};

/**
 * Edit person 'Household Composition' form
 * @method EDIT_PERSON
 * @type {action}
 * @param {string} id
 * @param {string} formID
 * @param {object} data
 */
export const editPerson = (id, formID) => data => {
  // Convert string values from forms to booleans
  let newData = convertBool(data);
  $('#' + formID).modal('hide');
  return {
    type: 'EDIT_PERSON',
    id,
    data: newData,
    eligibleAsking: data.gender == 'female' && data.age >= 19
  };
};

/**
 * Edit person from 'Eligibility' form
 * @method SET_ELIGIBILITY
 * @type {action}
 * @param {string} id 
 * @param {string} formID
 * @param {object} data
 */
export const setEligibility = (id, formID) => data => {
  // Convert string values from forms to booleans
  let newData = convertBool(data);
  $('#' + formID).modal('hide');
  return {
    type: 'SET_ELIGIBILITY',
    id,
    data: newData,
    eligibleStudy: newData.willingness &&
      newData.hasIntactUterus &&
      !newData.hadCervicalCancer &&
      !newData.isPregnant &&
      newData.understandProcedures &&
      newData.capableToConsent
  };
};

/**
 * Edit person from 'Reproductive Health' form
 * @method SET_QUESTIONNAIRE_1
 * @type {action}
 * @param {string} id 
 * @param {string} formID
 * @param {object} data
 */
export const setQuestionnaire = (id, formID) => data => {
  let newData = convertBool(data);
  $('#' + formID).modal('hide');
  return {
    type: 'SET_QUESTIONNAIRE_1',
    id,
    data: newData,
    questionnaire: true // Set value to true when forms are completed
  };
};

/**
 * Edit person from 'HPV Sample' form
 * @method SET_HPV_SAMPLE
 * @type {action}
 * @param {string} id 
 * @param {string} formID
 * @param {object} data
 */
export const setHPVSample = (id, formID) => data => {
  // Convert string values from forms to booleans
  let newData = convertBool(data);
  $('#' + formID).modal('hide');
  return {
    type: 'SET_HPV_SAMPLE',
    id,
    data: newData,
    sampleReq: newData.KHB1TestPerformedInd
  };
};

/**
 * Edit patient from 'HPV Sample' form
 * @method INCREMENT_SAMPLES
 * @type {action}
 * @param {string} id 
 * @param {object} data
 */
export const incrementSamples = id =>
  data => {
    // Convert string values from forms to booleans
    let newData = convertBool(data);
    $('#' + id).modal('hide');
    return {
      type: 'INCREMENT_SAMPLES',
      id: newData.nationalID,
      increment: newData.KHB1TestPerformedInd,
      sampleID: newData.requisitionCodeNr
    };
};


/**
 * Confirm delete - Used as confirmation in deletePerson
 * @method DELETE_PERSON
 * @type {action}
 * @param {object} row 
 */
export const confirmDelete = row => {
  return {
    type: 'DELETE_PERSON',
    id: row.id
  };
};

/**
 * Delete person - This will prompt a confirm alert
 * @method confirmAlert
 * @type {action}
 * @param {object} row 
 * @param {function} dispatch
 */
export const deletePerson = (row, dispatch) => {
  return confirmAlert({
    title: 'Confirm Delete Person',
    message: 'Are you sure you want to delete person?',
    confirmLabel: 'Confirm',
    cancelLabel: 'Cancel',
    onConfirm: () => dispatch(confirmDelete(row)),
    onCancel: () => {} // Empty action
  });
};
