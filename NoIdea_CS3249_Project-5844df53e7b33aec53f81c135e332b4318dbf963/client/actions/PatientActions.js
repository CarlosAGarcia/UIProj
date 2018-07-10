import { callApi } from '../util/apiCaller';

/**
 * Receives patient (from the server)
 * @method RECEIVE_PATIENT
 * @type {action}
 * @param {string} response
 */
const receivePatientAction = (response) => {
  return {
    type: 'RECEIVE_PATIENT',
    response
  };
};

export const retrievePatient = () => dispatch => {
  callApi('patient/getAll', 'GET')
      .then(values => {
        /*if (values.success) dispatch(receivePatientAction(values.success));
        else console.log(values);*/
      })
      .catch(err => console.log(err));
};