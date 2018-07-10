/** 
 * @namespace nurseUI/CkboxPatientSeenCont
 * @memberof module:container/nurseUI
 * @desc Container to connect 'Patient Seen' in Nurse UI to Checkbox component.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';
import { toggleSeen } from '../../actions/NurseActions';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.seen,
    disable: false,
    hide: ''
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
   handleChange: () => dispatch(toggleSeen(row.patientID))
  };
};

const CkboxPatientSeenCont = connect(mapStateToProps, mapDispatchToProps)(Checkbox);
export default CkboxPatientSeenCont;