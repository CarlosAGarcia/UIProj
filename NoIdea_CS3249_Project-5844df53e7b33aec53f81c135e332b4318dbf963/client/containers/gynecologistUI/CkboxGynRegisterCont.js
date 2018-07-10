/** 
 * @namespace gynecologistUI/CkboxGynRegisterCont
 * @memberof module:container/gynecologistUI
 * @desc Container to connect 'Registration Done' in Gynecologist UI to Checkbox component.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.gynRegistration,
    disable: true,
    hide: ''
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
  };
};

const CkboxGynRegisterCont = connect(mapStateToProps, mapDispatchToProps)(Checkbox);
export default CkboxGynRegisterCont;
