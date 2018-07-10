import { callApi } from '../util/apiCaller';

/**
 * Reducer for data structure 'household'.
 * Used in Household UI.
 * Takes the whole array of household objects.
 * @exports reducer/household
 */
export const household = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_PERSON':
      return action.response;
    case 'ADD_PERSON':
      return [
        ...state,
        {
          ...action.data,
          eligibleAsking: action.eligibleAsking
        }
      ];
    case 'EDIT_PERSON':
    case 'SET_ELIGIBILITY':
    case 'SET_QUESTIONNAIRE_1':
    case 'SET_HPV_SAMPLE':
      return state.map(row => onePerson(row, action));

    case 'DELETE_PERSON':
      callApi('household/delete', 'DELETE', { id: action.id });
      return state.filter(person => {
        if (person.id !== action.id) return person;
      });

    default:
      return state;
  }
};

/**
 * Help reducer object 'onePerson'.
 * Takes one household entry (a person).
 * @param {object} state 
 * @param {action} action 
 * @returns {object} next state
 */
const onePerson = (state, action) => {
  if (state.id !== action.id) {
    return state;
  }
  switch (action.type) {
    case 'EDIT_PERSON':
      var newState = {
        ...state,
        ...action.data,
        eligibleAsking: action.eligibleAsking
      };
      callApi('household/update', 'POST', newState);
      return newState;

    case 'SET_ELIGIBILITY':
      var newState = {
        ...state,
        ...action.data,
        eligibleStudy: action.eligibleStudy
      };
      callApi('household/update', 'POST', newState);
      return newState;

    case 'SET_QUESTIONNAIRE_1':
      var newState = {
        ...state,
        ...action.data,
        questionnaire: action.questionnaire
      };
      callApi('household/update', 'POST', newState);
      return newState;

    case 'SET_HPV_SAMPLE':
      var newState = {
        ...state,
        ...action.data,
        sampleReq: action.sampleReq
      };
      callApi('household/update', 'POST', newState);
      return newState;

    default:
      return state;
  }
};
