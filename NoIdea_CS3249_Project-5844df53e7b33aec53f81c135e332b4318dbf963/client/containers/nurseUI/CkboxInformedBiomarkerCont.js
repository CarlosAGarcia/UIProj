/** 
 * @namespace nurseUI/CkboxInformedBiomarkerCont
 * @memberof module:container/nurseUI
 * @desc Container to connect 'Informed of Biomarker Result' in Nurse UI to Checkbox component.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';
import { toggleInformedBiomarker } from '../../actions/NurseActions';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.informedBiomarker,
    disable: false,
    hide: ''
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleChange: () => dispatch(toggleInformedBiomarker(row.patientID))
  };
};

const CkboxInformedBiomarkerCont = connect(mapStateToProps, mapDispatchToProps)(Checkbox);
export default CkboxInformedBiomarkerCont;
