/**
 * Reducer for sign up
 * Used in Sign up UI
 * @exports reducer/reset
 */

export const reset = (state = {}, action) => {
  switch (action.type) {
    case 'RESET_REQUEST':
      return { ...state, isFetching: true, isSuccess: false, errorMessage: '' };
    case 'RESET_SUCCESS':
      return { ...state, isFetching: false, isSuccess: true };
    case 'RESET_ERROR':
      return { ...state, isFetching: false, errorMessage: action.message };

    default:
      return state;
  }
};
