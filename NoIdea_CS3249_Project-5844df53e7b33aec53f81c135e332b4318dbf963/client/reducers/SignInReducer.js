/**
 * Reducer for sign in
 * Used in Sign in UI
 * @exports reducer/signin
 */

export const signin = (state = {}, action) => {
  switch (action.type) {
    case 'SIGNIN_REQUEST':
      return { ...state, isFetching: true, isSuccess: false, errorMessage: '' };
    case 'SIGNIN_SUCCESS':
      return { ...state, isFetching: false, isSuccess: true };
    case 'SIGNIN_ERROR':
      return { ...state, isFetching: false, errorMessage: action.message };

    default:
      return state;
  }
};
