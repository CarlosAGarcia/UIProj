/** 
 * @module utility functions
 */

/**
 * Converts string values to corresponding boolean values.
 * 
 * This is needed for selected properties in forms.
 * @method convertBool
 * @param {object} data Array of objects to be converted 
 */
export const convertBool = data => {
  var newData = JSON.parse(JSON.stringify(data));
  for (var entry in newData) {
    if (newData[entry] == 'true') newData[entry] = true;
    else if (newData[entry] == 'false') newData[entry] = false;
  }
  return newData;
};

/**
 * Check if a user is (locally) logged in. Global check is done while calling API
 * 
 * @method isLoggedIn
 */
export const isLoggedIn = () => {
  try {
    let user = JSON.parse(localStorage.getItem('redux')).user;
    return user.isSignedIn;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/**
 * Return the API KEY of the user (or empty string)
 * 
 * @method getApiKey
 */
export const getApiKey = () => {
  try {
    let user = JSON.parse(localStorage.getItem('redux')).user;
    return user.apiKey || '';
  } catch (error) {
    console.log(error);
    return '';
  }
};