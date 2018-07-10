import { callApi } from '../util/apiCaller';

/**
 * Reducer for data structure 'community'.
 * Used in Community UI.
 * Takes the whole array of community objects.
 * @exports reducer/community
 */
export const community = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_HOUSEHOLD':
      return action.response;
    case 'ADD_HOUSEHOLD':
      return [...state, { ...action.data, visited: action.visited }];
    case 'UPDATE_HOUSEHOLD':
    case 'TOGGLE_VISITED':
    case 'TOGGLE_COMPLETED':
    case 'ADD_REMARK':
      return state.map(row => oneHousehold(row, action));

    default:
      return state;
  }
};

/**
 * Help reducer object 'oneHousehold'.
 * Takes one community entry (a household).
 * @param {object} state 
 * @param {action} action 
 *  @returns {object[]} next state
 */
const oneHousehold = (state, action) => {
  if (state.id !== action.id) {
    return state;
  }
  switch (action.type) {
    case 'UPDATE_HOUSEHOLD':
      var newState = { ...state, ...action.data };
      if (state.visitDate !== '' || action.data.visitDate !== '') {
        return { ...newState, visited: true };
      }
      callApi('community/update', 'POST', newState);
      return newState;
    case 'TOGGLE_VISITED':
      // Generate new date if not already checked
      var d = new Date();
      var newDate = '';
      if (!state.visited) {
        newDate = d.toJSON().slice(0, 10);
      }
      var newState = {
        ...state,
        visited: !state.visited,
        visitDate: newDate
      };
      callApi('community/update', 'POST', newState);
      return newState;
    case 'TOGGLE_COMPLETED':
      var newState = {
        ...state,
        completed: !state.completed
      };
      callApi('community/update', 'POST', newState);
      return newState;
    case 'ADD_REMARK':
      var newState = {
        ...state,
        remarks: action.remarks
      };
      callApi('community/update', 'POST', newState);
      return newState;
    default:
      return state;
  }
};
