import fetch from 'isomorphic-fetch';
import * as config from './config';
import { getApiKey } from './helpFunctions';

const port = config.port;
//We are going to use the address of '/api' as for communication with server
export const API_URL = config.url;

/**
 * Effectuate an API call to a given end point returning the response as JSON in a Promise
 * 
 * @param {string} endpoint The endpoint in the url
 * @param {string} method The method for the api call
 * @param {object} body The body to be sent
 * @returns {Promise} a promise containing the response or and error
 */
export const callApi = (endpoint, method = 'post', body) => {
  let option = {
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': getApiKey()
    },
    method
  }
  if (body) option.body = JSON.stringify(body);
  return fetch(`${API_URL}/${endpoint}`, option).then(response => {
    if (response.status >= 400) {
      let error = { error: 'Server responded with ERROR ' + response.status };
      console.warn(error);
      return error;
    }
    return response.json();
  });
};
