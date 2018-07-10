/**
 * Reducer for handling a user
 * @exports reducer/user
 */
export const user = (state = {}, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      return { isSignedIn: true, apiKey: action.apiKey };
    case 'LOGOUT':
      return { isSignedIn: false, apiKey: '' };
    default:
      return state;
  }
};
