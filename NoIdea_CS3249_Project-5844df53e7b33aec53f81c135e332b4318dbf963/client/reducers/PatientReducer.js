import { callApi } from '../util/apiCaller';

/**
 * Reducer for data structure 'patient'.
 * Used in Lab UI, NurseUI and Gynecologist UI.
 * Takes the whole array of patient objects.
 * @exports reducer/patient
 */
export const patient = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_PATIENT':
      return action.response;
    // From Registration
    case 'ADD_PATIENT':
      callApi('patient/add', 'POST', action.newPatient);
      return [
        ...state,
        {
          ...action.newPatient
        }
      ];

    case 'INCREMENT_SAMPLES':
    // From NurseActions
    case 'EDIT_PATIENT':
    case 'REG_CLINIC':
    case 'SET_QUESTIONNAIRE_2':
    case 'TOGGLE_INFORMED_HPV':
    case 'TOGGLE_SEEN':
    case 'SELECT_NURSE_EXAM':
    case 'TOGGLE_BIOMARKER_TAKEN':
    case 'TOGGLE_QUESTIONNAIRE':
    case 'TOGGLE_INFORMED_BIOMARKER':
    // From LabActions
    case 'EDIT_HPV_RESULT_TO_PATIENT':
    case 'EDIT_BIOMARKER_RESULT':
    // From PathoActions
    case 'CHANGE_BIOMARKER_RESULT_TO_PATIENT':
    case 'CHANGE_BIOPSY_RESULT_TO_PATIENT':
    // From GynecologistActions
    case 'SELECT_GYN_EXAM':
    case 'TOGGLE_BIOPSY_DONE':
    case 'TOGGLE_RECV_BIOPSY_REPORT':
    case 'EDIT_GYN_REG':
    case 'EDIT_GYN_EXAM':
    case 'EDIT_GYN_TREAT':
    case 'EDIT_GYN_EXIT_MSG':
      return state.map(row => onePatient(row, action));

    default:
      return state;
  }
};

/**
 * Help reducer object 'onePatient'.
 * Takes one patient entry (one patient).
 * @param {object} state 
 * @param {action} action 
 * @returns {object} next state
 */
