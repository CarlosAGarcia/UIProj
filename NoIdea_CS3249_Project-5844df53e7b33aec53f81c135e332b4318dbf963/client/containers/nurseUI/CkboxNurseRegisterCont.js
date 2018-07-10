/** 
 * @namespace nurseUI/CkboxNurseRegisterCont
 * @memberof module:container/nurseUI
 * @desc Container to connect 'Registration Done' in Nurse UI to Checkbox component.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.nurseRegistration,
    disable: true,
    hide: ''
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
  };
};

const CkboxNurseRegisterCont = connect(mapStateToProps, mapDispatchToProps)(Checkbox);
export default CkboxNurseRegisterCont;
