/**
 * Reducer for sign in
 * Used in Sign in UI
 * @exports reducer/lostPassword
 */

export const lostpassword = (state = {}, action) => {
  switch (action.type) {
    case 'LOSTPASSWORD_REQUEST':
      return { ...state, isFetching: true, isSuccess: false, errorMessage: '' };
    case 'LOSTPASSWORD_SUCCESS':
      return { ...state, isFetching: false, isSuccess: true };
    case 'LOSTPASSWORD_ERROR':
      return { ...state, isFetching: false, errorMessage: action.message };

    default:
      return state;
  }
};