const onePatient = (state, action) => {
  //Called from lab UI
  if (state.sampleID === action.id) {
    switch (action.type) {
      case 'EDIT_HPV_RESULT_TO_PATIENT':
        var newState = {
          ...state,
          HPVResult: action.data.labTestResult
        };
        callApi('patient/update', 'POST', newState);
        return newState;

      default:
        return state;
    }
  } else if (state.biomarkerBatchNumber === action.id) {
    switch (action.type) {
      case 'CHANGE_BIOMARKER_RESULT_TO_PATIENT':
        var newState = {
          ...state,
          biomarkerResult: action.data.result,
          biomarkerTaken: true
        };
        callApi('patient/update', 'POST', newState);
        return newState;
      default:
        return state;
    }
  } else if (state.biopsyBatchNumber === action.id) {
    switch (action.type) {
      case 'CHANGE_BIOPSY_RESULT_TO_PATIENT':
        var newState = {
          ...state,
          biopsyResult: action.data.result,
          biopsyDone: true
        };
        callApi('patient/update', 'POST', newState);
        return newState;
      default:
        return state;
    }
  } else if (state.patientID !== action.id) {
    return state;
  }
  switch (action.type) {
    case 'INCREMENT_SAMPLES':
      var newState = {
        ...state,
        noSamples: action.increment ? state.noSamples + 1 : state.noSamples,
        sampleID: action.sampleID
      };
      callApi('patient/update', 'POST', newState);
      return newState;

    case 'EDIT_PATIENT':
      var newState = {
        ...state,
        ...action.data
      };
      callApi('patient/update', 'POST', newState);
      return newState;

    case 'REG_CLINIC':
      var newState = {
        ...state,
        ...action.data,
        nurseRegistration: action.nurseRegistration
      };
      callApi('patient/update', 'POST', newState);
      return newState;

    case 'SET_QUESTIONNAIRE_2':
      var newState = {
        ...state,
        ...action.data,
        questionnaire: action.questionnaire
      };
      callApi('patient/update', 'POST', newState);
      return newState;

    case 'TOGGLE_INFORMED_HPV':
      var newState = {
        ...state,
        informedHPV: !state.informedHPV
      };
      callApi('patient/update', 'POST', newState);
      return newState;

    case 'TOGGLE_SEEN':
      var newState = {
        ...state,
        seen: !state.seen
      };
      callApi('patient/update', 'POST', newState);
      return newState;

    case 'SELECT_NURSE_EXAM':
      var newState = {
        ...state,
        nurseExamStatus: action.nurseExamStatus
      };
      callApi('patient/update', 'POST', newState);
      return newState;

    case 'TOGGLE_BIOMARKER_TAKEN':
      var newState = {
        ...state,
        biomarkerTaken: !state.biomarkerTaken
      };
      callApi('patient/update', 'POST', newState);
      return newState;

    case 'EDIT_BIOMARKER_RESULT':
      var newState = {
        ...state,
        biomarkerResult: action.biomarkerResult
      };
      callApi('patient/update', 'POST', newState);
      return newState;

    case 'TOGGLE_QUESTIONNAIRE':
      var newState = {
        ...state,
        questionnaire: !state.questionnaire
      };
      callApi('patient/update', 'POST', newState);
      return newState;

    case 'TOGGLE_INFORMED_BIOMARKER':
      var newState = {
        ...state,
        informedBiomarker: !state.informedBiomarker
      };
      callApi('patient/update', 'POST', newState);
      return newState;

    case 'SELECT_GYN_EXAM':
      var newState = {
        ...state,
        gynExamStatus: action.gynExamStatus
      };
      callApi('patient/update', 'POST', newState);
      return newState;

    case 'TOGGLE_BIOPSY_DONE':
      var newState = {
        ...state,
        biopsyDone: !state.biopsyDone
      };
      callApi('patient/update', 'POST', newState);
      return newState;

    case 'TOGGLE_RECV_BIOPSY_REPORT':
      var newState = {
        ...state,
        biopsyReportRecv: !state.biopsyReportRecv
      };
      callApi('patient/update', 'POST', newState);
      return newState;

    case 'EDIT_GYN_REG':
      if (state.patientID !== action.id) {
        return state;
      }
      var newState = {
        ...state,
        gynRegistration: true,
        gynRegDate: action.data.gynRegDate,
        gynRefReason: action.data.gynRefReason,
        menstruation: action.data.menstruation,
        familyPlanningStatus: Boolean(action.data.familyPlanningStatus),
        contraception: action.data.contraception,
        gynRegRemark: action.data.gynRegRemark
      };
      callApi('patient/update', 'POST', newState);
      return newState;

    case 'EDIT_GYN_EXAM':
      if (state.patientID !== action.id) {
        return state;
      }
      var newState = {
        ...state,
        bimanualResult: action.data.bimanualResult,
        colDoneBefore: Boolean(action.data.colDoneBefore),
        lastColDate: action.data.lastColDate,
        lastColResult: action.data.lastColResult,
        colCurrentDone: Boolean(action.data.colCurrentDone),
        colNotDoneReason: action.data.colNotDoneReason,
        colFindingUOAA: action.data.colFindingUOAA,
        colFindingMAS: action.data.colFindingMAS,
        colFindingV: action.data.colFindingV,
        colFindingLS: action.data.colFindingLS,
        colFindingIS: action.data.colFindingIS,
        swedeScore: action.data.swedeScore,
        biopsyResult: action.data.biopsyResult,
        biopsyDone: Boolean(action.data.biopsyDone),
        gynExamRemark: action.data.gynExamRemark
      };
      callApi('patient/update', 'POST', newState);
      return newState;

    case 'EDIT_GYN_TREAT':
      if (state.patientID !== action.id) {
        return state;
      }
      var newState = {
        ...state,
        treatmentDone: Boolean(action.data.treatmentDone),
        treatmentProcedure: action.data.treatmentProcedure,
        treatmentNotDone: action.data.treatmentNotDone,
        gynTreatRemark: action.data.gynTreatRemark
      };
      callApi('patient/update', 'POST', newState);
      return newState;

    case 'EDIT_GYN_EXIT_MSG':
      if (state.patientID !== action.id) {
        return state;
      }
      var newState = {
        ...state,
        exitMsg: action.data.exitMsg,
        gynExitMsgRemark: action.data.gynExitMsgRemark
      };
      callApi('patient/update', 'POST', newState);
      return newState;

    default:
      return state;
  }
};
