/** @module lab actions
 * @desc Redux actions for Lab UI
 */
import React, { Component, PropTypes } from 'react';
import { convertBool } from '../util/helpFunctions';

/**
 * Create new patient, from 'Registration' form (Household UI)
 * Uses National ID as patientID
 * SampleID will be the same as 'requisitionCodeNr' in 'HPV Sample' form
 * @method ADD_PATIENT
 * @type {action}
 * @param {string} id 
 * @param {object} data
 */
export const addPatient = id =>
  data => {
    // Create an 'empty' patient
    let newPatient = {
      patientID: data.nationalID,
      sampleID: '',
      name: data.name,
      age: data.age,
      noSamples: 0,
      noRecvSamples: 0,
      labRemarks: '',
      nurseRegistration: false,
      informedHPV: false,
      HPVResult: '',
      seen: false,
      nurseExamStatus: 'notDone',
      biomarkerTaken: false,
      biomarkerResult: '',
      questionnaire: false,
      informedBiomarker: false,
      gynRegistration: false,
      gynExamStatus: 'incomplete',
      biopsyDone: false,
      biopsyReportRecv: false,
      nurseName: '',
      clinicVisitDate: '',
      initials: '',
      clinicConsent: false,
      everHadSex: false,
      sexualDebut: 0,
      hadSexInPast12M: false,
      sexPartnersInPast12M: 0,
      sexPartnersInLife: 0,
      parity: 0,
      menstruation: '',
      familyPlanning: false,
      contraceptiveMethod: '',
      priorCCTestInd: false,
      priorCCTestLocation: '',
      priorCCTestRecordAvailableInd: false,
      priorCCTestDate: '',
      priorCCTestResult: '',
      breastLump: false,
      HIVTest: false,
      HIVTestResult: '',
      ART: '',
      viaHistory: false,
      latestVIADate: '',
      colposcopyHistory: false,
      latestColDate: '',
      biomarkerCode: '',
      biomarkerRefusalReason: '',
      colposcopyTaken: false,
      colposcopyRefusalReason: '',
      swedeScoreNurse: '',
      exitMsgNurse: '',
      nurseExitMsgRemark: '',
      gynRegDate: '',
      gynRefReason: '',
      familyPlanningStatus: false,
      contraception: '',
      gynRegRemark: '',
      bimanualResult: '',
      colDoneBefore: false,
      lastColDate: '',
      lastColResult: '',
      colCurrentDone: false,
      colNotDoneReason: '',
      colFindingUOAA: '',
      colFindingMAS: '',
      colFindingV: '',
      colFindingLS: '',
      colFindingIS: '',
      swedeScore: '',
      biopsyResult: '',
      gynExamRemark: '',
      treatmentDone: false,
      treatmentProcedure: '',
      treatmentNotDone: '',
      gynTreatRemark: '',
      exitMsg: '',
      gynExitMsgRemark: '',
      biomarkerBatchNumber: '',
      biopsyBatchNumber: ''
    };
    $('#' + id).modal('hide');
    return {
      type: 'ADD_PATIENT',
      id,
      newPatient
    };
  };

/**
 * Create new sample, from 'HPV sample' form (Household UI)
 * SampleID will be the same as 'requisitionCodeNr' in 'HPV Sample' form
 * @method ADD_HPV_SAMPLE
 * @type {action}
 * @param {string} id 
 * @param {object} data
 */
export const addHPVSample = id =>
  data => {
    // Create an 'empty' HPV sample
    let newSample = {
      id: data.requisitionCodeNr,
      type: 'HPV',
      patientID: data.nationalID,
      patientName: data.name,
      recvLab: false,
      recvLabDate: '',
      labTestStatus: false,
      labTestDate: '',
      labTestResult: '',
      testValue: '',
      labRemark: ''
    };
    $('#' + id).modal('hide');
    return {
      type: 'ADD_HPV_SAMPLE',
      id,
      newSample
    };
  };

/**
 * Toggle Lab received status
 * @method TOGGLE_LAB_RECEIVED
 * @type {action}
 * @param {string} id 
 */
export const toggleLabReceived = id => {
  return {
    type: 'TOGGLE_LAB_RECEIVED',
    id: id
  };
};

/**
 * Toggle Lab slide prepared status
 * @method TOGGLE_SLIDE_PREPARED
 * @type {action}
 * @param {string} id 
 */
export const toggleSlidePrepared = id => {
  return {
    type: 'TOGGLE_SLIDE_PREPARED',
    id: id
  };
};

/**
 * Toggle Lab slide stained status
 * @method TOGGLE_SLIDE_STAINED
 * @type {action}
 * @param {string} id 
 */
export const toggleSlideStained = id => {
  return {
    type: 'TOGGLE_SLIDE_STAINED',
    id: id
  };
};

/**
 * Edit HPV result in lab
 * @method EDIT_HPV_RESULT
 * @type {action}
 * @param {string} id 
 * @param {object[]} data
 */
export const editHPVResult = id =>
  data => {
    return {
      type: 'EDIT_HPV_RESULT',
      id: id,
      data: data
    };
  };

/**
 * Edit HPV result in to the patient
 * @method EDIT_HPV_RESULT_TO_PATIENT
 * @type {action}
 * @param {string} id 
 * @param {object[]} data
 */
export const editHPVResultToPatient = id =>
  data => {
    return {
      type: 'EDIT_HPV_RESULT_TO_PATIENT',
      id: id,
      data: data
    };
  };
