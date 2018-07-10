/** @module pathologist actions
 * @desc Redux actions for Pathologist UI
 */
import React, { Component, PropTypes } from 'react';
import { convertBool } from '../util/helpFunctions';

/**
 * Toggle pathologist received status
 * @method TOGGLE_PATHO_RECEIVED
 * @type {action}
 * @param {string} id 
 */
export const togglePathoReceived = id => {
  return {
    type: 'TOGGLE_PATHO_RECEIVED',
    id: id
  };
};

/**
 * Toggle pathologist tested status
 * @method TOGGLE_PATHO_TESTED
 * @type {action}
 * @param {string} id 
 */
export const togglePathoTested = id => {
  return {
    type: 'TOGGLE_PATHO_TESTED',
    id: id
  };
};

/**
 * Edit pathologist biomarker test result
 * @method CHANGE_BIOMARKER_RESULT
 * @type {action}
 * @param {string} id
 * @param {object[]} data
 */
export const editBiomarkerResult = id =>
  data => {
    return {
      type: 'CHANGE_BIOMARKER_RESULT',
      id: id,
      data: data
    };
  };

/**
 * Edit pathologist biomarker test result
 * @method CHANGE_BIOMARKER_RESULT_TO_PATIENT
 * @type {action}
 * @param {string} id
 * @param {object[]} data
 */
export const editBiomarkerResultToPatient = id =>
  data => {
    return {
      type: 'CHANGE_BIOMARKER_RESULT_TO_PATIENT',
      id: id,
      data: data
    };
  };

/**
 * Edit pathologist biopsy test result
 * @method EDIT_BIOPSY_RESULT
 * @type {action}
 * @param {string} id 
 * @param {object[]} data
 */
export const editBiopsyResult = id =>
  data => {
    return {
      type: 'EDIT_BIOPSY_RESULT',
      id: id,
      data: data
    };
  };

/**
 * Edit pathologist biopsy test result
 * @method CHANGE_BIOPSY_RESULT_TO_PATIENT
 * @type {action}
 * @param {string} id
 * @param {object[]} data
 */
export const editBiopsyResultToPatient = id =>
  data => {
    return {
      type: 'CHANGE_BIOPSY_RESULT_TO_PATIENT',
      id: id,
      data: data
    };
  };
