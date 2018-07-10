/** @module community actions
 * @desc Redux actions for Community UI
 */
import { callApi } from '../util/apiCaller';

/**
 * Receives samples (from the server)
 * @method RECEIVE_HPV_SAMPLE
 * @type {action}
 * @param {string} response
 */
const receiveHPVAction = (response) => {
  return {
    type: 'RECEIVE_HPV_SAMPLE',
    response
  };
};

export const receiveHPV = () => dispatch => {
  callApi('sample/HPV/getAll', 'GET')
      .then(values => {
        if (values.success) dispatch(receiveHPVAction(values.success));
        else console.log(values);
      })
      .catch(err => console.log(err));
};


/**
 * Receives samples (from the server)
 * @method RECEIVE_BIOPSY_SAMPLE
 * @type {action}
 * @param {string} response
 */
const receiveBiopsyAction = (response) => {
  return {
    type: 'RECEIVE_BIOPSY_SAMPLE',
    response
  };
};

export const receiveBiopsy = () => dispatch => {
  callApi('sample/Biopsy/getAll', 'GET')
      .then(values => {
        if (values.success) dispatch(receiveBiopsyAction(values.success));
        else console.log(values);
      })
      .catch(err => console.log(err));
};


/**
 * Receives samples (from the server)
 * @method RECEIVE_BIOMARKER_SAMPLE
 * @type {action}
 * @param {string} response
 */
const receiveBiomarkerAction = (response) => {
  return {
    type: 'RECEIVE_BIOMARKER_SAMPLE',
    response
  };
};

export const receiveBiomarker = () => dispatch => {
  callApi('sample/Biomarker/getAll', 'GET')
      .then(values => {
        if (values.success) dispatch(receiveBiomarkerAction(values.success));
        else console.log(values);
      })
      .catch(err => console.log(err));
};