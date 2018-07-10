/** @module nurse actions 
 * @desc Redux actions for Nurse UI
 */
import React from 'react';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert';
import { convertBool } from '../util/helpFunctions';
import { v4 } from 'uuid';

/**
 * Toggle 'Informed HPV'
 * @method TOGGLE_INFORMED_HPV
 * @type {action}
 * @param {string} id 
 */
export const toggleInformedHPV = id => {
  return {
    type: 'TOGGLE_INFORMED_HPV',
    id: id
  };
};

/**
 * Toggle 'Patient Seen'
 * @method TOGGLE_SEEN
 * @type {action}
 * @param {string} id 
 */
export const toggleSeen = id => {
  return {
    type: 'TOGGLE_SEEN',
    id: id
  };
};

/**
 * Change 'Nurse Examination Status'
 * @method SELECT_NURSE_EXAM
 * @type {action}
 * @param {string} id 
 * @param {bool} value 
 */
export const selectNurseExam = (id, value) => {
  return {
    type: 'SELECT_NURSE_EXAM',
    id: id,
    nurseExamStatus: value
  };
};

/**
 * Toggle 'Biomarker Sample Taken'
 * @method TOGGLE_BIOMARKER_TAKEN
 * @type {action}
 * @param {string} id 
 */
export const toggleBiomarkerTaken = id => {
  return {
    type: 'TOGGLE_BIOMARKER_TAKEN',
    id: id
  };
};

/**
 * Toggle 'Questionnaire #2'
 * @method TOGGLE_QUESTIONNAIRE
 * @type {action}
 * @param {string} id 
 */
export const toggleQuestionnaire = id => {
  return {
    type: 'TOGGLE_QUESTIONNAIRE',
    id: id
  };
};

/**
 * Toggle 'Informed Biomarker'
 * @method TOGGLE_INFORMED_BIOMARKER
 * @type {action}
 * @param {string} id 
 */
export const toggleInformedBiomarker = id => {
  return {
    type: 'TOGGLE_INFORMED_BIOMARKER',
    id: id
  };
};

/**
 * Edit patient from forms in Nurse UI
 * @method EDIT_PATIENT
 * @type {action}
 * @param {string} id 
 * @param {string} formID
 * @param {object} data
 */
export const editPatient = (id, formID) =>
  data => {
    let newData = convertBool(data);
    $('#' + formID).modal('hide');
    return {
      type: 'EDIT_PATIENT',
      id: id,
      data: newData
    };
  };

/**
 * Register patient from Register form in Nurse UI
 * @method REG_CLINIC
 * @type {action}
 * @param {string} id 
 * @param {string} formID
 * @param {object} data
 */
export const regClinic = (id, formID) =>
  data => {
    let newData = convertBool(data);
    $('#' + formID).modal('hide');
    return {
      type: 'REG_CLINIC',
      id: id,
      data: newData,
      nurseRegistration: true
    };
  };

/**
 * Edit patient from 'Reproductive Health' form
 * @method SET_QUESTIONNAIRE_2
 * @type {action}
 * @param {string} id 
 * @param {string} formID
 * @param {object} data
 */
export const setQuestionnaire2 = (id, formID) =>
  data => {
    let newData = convertBool(data);
    $('#' + formID).modal('hide');
    return {
      type: 'SET_QUESTIONNAIRE_2',
      id,
      data: newData,
      questionnaire: true // Set value to true when forms are completed
    };
  };

/**
 * Send a biomarker sample from nurse to the lab
 * @method SEND_BIOMARKER_SAMPLE_FROM_NURSE
 * @type {action}
 * @param {string} id
 * @param {string} formID
 * @param {object} data
 */
export const sendBiomarkerSample = (id, formID) =>
  data => {
    $('#' + formID).modal('hide');
    let newSample = {
      id: data.biomarkerBatchNumber,
      patientID: id,
      type: 'Biomarker',
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
      type: 'SEND_BIOMARKER_SAMPLE_FROM_NURSE',
      newSample
    };
  };
