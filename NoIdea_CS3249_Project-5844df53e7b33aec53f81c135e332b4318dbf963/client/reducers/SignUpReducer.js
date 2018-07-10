/**
 * Reducer for sign up
 * Used in Sign up UI
 * @exports reducer/signup
 */

export const signup = (state = {}, action) => {
  switch (action.type) {
    case 'SIGNUP_REQUEST':
      return { ...state, isFetching: true, isSuccess: false, errorMessage: '' };
    case 'SIGNUP_SUCCESS':
      return { ...state, isFetching: false, isSuccess: true };
    case 'SIGNUP_ERROR':
      return { ...state, isFetching: false, errorMessage: action.message };

    default:
      return state;
  }
};
