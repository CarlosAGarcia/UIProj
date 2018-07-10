/** @module gynecologist actions 
 * @desc Redux actions for Gynecologist UI
 */
import React from 'react';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert';
import shortid from 'shortid';
import { convertBool } from '../util/helpFunctions';

/**
 * Change 'Gyn Examination Status'
 * @method SELECT_GYN_EXAM
 * @type {action}
 * @param {string} id 
 * @param {bool} value 
 */
export const selectGynExam = (id, value) => {
  return {
    type: 'SELECT_GYN_EXAM',
    id: id,
    gynExamStatus: value
  };
};

/**
 * Toggle 'Biopsy Done'
 * @method TOGGLE_BIOPSY_DONE
 * @type {action}
 * @param {string} id 
 */
export const toggleBiopsyDone = id => {
  return {
    type: 'TOGGLE_BIOPSY_DONE',
    id: id
  };
};

/**
 * Toggle 'Recv Biopsy Report'
 * @method TOGGLE_RECV_BIOPSY_REPORT
 * @type {action}
 * @param {string} id 
 */
export const toggleRecvBiopsyReport = id => {
  return {
    type: 'TOGGLE_RECV_BIOPSY_REPORT',
    id: id
  };
};

/**
 * Edit patient registration form in gynecologist UI
 * @method EDIT_GYN_REG
 * @type {action}
 * @param {string} id 
 * @param {string} formID
 * @param {object} data
 */
export const editRegistration = (id, formID) =>
  data => {
    $('#' + formID).modal('hide');
    return {
      type: 'EDIT_GYN_REG',
      id: id,
      data: data
    };
  };

/**
 * Edit patient examination form in gynecologist UI
 * @method EDIT_GYN_EXAM
 * @type {action}
 * @param {string} id 
 * @param {string} formID
 * @param {object} data
 */
export const editExam = (id, formID) =>
  data => {
    $('#' + formID).modal('hide');
    return {
      type: 'EDIT_GYN_EXAM',
      id: id,
      data: data
    };
  };

/**
 * Edit patient treatment form in gynecologist UI
 * @method EDIT_GYN_TREAT
 * @type {action}
 * @param {string} id 
 * @param {string} formID
 * @param {object} data
 */
export const editTreat = (id, formID) =>
  data => {
    $('#' + formID).modal('hide');
    return {
      type: 'EDIT_GYN_TREAT',
      id: id,
      data: data
    };
  };

/**
 * Edit patient exit message form in gynecologist UI
 * @method EDIT_GYN_EXIT_MSG
 * @type {action}
 * @param {string} id 
 * @param {string} formID
 * @param {object} data
 */
export const editExitMsg = (id, formID) =>
  data => {
    $('#' + formID).modal('hide');
    return {
      type: 'EDIT_GYN_EXIT_MSG',
      id: id,
      data: data
    };
  };

/**
 * Confirm send a biopsy sample from gynecologist to the lab
 * @method SEND_BIOPSY_SAMPLE_FROM_GYN
 * @type {action}
 * @param {string} id
 * @param {string} formID
 * @param {object} data
 */
export const sendBiopsySample = (id, formID) =>
  data => {
    $('#' + formID).modal('hide');
    let newSample = {
      id: data.biopsyBatchNumber,
      patientID: id,
      type: 'Biopsy',
      recvLab: false,
      recvLabDate: '',
      slidePrepStatus: false,
      slidePrepDate: '',
      slideStainStatus: false,
      slideStainDate: '',
      recvPatho: false,
      recvPathoDate: '',
      pathoTestStatus: false,
      pathoTestDate: '',
      result: '',
      pathoRemarks: ''
    };
    return {
      type: 'SEND_BIOPSY_SAMPLE_FROM_GYN',
      newSample
    };
  };

/**
 * Edit a biopsy batch number
 * @method EDIT_PATIENT
 * @type {action}
 * @param {string} id
 * @param {string} formID
 * @param {object} data
 */
export const editBiopsyBatchNumber = (id, formID) =>
  data => {
    let newData = convertBool(data);
    $('#' + formID).modal('hide');
    return {
      type: 'EDIT_PATIENT',
      id: id,
      data: newData
    };
  };
