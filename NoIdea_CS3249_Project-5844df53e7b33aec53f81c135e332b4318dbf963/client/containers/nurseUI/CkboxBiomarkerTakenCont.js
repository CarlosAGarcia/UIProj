/** 
 * @namespace nurseUI/CkboxBiomarkerTakenCont
 * @memberof module:container/nurseUI
 * @desc Container to connect 'Biomarker Taken' in Nurse UI to Checkbox component.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';
import { toggleBiomarkerTaken } from '../../actions/NurseActions';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.biomarkerTaken,
    disable: false,
    hide: ''
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleChange: () => dispatch(toggleBiomarkerTaken(row.patientID))
  };
};

const CkboxBiomarkerTakenCont = connect(mapStateToProps, mapDispatchToProps)(Checkbox);
export default CkboxBiomarkerTakenCont;
