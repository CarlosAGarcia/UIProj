/** 
 * @namespace nurseUI/CkboxInformedHPVCont
 * @memberof module:container/nurseUI
 * @desc Container to connect 'Informed of HPV Result' in Nurse UI to Checkbox component.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';
import { toggleInformedHPV } from '../../actions/NurseActions';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.informedHPV,
    disable: false,
    hide: ''
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleChange: () => dispatch(toggleInformedHPV(row.patientID))
  };
};

const CkboxInformedHPVCont = connect(mapStateToProps, mapDispatchToProps)(Checkbox);
export default CkboxInformedHPVCont;
