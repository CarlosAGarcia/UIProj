import { callApi } from '../util/apiCaller';

/**
 * Reducer for data structure 'sampleHPV'.
 * Used in Lab UI and Gynecologist UI.
 * Takes the whole array of sample objects.
 * @exports reducer/sampleHPV
 */
export const sampleHPV = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_HPV_SAMPLE':
      return action.response;
    case 'ADD_HPV_SAMPLE':
      callApi('sample/add', 'POST', action.newSample);
      return [
        ...state,
        {
          ...action.newSample
        }
      ];
    case 'TOGGLE_LAB_RECEIVED':
    case 'EDIT_HPV_RESULT':
      return state.map(row => oneSample(row, action));

    default:
      return state;
  }
};

/**
 * Reducer for data structure 'sampleBiomarker'.
 * Used in Lab UI and Gynecologist UI.
 * Takes the whole array of sample objects.
 * @exports reducer/sampleBiomarker
 */
export const sampleBiomarker = (state = [], action) => {
  switch (action.type) {
    case 'SEND_BIOMARKER_SAMPLE_FROM_NURSE':
      callApi('sample/add', 'POST', action.newSample);
      return [
        ...state,
        {
          ...action.newSample
        }
      ];
    case 'RECEIVE_BIOMARKER_SAMPLE':
      return action.response;
    case 'TOGGLE_LAB_RECEIVED':
    case 'TOGGLE_SLIDE_PREPARED':
    case 'TOGGLE_SLIDE_STAINED':
    case 'TOGGLE_PATHO_RECEIVED':
    case 'CHANGE_BIOMARKER_RESULT':
      return state.map(row => oneSample(row, action));

    default:
      return state;
  }
};

/**
 * Reducer for data structure 'sampleBiopsy'.
 * Used in Lab UI and Gynecologist UI.
 * Takes the whole array of sample objects.
 * @exports reducer/sampleBiopsy
 */
export const sampleBiopsy = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_BIOPSY_SAMPLE':
      return action.response;
    case 'SEND_BIOPSY_SAMPLE_FROM_GYN':
      callApi('sample/add', 'POST', action.newSample);
      return [
        ...state,
        {
          ...action.newSample
        }
      ];
    case 'TOGGLE_LAB_RECEIVED':
    case 'TOGGLE_SLIDE_PREPARED':
    case 'TOGGLE_SLIDE_STAINED':
    case 'TOGGLE_PATHO_RECEIVED':
    case 'EDIT_BIOPSY_RESULT':
    case 'SEND_BIOPSY_SAMPLE':
      return state.map(row => oneSample(row, action));

    default:
      return state;
  }
};

/**
 * Help reducer object 'oneSample'.
 * Takes one sample entry (one sample).
 * @param {object} state 
 * @param {action} action 
 * @returns {object} next state
 */
const oneSample = (state, action) => {
  var d = new Date();
  if (state.id !== action.id) {
    return state;
  }
  switch (action.type) {
    //Toggle received and add the date if needed
    case 'TOGGLE_LAB_RECEIVED':
      var newState = {
        ...state,
        recvLab: !state.recvLab,
        recvLabDate: !state.recvLab
          ? d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
          : ''
      };
      callApi('sample/update', 'POST', newState);
      return newState;

    //Edit HPV result by lab
    case 'EDIT_HPV_RESULT':
      $('#' + action.data.id).modal('hide');
      var newState = {
        ...state,
        labTestDate: action.data.labTestDate,
        labTestResult: action.data.labTestResult,
        testValue: action.data.testValue,
        labRemark: action.data.labRemark,
        techName: action.data.techName,
        runStatus: action.data.runStatus,
        labTestStatus: true
      };
      callApi('sample/update', 'POST', newState);
      return newState;

    //Toggle slide prepared and add the date if needed
    case 'TOGGLE_SLIDE_PREPARED':
      var newState = {
        ...state,
        slidePrepStatus: !state.slidePrepStatus,
        slidePrepDate: !state.slidePrepStatus
          ? d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
          : ''
      };
      callApi('sample/update', 'POST', newState);
      return newState;

    //Toggle slide stained and add the date if needed
    case 'TOGGLE_SLIDE_STAINED':
      var newState = {
        ...state,
        slideStainStatus: !state.slideStainStatus,
        slideStainDate: !state.slideStainStatus
          ? d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
          : ''
      };
      callApi('sample/update', 'POST', newState);
      return newState;

    case 'TOGGLE_PATHO_RECEIVED':
      var newState = {
        ...state,
        recvPatho: !state.recvPatho,
        recvPathoDate: !state.recvPatho
          ? d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
          : ''
      };
      callApi('sample/update', 'POST', newState);
      return newState;

    //Edit Biomarker result by pathologist
    case 'CHANGE_BIOMARKER_RESULT':
      $('#' + action.data.id).modal('hide');
      if (state.id !== action.id) {
        return state;
      }
      var newState = {
        ...state,
        pathoTestDate: action.data.pathoTestDate,
        result: action.data.result,
        pathoTestStatus: action.data.result == '' ? false : true,
        pathoRemarks: action.data.pathoRemarks,
        pathoName: action.data.pathoName,
        quality: action.data.quality
      };
      callApi('sample/update', 'POST', newState);
      return newState;

    //Edit Biopsy result by pathologist
    case 'EDIT_BIOPSY_RESULT':
      $('#' + action.data.id).modal('hide');
      if (state.id !== action.id) {
        return state;
      }
      var newState = {
        ...state,
        pathoTestDate: action.data.pathoTestDate,
        result: action.data.result,
        pathoTestStatus: action.data.result == '' ? false : true,
        pathoRemarks: action.data.pathoRemarks,
        pathoName: action.data.pathoName
      };
      callApi('sample/update', 'POST', newState);
      return newState;

    default:
      return state;
  }
};
