/** 
 * @namespace Logic/Header
 * @memberof module:container/Logic
 * @desc Container to connect corresponding wrapper to Header component
 */
import { connect } from 'react-redux';
import Header from '../components/Header';
import { logout } from '../actions/SignInActions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return { loggedIn: state.user.isSignedIn };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
